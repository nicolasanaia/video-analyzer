import ytdl from 'ytdl-core';
import * as fs from 'fs';
import { OpenAI } from 'openai';
import { Transcription } from 'openai/resources/audio/transcriptions';
import { OPENAI_API_KEY } from '@/config';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { exec } from 'youtube-dl-exec';

export class VideoAnalyzerService {
  private openai: OpenAI;
  private readonly tempFile: string;

  constructor() {
    this.openai = new OpenAI();
    this.tempFile = 'temp_audio.mp3';
  }

  async getAudio(url: string): Promise<void> {
    try {
      await exec(url, {
        extractAudio: true,
        audioFormat: 'mp3',
        output: this.tempFile,
      })
        .then(output => {
          console.log('Audio downloaded successfully.');
        })
        .catch(err => {
          console.error('Error downloading audio:', err);
        });
      
    } catch (error) {
      console.log(`Error getting audio from video: ${error.message}`);
      throw new Error('Error getting audio from video');
    }
  }

  async transcribeWithWhisper(): Promise<Transcription> {
    try { 
      const transcription = await this.openai.audio.transcriptions.create({
        file: fs.createReadStream(this.tempFile),
        model: "whisper-1",
      });

      return transcription;
    } catch (error) {
      console.error(`Error transcribing with Whisper: ${error.message}`, error);
      throw new Error('Error transcribing with Whisper');
    }
  }

  async analyzeVideo(url: string): Promise<void> {
    try {
      fs.unlinkSync(this.tempFile);
      console.log(`Analyzing video from ${url}`);
      
      await this.getAudio(url);
      
      const transcription = await this.transcribeWithWhisper();
      console.log('Transcription result:', transcription);
    } catch (error) {
      console.error('Error analyzing video', error);
    }
  }
}
