import { ApiResponse, ApiResponseError } from "@/models/response";
import { VideoAnalyzerService } from "@/services/video-analyzer.service";
import { Controller, Get, Param } from "routing-controllers";

@Controller('/video')
export class VideoAnalyzerController {
  private readonly videoAnalyzerService: VideoAnalyzerService

  constructor() {
    this.videoAnalyzerService = new VideoAnalyzerService();
  }

  @Get('/:path')
  async analyzeVideo(@Param('path') path: string): Promise<ApiResponse<any>> {
    try {
      const url = `https://www.youtube.com/watch?v=${path}`;
      const response = await this.videoAnalyzerService.analyzeVideo(url);

      return new ApiResponse('Video analysis completed', response);
    } catch (error) {
      return new ApiResponseError(error.message);
    }    
  }
}