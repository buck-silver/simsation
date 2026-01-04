import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  effect,
  inject,
} from '@angular/core';
import { ShellThemeService } from '../../core/shell/services/shell-theme.service';
import { AssetPipe } from '../pipes/asset.pipe';

export type LogoOptions = {
  srcDark: string;
  srcLight: string;
  defaultHeight?: string;
  defaultAlt?: string;
  defaultTitle?: string;
};

@Directive({
  selector: 'img[logo]',
})
export class LogoDirective implements OnInit, LogoOptions {
  protected theme = inject(ShellThemeService);
  protected el = inject<ElementRef<HTMLImageElement>>(ElementRef);
  private assetPipe = new AssetPipe();

  @Input()
  srcDark: string = '';
  @Input()
  srcLight: string = '';
  @Input()
  defaultHeight: string = '56px';
  @Input()
  defaultAlt: string = 'Page Logo';
  @Input()
  defaultTitle: string = 'Page Logo';
  @Input()
  crossOrigin: string = 'anonymous';

  ngOnInit() {
    this.el.nativeElement.alt = this.defaultAlt;
    this.el.nativeElement.title = this.defaultTitle;
    this.el.nativeElement.style.height = this.defaultHeight;
    this.el.nativeElement.style.objectFit = 'contain';
    this.el.nativeElement.crossOrigin = this.crossOrigin;
  }

  protected onThemeChange = effect(() => {
    const src =
      this.theme.currentTheme() === 'theme.dark' ? this.srcDark : this.srcLight;
    this.el.nativeElement.src = this.assetPipe.transform(src);
  });
}
