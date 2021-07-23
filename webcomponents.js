const headerFooterCssStyle = `
          /* ==========================================================================
             Reset
             ========================================================================== */
          
          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed,
          figure, figcaption, footer, header, hgroup,
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
          }
          
          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure,
          footer, header, hgroup, menu, nav, section {
              display: block;
          }
          
          /* Font */
          @font-face {
              font-family: flanders-sans;
              src: url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-light.woff2) format("woff2"),
              url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-light.woff) format("woff");
              font-weight: 300;
              font-style: normal;
              font-display: fallback;
          }
          
          @font-face {
              font-family: flanders-sans;
              src: url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-regular.woff2) format("woff2"),
              url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-regular.woff) format("woff");
              font-weight: 400;
              font-style: normal;
              font-display: fallback;
          }
          
          @font-face {
              font-family: flanders-sans;
              src: url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-medium.woff2) format("woff2"),
              url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-medium.woff) format("woff");
              font-weight: 500;
              font-style: normal;
              font-display: fallback;
          }
          
          @font-face {
              font-family: flanders-sans;
              src: url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-bold.woff2) format("woff2"),
              url(https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-bold.woff) format("woff");
              font-weight: 700;
              font-style: normal;
              font-display: fallback;
          }
          
          /* Global styling */
          *,
          *:before,
          *:after {
              box-sizing: inherit;
          }
          
          html {
              box-sizing: border-box;
              font-family: "flanders-sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              font-size: 62.5%;
              min-height: 100%;
              background-color: #ffffff;
              text-rendering: optimizeLegibility;
              -webkit-overflow-scrolling: touch;
          }
          
          body {
              font-size: 1.5rem;
              line-height: 1.5;
          }
          
          ::-moz-selection {
              color: #212326;
              background-color: #DCECFD;
          }
          
          ::selection {
              color: #212326;
              background-color: #DCECFD;
          }
          
          /* Brand */
          .au-c-brand {
              display: inline-flex;
              align-items: center;
              text-decoration: none;
              position: relative;
          }
          
          .au-c-brand--link:focus {
              outline: 0;
          }
          
          .au-c-brand__logo {
              position: relative;
              width: 4.2rem;
              height: 4.2rem;
              padding-left: 0.75rem;
              overflow: hidden;
              transition: background-color 125ms cubic-bezier(0.19, 1, 0.22, 1);
          }
          
          .au-c-brand__logo::after,
          .au-c-brand__logo::before {
              display: block;
              position: absolute;
              content: "";
          }
          
          .au-c-brand__logo svg {
              fill: #212326;
              height: 100%;
              width: 56%;
          }
          
          .au-c-brand__logo::before {
              right: -0.1rem;
              bottom: -0.3rem;
              border-top: 9rem solid #fff;
              border-left: 3.07818rem solid transparent;
          }
          
          .au-c-brand__logo::after {
              top: -0.2rem;
              right: 17%;
              transform: rotate(-19deg);
              width: 0.1rem;
              height: calc(100% + 0.4rem);
              background-color: #ccd1d9;
          }
          
          .au-c-brand--link:focus .au-c-brand__logo,
          .au-c-brand--link:hover .au-c-brand__logo {
              background-color: #e6e8eb;
          }
          
          .au-c-brand--tagline .au-c-brand__logo {
              width: 4.8rem;
              height: 4.8rem;
          }
          
          .au-c-brand__logotype {
              font-size: 18px;
              font-size: 1.8rem;
              line-height: 1;
              display: none;
              position: relative;
              color: #212326;
              margin-left: 0.6rem;
              transition: color 125ms cubic-bezier(0.19, 1, 0.22, 1);
              font-weight: 500;
          }
          
          .au-c-brand--tagline .au-c-brand__logotype {
              display: flex;
              justify-content: center;
              flex-direction: column;
              height: 4.2rem;
              padding-right: 1.2rem;
          }
          
          @media (min-width: 47.9375em) {
              .au-c-brand__logotype {
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  height: 4.2rem;
                  padding-right: 1.2rem;
              }
          
              .au-c-brand--link:focus .au-c-brand__logotype,
              .au-c-brand--link:hover .au-c-brand__logotype {
                  color: #0f6fd7;
              }
          
              .au-c-brand--link:focus .au-c-brand__logotype {
                  outline: #ffc515 dashed 0.2rem;
              }
          }
          
          .au-c-brand__main {
              font-size: 18px;
              font-size: 1.8rem;
              line-height: 1.2;
              display: block;
          }
          
          .au-c-brand__tagline {
              font-size: 12px;
              font-size: 1.2rem;
              line-height: 1.2;
              font-weight: 400;
              display: block;
              color: #2a2d31;
          }
          
          /* Header */
          .au-c-main-header {
              position: relative;
              z-index: 1;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background-color: #fff;
              box-shadow: 0 1px 3px rgba(33, 35, 38, 0.1), 0 4px 20px rgba(33, 35, 38, 0.035), 0 1px 1px rgba(33, 35, 38, 0.025);
          }
          
          .au-c-main-header__title-group {
              display: flex;
              align-items: center;
              color: #2a2d31;
              text-decoration: none;
          }
          
          .au-c-main-header__title {
              font-size: 15px;
              font-size: 1.5rem;
              line-height: 1;
              font-weight: 500;
              text-transform: uppercase;
              position: relative;
              display: block;
              padding: 0.6rem;
              color: #2a2d31;
              transition: color 125ms cubic-bezier(0.19, 1, 0.22, 1), text-decoration-color 125ms cubic-bezier(0.19, 1, 0.22, 1);
              letter-spacing: 0.03ex;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 9.6rem;
          }
          
          @media (min-width: 31.25em) {
              .au-c-main-header__title {
                  max-width: 14.4rem;
              }
          }
          
          @media (min-width: 47.9375em) {
              .au-c-main-header__title {
                  margin-left: 0;
                  padding-left: 2.4rem;
                  max-width: 19.2rem;
              }
          
              .au-c-main-header__title::before {
                  content: "";
                  display: block;
                  position: absolute;
                  top: 0;
                  left: 0.5rem;
                  transform: rotate(-19deg);
                  width: 0.1rem;
                  height: 3rem;
                  background-color: #ccd1d9;
              }
          }
          
          .au-c-main-header__title--link {
              text-decoration: underline;
              text-underline-offset: 0.3ex;
          }
          
          .au-c-main-header__title--link,
          .au-c-main-header__title--link:visited {
              color: #2a2d31;
              text-decoration-color: #bfc0c1;
          }
          
          .au-c-main-header__title--link:focus,
          .au-c-main-header__title--link:hover {
              color: #545961;
              text-decoration: underline;
              text-decoration-color: #dddedf;
          }
          
          .au-c-main-header__title--link:focus {
              outline: #ffc515 dashed 0.2rem;
          }
          
          .au-c-main-header__skiplink {
              font-size: 15px;
              font-size: 1.5rem;
              line-height: 1;
              font-weight: 400;
              position: absolute;
              transition: color 125ms cubic-bezier(0.19, 1, 0.22, 1);
              letter-spacing: 0.03ex;
              margin-left: 1.2rem;
              padding: 0.6rem;
              background-color: #f4f5f6;
              border-radius: 0.4rem;
              z-index: 1;
              top: -1000px;
              left: -1000px;
          }
          
          .au-c-main-header__skiplink,
          .au-c-main-header__skiplink:focus,
          .au-c-main-header__skiplink:hover {
              color: #2a2d31;
              text-decoration: underline;
              text-decoration-color: #d4d5d6;
          }
          
          .au-c-main-header__skiplink:focus {
              outline: #ffc515 dashed 0.2rem;
              top: 4.8rem;
              left: -0.6rem;
          }
          
          @media (min-width: 63.9375em) {
              .au-c-main-header__title {
                  max-width: initial;
              }
          
              .au-c-main-header__skiplink {
                  position: relative;
              }
          
              .au-c-main-header__skiplink:focus {
                  top: 0;
                  left: 0;
              }
          }
          
          .au-c-main-header__actions {
              font-size: 15px;
              font-size: 1.5rem;
              line-height: 0.7;
              display: flex;
              align-items: center;
              padding: 0.6rem 1.2rem;
          }
          
          /* Footer */
          .au-c-main-footer {
              display: flex;
              flex-wrap: wrap;
              padding: 2.4rem;
              background-color: #fff;
              border-top: 0.1rem solid #e6e8eb;
          }
          
          .au-c-main-footer__brand {
              padding-right: 2.4rem;
              padding-bottom: 2.4rem;
          }
          
          @media (min-width: 100em) {
              .au-c-main-footer__brand {
                  padding-right: 4.8rem;
              }
          }
          
          /* Links */
          .au-c-link {
              display: inline-flex;
              align-items: center;
              transition: color 125ms cubic-bezier(0.19, 1, 0.22, 1), text-decoration 125ms cubic-bezier(0.19, 1, 0.22, 1);
              font-weight: 400;
              text-decoration-color: #b7cfea;
          }
          
          .au-c-link,
          .au-c-link:visited {
              color: #0e5eb8;
          }
          
          .au-c-link:focus,
          .au-c-link:hover {
              color: #0f6fd7;
              text-decoration-color: #cfe2f7;
          }
          
          .au-c-link:focus {
              outline: #ffc515 dashed 0.2rem;
              outline-offset: 0.3rem;
          }
          
          .au-c-link.is-active {
              font-weight: 500;
              color: #212326;
              text-decoration: none;
              pointer-events: none;
          }
          
          .au-c-link--secondary,
          .au-c-link--secondary:visited {
              color: #2a2d31;
              text-decoration-color: #bfc0c1;
          }
          
          .au-c-link--secondary:focus,
          .au-c-link--secondary:hover {
              color: #545961;
              text-decoration-color: #dddedf;
          }
          
          .is-active > .au-c-link--secondary {
              color: #212326;
              text-decoration: none;
          }
          
          .au-c-link--secondary.is-active {
              color: #212326;
          }
          
          /* Icons */
          .au-c-icon {
              display: inline-block;
              width: 1.3rem;
              height: 1.3rem;
              position: relative;
              vertical-align: baseline;
              bottom: 0.05ex;
              stroke-width: 0;
              stroke: currentColor;
              fill: currentColor;
          }
          
          .au-c-icon--left {
              margin-right: 0.6rem;
          }
          
          /* Content */
          .au-c-content {
              font-size: 16px;
              font-size: 1.6rem;
              line-height: 1.5;
          }
          
          .au-c-content--small {
              font-size: 15px;
              font-size: 1.5rem;
              line-height: 1.6;
          }
          
          .au-c-content > * + * {
              margin-top: 2.4rem;
          }
          
          .au-c-heading--4 {
              font-size: 20px;
              font-size: 2rem;
              line-height: 1.5;
              font-weight: 500;
          }
          
          /* List */
          .au-c-list-horizontal {
              display: flex;
              align-items: center;
          }
          
          .au-c-list-horizontal__item {
              display: flex;
              align-items: center;
          }
          
          .au-c-list-horizontal__item + .au-c-list-horizontal__item {
              margin-left: 1.2rem;
              padding-left: 1.2rem;
              border-left: 1px dotted #ccd1d9;
          }
          
          .au-c-list-horizontal__item > .au-c-button,
          .au-c-list-horizontal__item > .au-c-dropdown,
          .au-c-list-horizontal__item > .ember-view > .au-c-button {
              margin-left: -0.6rem;
          }`;

