import { CONFIG } from '../config';

export interface MemoryLayer {
  session: any[];
  working: any[];
  longTerm: any[];
  vector: any[];
}

export class MemoryOS {
  private layers: MemoryLayer = { session: [], working: [], longTerm: [], vector: [] };
  async store(key: string, value: any, layer: keyof MemoryLayer = 'longTerm') {
    this.layers[layer].push({ key, value, timestamp: Date.now() });
    return { success: true };
  }
  // More advanced methods...
}