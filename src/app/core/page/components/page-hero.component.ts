// import { CommonModule } from '@angular/common';
// import { Component, OnInit, input } from '@angular/core';

// @Component({
//   imports: [CommonModule],
//   selector: 'page-hero',
//   host: {
//     class: 'page-hero',
//   },
//   template: `
//     <div class="page-hero-img" [ngStyle]="styles">
//       <div class="page-hero-contents">
//         <div class="page-hero-msg">
//           <ng-content></ng-content>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: `
//     :host {
//       display: block;
//       position: relative;
//       margin: 0;
//       padding: 0;
//       height: 40vh;
//     }

//     .page-hero-img {
//       height: 100%;
//       text-align: center;
//       background-size: cover;
//       background-attachment: fixed;
//       background-repeat: no-repeat;
//     }

//     .page-hero-contents {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100%;
//     }

//     .page-hero-msg {
//       font-family: 'Oswald', Helvetica, Arial, sans-serif;
//       font-size: calc(5vw);
//       line-height: calc(5vw);
//     }
//   `,
// })
// export class PageHeroComponent implements OnInit {
//   readonly src = input<string>('');

//   readonly gradients = input<string[]>([
//     'rgba(0, 0, 0, 0.5)',
//     'rgba(0, 0, 0, 0.5)',
//   ]);

//   readonly bgGradientRotation = input<string>('to bottom');
//   readonly bgAttachment = input<string>('scroll');
//   readonly bgColor = input<string>('inherit');
//   readonly bgPosition = input<string>('center center');
//   readonly bgSize = input<string>('cover');

//   styles: any;

//   constructor() {}

//   ngOnInit(): void {
//     const linearGradient = `linear-gradient(${this.bgGradientRotation()}, ${this.gradients().join(',')})`;

//     const url = `url('${this.src()}')`;

//     this.styles = {
//       'background-attachment': `${this.bgAttachment()}`,
//       'background-color': `${this.bgColor()}`,
//       'background-image': `${linearGradient}, ${url}`,
//       'background-position': `${this.bgPosition()}`,
//       'background-size': `${this.bgSize()}`,
//     };
//   }
// }
