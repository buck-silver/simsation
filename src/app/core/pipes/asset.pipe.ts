import { Pipe, PipeTransform } from '@angular/core';
import { ENVIRONMENT } from '../../config/environment.config';

@Pipe({
  name: 'asset',
})
export class AssetPipe implements PipeTransform {
  transform(relativePath: string): string {
    // Remove leading slash if present
    const cleanPath = relativePath.startsWith('/') 
      ? relativePath.slice(1) 
      : relativePath;
    
    return `${ENVIRONMENT.ASSETS_PATH}/${cleanPath}`;
  }
}
