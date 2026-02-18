import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';



function getDeploymentUrl(): string | null {
  

  return null;
}

function log(...args: any[]): void {
  if (import.meta.env.NODE_ENV === 'production') {
    console.log(...args);
  }
}
