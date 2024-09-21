import * as fs from 'fs';
import { OpenAI } from 'openai';
import { OPENAI_API_KEY } from '@/config';
import { exec } from 'youtube-dl-exec';
import { LANGUAGES } from '@/constants/languages';
import { spawn } from 'child_process';

export class VideoAnalyzerService {
  private openai: OpenAI;
  private readonly tempFile: string;

  constructor() {
    this.openai = new OpenAI({ apiKey: OPENAI_API_KEY});
    this.tempFile = 'temp_audio.mp3';
  }

  async getAudio(url: string): Promise<void> {
    try {
      console.log('Downloading audio from video...');

      await exec(url, {
        extractAudio: true,
        audioFormat: 'mp3',
        output: this.tempFile,
      })
        .then(output => {
          console.log('Audio downloaded successfully!');
        })
        .catch(err => {
          console.error('Error downloading audio', err);
        });
    } catch (error) {
      console.log(`Error getting audio from video: ${error.message}`);
      throw new Error('Error getting audio from video');
    }
  }

  // async transcribeWithWhisperApi(): Promise<string> {
  //   try {
  //     console.log('Transcribing audio with Whisper...');

  //     const transcription = await this.openai.audio.transcriptions.create({
  //       file: fs.createReadStream(this.tempFile),
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
      const pythonProcess = spawn('python3', ['./src/scripts/whisper_transcribe.py']);

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
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Summarize the following text in detailed topics in Markdown format in the language ${ language ? LANGUAGES[language] : LANGUAGES.en }.
              Create a main title that reflects the text's context and include relevant subheadings. Highlight key points and themes clearly, using bullet points or numbered lists.
              Maintain a neutral tone and avoiding a narrative style:\n\n
              ${transcription}`,
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
      const url = `https://www.youtube.com/watch?v=${path}`;
      console.log(`Analyzing video from ${url}`);
      
      await this.getAudio(url);
      
      const transcription = await this.transcribeWithWhisper();
      console.log('\nTranscription result:\n', transcription);
      fs.unlinkSync(this.tempFile);

      const summary = await this.summarizeTranscription(transcription, language);
      console.log('Summary result:\n', summary);

      return summary;
    } catch (error) {
      console.error('Error analyzing video', error);
    }
  }
}
