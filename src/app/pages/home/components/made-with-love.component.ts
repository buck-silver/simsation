import { Component } from '@angular/core';

@Component({
  selector: 'made-with-love',
  template: `
    <div class="heart-throb">
      <p>Made with</p>
      <svg
        class="heart-icon"
        width="5rem"
        height="5rem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        aria-labelledby="svgTitle svgDesc"
        role="img"
      >
        <title id="svgTitle">A heart icon</title>
        <desc id="svgDesc">A heart shape filled with red color</desc>
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          fill="currentColor"
          d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
        />
      </svg>
      <p>by</p>
    </div>
  `,
  styles: `


    .heart-throb {
      align-self: center;
      font-style: italic;
      text-align: center;
      margin: 0rem;
    }

    .heart-throb > p {
      display: inline-block;
      font-family: 'Pacifico', cursive;
      margin: 0;
      padding: 0;
      font-size: 3rem;
    }

    .heart-icon {
      color: palevioletred;
      margin: 0 0 0 1rem;
      animation: heartbeat 1s infinite;
    }

    @keyframes heartbeat {
      0% {
        transform: scale(0.75);
      }
      20% {
        transform: scale(1);
      }
      40% {
        transform: scale(0.75);
      }
      60% {
        transform: scale(1);
      }
      80% {
        transform: scale(0.75);
      }
      100% {
        transform: scale(0.75);
      }
    }
  `,
})
export class MadeWithLoveComponent {}
