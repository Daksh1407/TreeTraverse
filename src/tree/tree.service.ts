// src/tree/tree.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class TreeService {
    private treeData: Record<string, any> = {};

    async saveTree(username: string, treeData: any) {
        this.treeData[username] = treeData;
        return { message: 'Tree saved successfully' };
    }

    async getTree(username: string) {
        return this.treeData[username] || { error: 'Tree not found' };
    }
}
