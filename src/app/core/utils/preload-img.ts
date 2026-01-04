import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { AssetPipe } from '../pipes/asset.pipe';

/**
 * Preloads images by downloading and caching them in the background.
 * Only runs in browser context (skipped during SSR).
 * 
 * @param items - Array of items to preload images from
 * @param pathExtractor - Function to extract the path from each item
 * @param platformId - Optional platform ID. If not provided, will attempt to inject it.
 * 
 * @example
 * // With objects and extractor
 * const platformId = inject(PLATFORM_ID);
 * preloadImg(items, (item) => item.url, platformId);
 * 
 * @example
 * // With array of strings (no extractor needed)
 * const platformId = inject(PLATFORM_ID);
 * preloadImg(['path/to/image.png', 'another/image.jpg'], undefined, platformId);
 */
export function preloadImg(items: string[], pathExtractor?: undefined, platformId?: object): void;
export function preloadImg<T>(
  items: T[],
  pathExtractor: (item: T) => string,
  platformId?: object
): void;
export function preloadImg<T>(
  items: T[],
  pathExtractor?: (item: T) => string,
  platformId?: object
): void {
  // Get platformId from parameter or inject it
  const platform = platformId ?? inject(PLATFORM_ID);
  
  // Skip during SSR - only run in browser
  if (!isPlatformBrowser(platform)) {
    return;
  }

  const assetPipe = new AssetPipe();
  const extractor = pathExtractor ?? ((item: T) => item as string);
  items.forEach((item) => {
    const path = extractor(item);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = assetPipe.transform(path);
  });
}
