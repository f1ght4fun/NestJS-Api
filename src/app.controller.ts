import { Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCollection(): Observable<Partial<{ id: number; name: string }>[]> {
    return this.appService.getCollection();
  }

  @Post()
  generateItem(): void {
    this.appService.generateNewItem();
  }
}
