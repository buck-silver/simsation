import {
  Component,
  input,
  afterNextRender,
  inject,
  DestroyRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PageModule } from '../page.module';
import { PageDirective } from '../components/page.directive';

@Component({
  selector: 'error-page',
  imports: [MatButtonModule, PageModule],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>Oops!</h1>
    </header>
    <article pageContent>
      <h2>{{ errorCode() }} - {{ errorTitle() }}</h2>
      <p class="error-message">{{ errorMessage() }}</p>
      <a matButton="elevated" routerLink="/"> Take me home! </a>
    </article>
  `,
  styles: `
    .styled-h2 {
      text-align: center;
    }

    .not-found {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: 1rem 0;

      .error-message {
        width: 100%;
        margin: 0;
        padding: 0;
      }
    }
  `,
})
export default class ErrorPage {
  private readonly destroyRef = inject(DestroyRef);
  readonly errorCode = input<number | undefined>(404);
  readonly errorTitle = input<string | undefined>('Page not found');
  readonly errorMessage = input<string | undefined>(
    `It seems the page you were looking for is missing.`
  );

  constructor() {
    afterNextRender(() => {
      const error_meta =
        (document.getElementById('err-tag') as HTMLMetaElement) ??
        document.createElement('meta');
      error_meta.id = 'err-tag';
      error_meta.name = 'robots';
      error_meta.content = 'noindex';
      this.destroyRef.onDestroy(() => error_meta.remove());
    });
  }
}