// header template
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
        <header class="au-c-main-header">
          <style>
            ${headerFooterCssStyle}
          </style>
          <div class="au-c-main-header__title-group">
            <a href="#!" class="au-c-brand au-c-brand--link">
              <div class="au-c-brand__logo">
                <svg role="img" id="header-leeuw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.61 31.05" aria-labelledby="header-logoVlaanderen" aria-hidden="true">
                  <title id="header-logoVlaanderen">Logo Vlaanderen</title>
                  <path id="header-Logo_Vlaanderen" data-name="Logo Vlaanderen" d="M19.61,16c-1.08-.82-1.59,0-2.27,0s-1.12-1-1.56-.75c-0.85.43,0.34,2,.86,2.27a12.51,12.51,0,0,0,1.18.59,1.72,1.72,0,0,1,1,1.55,3,3,0,0,1,0,.75c-0.31,1.32-2.64,2.52-4,1.61a3,3,0,0,1-1.4-2c-0.36-1.73-1.62-3-2-4.7-0.25-1-.43-2.12-0.7-3.15S10.17,10,9.94,9A27.44,27.44,0,0,0,9,5.92C7.71,2.61,7.14,2.85,7.14,2.85s0.46,0.92,2.15,9A47.8,47.8,0,0,0,10.42,17c0.16,0.42.44,1.32,0.62,1.72,0.54,1.16,2,2.92,2.05,4.51,0.05,0.92.16,1.68,0.18,2.37a7.37,7.37,0,0,0,.24,1.4c0.35,1,3.14,4.09,6.1,4.09V28.68a10.88,10.88,0,0,1-5.79-1.82,6.37,6.37,0,0,1,.35-1.7,2.78,2.78,0,0,1,2.39-1.94,17.91,17.91,0,0,1,3,.31V16ZM6.82,7.36c-0.11,1.77-2.87,4.2-3.73,5.75A11.43,11.43,0,0,0,2,15.95a7.53,7.53,0,0,0,.62,4.67c0.91,2.18-.12,3,0.59,2.54,0.88-.72.75-2.39,0.68-3.43a14.77,14.77,0,0,1,0-2.82A13.29,13.29,0,0,1,6.3,11.58a4.84,4.84,0,0,0,.52-4.22m0.56,5s0.29,1.4-1,5c-3.26,9.45,3,10.34,4.74,12.56,0,0,.69-1-2.14-4-1-1.12-2-3.6-1.15-7.15,1.17-5.13-.5-6.39-0.5-6.39M1.21,6.2A4.53,4.53,0,0,1,1,4.7C1.2,2.48,3.23,1.58,3.73,1.25A2.7,2.7,0,0,0,4.76,0,3,3,0,0,1,3.55,3.67,6.06,6.06,0,0,0,1.21,6.2M6.32,4.05c0.11,0.23,1,1.45-2.48,4.27s-2.36,4.84-2.36,4.84-3.66-2,.56-5.53S5.39,3.43,5.39,3.43a1.05,1.05,0,0,1,.93.63m4.46,1.08c0.59,0.08,1,1.92,2.35,2.32,1,0.29,2.08.13,2.32,0.74a0.52,0.52,0,0,0,.37.92C16.21,8,16.4,3.88,10.79,5.14ZM12.64,6c0-.13.12,0,0.27-0.12a1.66,1.66,0,0,1,.59-0.48,1,1,0,0,1,.62,0c0.12,0,0,.33,0,0.4s-0.74-.09-0.74.32c0,0.67.91,0,1.38,0,0.23,1.64-2.48,1.19-2.08-.16h0Z" />
                </svg>
              </div>
              <p class="au-c-brand__logotype">
                <span class="au-c-brand__main">Vlaanderen</span>
              </p>
            </a>
            <a href="#!" class="au-c-main-header__title au-c-main-header__title--link">
              Appuniversum - Link to homepage
            </a>
            <a href="#content" class="au-c-main-header__skiplink">Naar de hoofdinhoud</a>
          </div>
          <nav class="au-c-main-header__actions">
            <a href="mailto:gzg@vlaanderen.be" class="au-c-link au-c-link--secondary">
              <svg role="img" viewBox="0 0 24 24" class="au-c-icon au-c-icon--question-circle au-c-icon--left " aria-hidden="true">
                 <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-18a8 8 0 100 16 8 8 0 000-16zm1 11h-2v-3h1a2 2 0 10-2-2H8a4 4 0 115 3.88V15zm-1 3.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" class="Vector"></path>
              </svg>
              Contacteer ons
            </a>
          </nav>
        </header>
      `;

// footer template
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
        <footer class="au-c-main-footer">
          <style>
            ${headerFooterCssStyle}
          </style>

          <div class="au-c-main-footer__brand">
            <div class="au-c-brand au-c-brand--tagline">
              <div class="au-c-brand__logo">
                <svg role="img" id="footer-leeuw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.61 31.05" aria-labelledby="footer-logoVlaanderen" aria-hidden="true">
                  <title id="footer-logoVlaanderen">Logo Vlaanderen</title>
                  <path id="footer-Logo_Vlaanderen" data-name="Logo Vlaanderen" d="M19.61,16c-1.08-.82-1.59,0-2.27,0s-1.12-1-1.56-.75c-0.85.43,0.34,2,.86,2.27a12.51,12.51,0,0,0,1.18.59,1.72,1.72,0,0,1,1,1.55,3,3,0,0,1,0,.75c-0.31,1.32-2.64,2.52-4,1.61a3,3,0,0,1-1.4-2c-0.36-1.73-1.62-3-2-4.7-0.25-1-.43-2.12-0.7-3.15S10.17,10,9.94,9A27.44,27.44,0,0,0,9,5.92C7.71,2.61,7.14,2.85,7.14,2.85s0.46,0.92,2.15,9A47.8,47.8,0,0,0,10.42,17c0.16,0.42.44,1.32,0.62,1.72,0.54,1.16,2,2.92,2.05,4.51,0.05,0.92.16,1.68,0.18,2.37a7.37,7.37,0,0,0,.24,1.4c0.35,1,3.14,4.09,6.1,4.09V28.68a10.88,10.88,0,0,1-5.79-1.82,6.37,6.37,0,0,1,.35-1.7,2.78,2.78,0,0,1,2.39-1.94,17.91,17.91,0,0,1,3,.31V16ZM6.82,7.36c-0.11,1.77-2.87,4.2-3.73,5.75A11.43,11.43,0,0,0,2,15.95a7.53,7.53,0,0,0,.62,4.67c0.91,2.18-.12,3,0.59,2.54,0.88-.72.75-2.39,0.68-3.43a14.77,14.77,0,0,1,0-2.82A13.29,13.29,0,0,1,6.3,11.58a4.84,4.84,0,0,0,.52-4.22m0.56,5s0.29,1.4-1,5c-3.26,9.45,3,10.34,4.74,12.56,0,0,.69-1-2.14-4-1-1.12-2-3.6-1.15-7.15,1.17-5.13-.5-6.39-0.5-6.39M1.21,6.2A4.53,4.53,0,0,1,1,4.7C1.2,2.48,3.23,1.58,3.73,1.25A2.7,2.7,0,0,0,4.76,0,3,3,0,0,1,3.55,3.67,6.06,6.06,0,0,0,1.21,6.2M6.32,4.05c0.11,0.23,1,1.45-2.48,4.27s-2.36,4.84-2.36,4.84-3.66-2,.56-5.53S5.39,3.43,5.39,3.43a1.05,1.05,0,0,1,.93.63m4.46,1.08c0.59,0.08,1,1.92,2.35,2.32,1,0.29,2.08.13,2.32,0.74a0.52,0.52,0,0,0,.37.92C16.21,8,16.4,3.88,10.79,5.14ZM12.64,6c0-.13.12,0,0.27-0.12a1.66,1.66,0,0,1,.59-0.48,1,1,0,0,1,.62,0c0.12,0,0,.33,0,0.4s-0.74-.09-0.74.32c0,0.67.91,0,1.38,0,0.23,1.64-2.48,1.19-2.08-.16h0Z" />
                </svg>
              </div>
              <p class="au-c-brand__logotype">
                <span class="au-c-brand__main">Vlaanderen</span>
                <span class="au-c-brand__tagline">verbeelding werkt</span>
              </p>
            </div>
          </div>
          <div class="au-c-main-footer__content">
            <h3 class="au-c-heading au-c-heading--4">[Title] is een officiële website van de Vlaamse overheid</h3>
            <div class="au-c-content au-c-content--small">
              <p>Uitgegeven door <a class="au-c-link" href="https://www.vlaanderen.be/organisaties/administratieve-diensten-van-de-vlaamse-overheid/beleidsdomein-kanselarij-en-bestuur/agentschap-binnenlands-bestuur">Agentschap Binnenlands Bestuur</a></p>
              <ul class="au-c-list-horizontal">
                <li class="au-c-list-horizontal__item">
                  <a href="https://loket.lokaalbestuur.vlaanderen.be/legaal/disclaimer" class="ember-view au-c-link au-c-link--secondary  ">
                    Disclaimer
                  </a>
                </li>
                <li class="au-c-list-horizontal__item">
                  <a href="https://loket.lokaalbestuur.vlaanderen.be/legaal/cookieverklaring/" class="ember-view au-c-link au-c-link--secondary  ">
                    Cookieverklaring
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      `;

class AuHeader extends HTMLElement {
  constructor() {
    super();

    const template = headerTemplate.content;
    const root = this
      .attachShadow({ mode: 'closed' })
      .appendChild(template.cloneNode(true));
  }
}

class AuFooter extends HTMLElement {
  constructor() {
    super();

    const template = footerTemplate.content;
    const root = this
      .attachShadow({ mode: 'closed' })
      .appendChild(template.cloneNode(true));
  }
}

window.customElements.define('au-header', AuHeader);
window.customElements.define('au-footer', AuFooter);
