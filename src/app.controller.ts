import { Controller, Get, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('reports')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createReport(@Body() data: any) {
    await this.appService.createReport(data);
  }

  @Get()
  async getReports(){
    return await this.appService.getReports();
  }
}
