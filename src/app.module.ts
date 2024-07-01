// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreeController } from './tree/tree.controller'; // Ensure this import is correct

@Module({
  imports: [],
  controllers: [AppController, TreeController], // Include TreeController here
  providers: [AppService],
})
export class AppModule {}
