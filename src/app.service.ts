import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createReport(data: any) {
    await this.prisma.report.create({
      data: {
        id: data.id,
        date: data.date,
        email: data.email,
        address: data.address,
        image: data.image
      }
    });
  }

  async getReports() {
    return await this.prisma.report.findMany();
  }
}
