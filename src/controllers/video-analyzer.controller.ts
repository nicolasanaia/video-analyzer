import { ApiInternalServerError, ApiResponse, ApiResponseError } from "@/models/response";
import { VideoAnalyzerService } from "@/services/video-analyzer.service";
import { Controller, Get, Param, QueryParam } from "routing-controllers";

@Controller('/video')
export class VideoAnalyzerController {
  private readonly videoAnalyzerService: VideoAnalyzerService

  constructor() {
    this.videoAnalyzerService = new VideoAnalyzerService();
  }

  @Get('/:path')
  async analyzeVideo(@Param('path') path: string, @QueryParam('language') language?: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.videoAnalyzerService.analyzeVideo(path, language);

      return new ApiResponse('Video analysis completed', response);
    } catch (error) {
      throw new ApiResponseError(error.message, error.code, error.body);
    }    
  }
};
