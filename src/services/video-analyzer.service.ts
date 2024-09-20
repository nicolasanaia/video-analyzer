import * as fs from 'fs';
import { OpenAI } from 'openai';
import { OPENAI_API_KEY } from '@/config';
import { exec } from 'youtube-dl-exec';

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

  async transcribeWithWhisper(): Promise<string> {
    try {
      console.log('Transcribing audio with Whisper...');

      const transcription = await this.openai.audio.transcriptions.create({
        file: fs.createReadStream(this.tempFile),
        model: 'whisper-1',
      });

      return transcription.text;
    } catch (error) {
      console.error(`Error transcribing with Whisper\n`, error);
      throw new Error('Error transcribing with Whisper');
    }
  }

  async summarizeTranscription(transcription: string): Promise<string> {
    try {
      console.log('\n\nSummarizing transcription...');

      const summary = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Summarize the following text in detailed topics in Markdown format. Create a main title that reflects the text's context and include relevant subheadings. Highlight key points and themes clearly, using bullet points or numbered lists. Incorporate notable quotes or phrases from the text for added emphasis, while maintaining a neutral tone and avoiding a narrative style:\n\n
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

  async analyzeVideo(url: string): Promise<string> {
    try {
      console.log(`Analyzing video from ${url}`);
      
      await this.getAudio(url);
      
      const transcription = await this.transcribeWithWhisper();
      console.log('\nTranscription result:\n', transcription);
      fs.unlinkSync(this.tempFile);

      const summary = await this.summarizeTranscription(transcription);
      console.log('Summary result:\n', summary);

      return summary;
    } catch (error) {
      console.error('Error analyzing video', error);
    }
  }
}
