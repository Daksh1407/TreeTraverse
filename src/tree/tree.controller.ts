// src/tree/tree.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TreeService } from './tree.service';

@Controller('tree')
export class TreeController {
    constructor(private readonly treeService: TreeService) {}

    @Post(':username/save')
    async saveTree(@Param('username') username: string, @Body() treeData: any) {
        // Implement logic to save the tree data for the given username
        return this.treeService.saveTree(username, treeData);
    }

    @Get(':username')
    async getTree(@Param('username') username: string) {
        // Implement logic to retrieve the tree data for the given username
        return this.treeService.getTree(username);
    }
}
