import { ApiResponse, ApiResponseError } from "@/models/response";
import { VideoAnalyzerService } from "@/services/video-analyzer.service";
import { Controller, Get, Param, Params } from "routing-controllers";

@Controller('/video')
export class VideoAnalyzerController {
  private readonly videoAnalyzerService: VideoAnalyzerService

  constructor() {
    this.videoAnalyzerService = new VideoAnalyzerService();
  }

  @Get('/:path/:language')
  async analyzeVideo(@Param('path') path: string, @Param('language') language?: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.videoAnalyzerService.analyzeVideo(path, language);

      return new ApiResponse('Video analysis completed', response);
    } catch (error) {
      return new ApiResponseError(error.message);
    }    
  }
}