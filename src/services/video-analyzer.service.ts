import * as fs from 'fs';
import { OpenAI } from 'openai';
import { OPENAI_API_KEY } from '@/config';
import { exec } from 'youtube-dl-exec';
import { spawn } from 'child_process';
import { AUDIO_TEMP_FILE, PYTHON_WHISPER_SCRIPT } from '@/constants/paths';
import { ApiInternalServerError } from '@/models/response';
import { CHAT_GPT_MODEL, CHAT_GPT_PROMPT, CHAT_GPT_ROLE, YOUTUBE_BASE_URL } from '@/constants/api';

export class VideoAnalyzerService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({ apiKey: OPENAI_API_KEY});
  }

  async getAudio(url: string): Promise<void> {
    try {
      console.log('Downloading audio from video...');

      await exec(url, {
        extractAudio: true,
        audioFormat: 'mp3',
        output: AUDIO_TEMP_FILE,
      });

      console.log('Audio downloaded successfully');
    } catch (error) {
      console.log(`Error getting audio from video`);
      throw new Error('Error getting audio from video');
    }
  }

  // async transcribeWithWhisperApi(): Promise<string> {
  //   try {
  //     console.log('Transcribing audio with Whisper...');

  //     const transcription = await this.openai.audio.transcriptions.create({
  //       file: fs.createReadStream(AUDIO_TEMP_FILE),
  //       model: 'whisper-1',
  //     });

  //     return transcription.text;
  //   } catch (error) {
  //     console.error(`Error transcribing with Whisper\n`, error);
  //     throw new Error('Error transcribing with Whisper');
  //   }
  // }

  async transcribeWithWhisper(): Promise<any> {	
    return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python3', [PYTHON_WHISPER_SCRIPT]);

      let scriptOutput = '';

      pythonProcess.stdout.on('data', (data) => {
        scriptOutput += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        reject(new Error(data.toString()));
      });

      pythonProcess.on('close', (code) => {
        if (code === 0) {
          try {
            console.log('Transcription result:\n', scriptOutput);
            const output = JSON.parse(scriptOutput);
            resolve(output.text);
          } catch (parseError) {
            reject(new Error('Failed to parse Python script output'));
          }
        } else {
          reject(new Error(`Python script exited with code ${code}`));
        }
      });
    });  
  }

  async summarizeTranscription(transcription: string, language?: string): Promise<string> {
    try {
      console.log('\n\nSummarizing transcription in ...');

      const summary = await this.openai.chat.completions.create({
        model: CHAT_GPT_MODEL,
        messages: [
          {
            role: CHAT_GPT_ROLE,
            content: await CHAT_GPT_PROMPT(language, transcription),
          },
        ],
      });

      return summary.choices[0].message.content;
    } catch (error) {
      console.error(`Error summarizing transcription`, error);
      throw new Error('Error summarizing transcription');
    }
  }

  async analyzeVideo(path: string, language?: string): Promise<any> {
    try {
      const url = `${YOUTUBE_BASE_URL}${path}`;
      console.log(`Analyzing video from ${url}`);
      
      await this.getAudio(url);
      
      const transcription = await this.transcribeWithWhisper();
      console.log('\nTranscription result:\n', transcription);

      const summary = await this.summarizeTranscription(transcription, language);
      console.log('Summary result:\n', summary);
      fs.unlinkSync(AUDIO_TEMP_FILE);

      return summary;
    } catch (error) {
      console.error('Error analyzing video', error);
      throw new ApiInternalServerError(error.message);
    }
  }
}
