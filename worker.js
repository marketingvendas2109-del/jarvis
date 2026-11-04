<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover">

  <meta name="theme-color" content="#54244f">
  <meta name="description"
        content="De Wagner, para Iara. Um pedacinho da nossa história.">

  <title>Para minha Linda ♡</title>

  <style>
    :root {
      --pink: #f6bad4;
      --purple: #744285;
      --ink: #57374f;
      --paper: #fff9f3;
      --rose: #a7466e;
    }

    * {
      box-sizing: border-box;
    }

    html {
      height: 100%;
    }

    body {
      margin: 0;
      min-height: 100%;
      font-family: Georgia, "Times New Roman", serif;
      color: white;
      background: #452044;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }

    button {
      font: inherit;
      cursor: pointer;
      touch-action: manipulation;
    }

    button:focus-visible,
    [tabindex]:focus-visible {
      outline: 3px solid #e49abf;
      outline-offset: 5px;
    }

    [hidden] {
      display: none !important;
    }

    /* PAISAGEM */

    .landscape {
      position: fixed;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      background:
        radial-gradient(ellipse at 65% 24%, #ffe0cf99, transparent 34%),
        linear-gradient(
          #483362 0%,
          #946c9e 34%,
          #ecb1c3 61%,
          #f9d7c7 76%,
          #8b7695 100%
        );
    }

    .sun {
      position: absolute;
      top: 18%;
      right: 18%;
      width: clamp(70px, 16vw, 130px);
      aspect-ratio: 1;
      border-radius: 50%;
      background: #fff1db;
      box-shadow: 0 0 80px 30px #ffe4c85c;
      opacity: .85;
    }

    .cloud {
      position: absolute;
      width: 260px;
      height: 55px;
      background: #fff0ed38;
      border-radius: 50%;
      filter: blur(18px);
      animation: cloudDrift 20s ease-in-out infinite alternate;
    }

    .cloud.one {
      top: 15%;
      left: -60px;
    }

    .cloud.two {
      top: 34%;
      right: -80px;
      animation-delay: -10s;
    }

    .hill {
      position: absolute;
      left: -20%;
      width: 140%;
      height: 40%;
      border-radius: 50% 50% 0 0;
    }

    .hill.far {
      bottom: -7%;
      background: #665373;
      transform: rotate(-9deg);
    }

    .hill.near {
      bottom: -18%;
      background: linear-gradient(#65536c, #382d48);
      transform: rotate(8deg);
    }

    #flowers {
      position: absolute;
      inset: 0;
    }

    .flower {
      position: absolute;
      bottom: -8px;
      width: 30px;
      height: var(--height);
      transform-origin: bottom center;
      animation: sway var(--speed) ease-in-out infinite alternate;
      animation-delay: var(--delay);
      opacity: var(--opacity);
    }

    .flower svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .firefly {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #fff1ce;
      border-radius: 50%;
      box-shadow: 0 0 12px 3px #ffedb977;
      animation: glow 4s ease-in-out infinite;
      animation-delay: var(--delay);
    }

    .vignette {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at center,
        transparent 25%,
        #28152d66 100%
      );
    }

    /* ABERTURA */

    .intro {
      position: fixed;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      text-align: center;
      z-index: 3;
      transition: opacity .7s, visibility .7s;
    }

    .intro.gone {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .eyebrow {
      margin: 0 0 14px;
      font-family: Arial, sans-serif;
      font-size: 10px;
      letter-spacing: .28em;
      text-transform: uppercase;
      color: #ffe9ef;
    }

    h1 {
      font-size: clamp(37px, 10vw, 65px);
      font-weight: normal;
      font-style: italic;
      line-height: 1.15;
      margin: 0;
      text-shadow: 0 3px 25px #49233d77;
    }

    .subtitle {
      font-size: 16px;
      color: #fff0f4;
      margin: 16px 0 0;
    }

    .gift-scene {
      position: relative;
      width: 270px;
      height: 275px;
      margin-top: 16px;
      isolation: isolate;
    }

    .gift-button {
      position: absolute;
      inset: 0;
      padding: 0;
      border: 0;
      background: transparent;
      color: inherit;
      width: 100%;
      height: 100%;
      z-index: 4;
    }

    .box-shadow {
      position: absolute;
      width: 220px;
      height: 28px;
      border-radius: 50%;
      background: #30203955;
      filter: blur(10px);
      bottom: 24px;
      left: 25px;
    }

    .box-body {
      position: absolute;
      width: 206px;
      height: 136px;
      left: 32px;
      bottom: 42px;
      border-radius: 5px 5px 15px 15px;
      background:
        linear-gradient(90deg, transparent 43%, #ffe3eb 43% 57%, transparent 57%),
        linear-gradient(120deg, #d58cae, #ad608b);
      box-shadow:
        inset -14px -6px 20px #6c34512b,
        0 14px 24px #39233b33;
      overflow: hidden;
      z-index: 3;
    }

    .box-heart {
      position: absolute;
      font-size: 22px;
      color: #fff0f5aa;
    }

    .box-heart:nth-child(1) { left: 15px; top: 20px; transform: rotate(-20deg); }
    .box-heart:nth-child(2) { right: 15px; top: 18px; transform: rotate(15deg); }
    .box-heart:nth-child(3) { left: 45px; bottom: 18px; transform: rotate(15deg); }
    .box-heart:nth-child(4) { right: 40px; bottom: 15px; transform: rotate(-15deg); }

    .lid {
      position: absolute;
      width: 228px;
      height: 44px;
      left: 21px;
      bottom: 166px;
      background:
        linear-gradient(90deg, transparent 43%, #ffe8ef 43% 57%, transparent 57%),
        linear-gradient(110deg, #e6a1bf, #c47aa3);
      border-radius: 8px;
      box-shadow: 0 7px 9px #77385033;
      transform-origin: 15% center;
      z-index: 5;
      transition:
        transform 1.1s cubic-bezier(.2,.7,.2,1),
        opacity .8s .3s;
    }

    .bow {
      position: absolute;
      left: 50%;
      top: -25px;
      width: 40px;
      height: 30px;
      transform: translateX(-50%);
    }

    .bow::before,
    .bow::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 26px;
      border: 7px solid #ffe4ed;
      border-radius: 70% 70% 20% 70%;
    }

    .bow::before {
      right: 15px;
      transform: rotate(15deg);
    }

    .bow::after {
      left: 15px;
      transform: rotate(75deg);
    }

    .gift-scene.open .lid {
      transform: translate(-45px, -115px) rotate(-27deg);
      opacity: 0;
    }

    .gift-scene:not(.open) .gift-button {
      animation: giftFloat 3s ease-in-out infinite;
    }

    .hint {
      margin: 0;
      min-height: 38px;
      font-size: 15px;
      color: #fff4f6;
      line-height: 1.5;
    }

    .small-date {
      margin: 12px 0 0;
      font-family: Arial, sans-serif;
      font-size: 10px;
      letter-spacing: .17em;
      color: #ffe7efcc;
    }

    /* LIVRO QUE SAI DA CAIXA */

    .mini-book {
      position: absolute;
      width: 116px;
      height: 153px;
      left: 77px;
      bottom: 70px;
      border: 0;
      border-left: 8px solid #6f355d;
      border-radius: 4px 12px 12px 4px;
      background: linear-gradient(135deg, #93587c, #65325e);
      box-shadow:
        5px 5px 0 #ead9df,
        8px 8px 0 #bd91ac,
        0 15px 35px #3e203866;
      color: #ffe6ec;
      z-index: 2;
      opacity: 0;
      pointer-events: none;
      transform: translateY(25px) rotate(-10deg) scale(.65);
      transition:
        transform 1.4s cubic-bezier(.18,.8,.25,1),
        opacity .5s;
      padding: 12px;
    }

    .mini-book::before {
      content: "";
      position: absolute;
      inset: 9px;
      border: 1px solid #f8d4df77;
      border-radius: 2px 6px 6px 2px;
    }

    .mini-book span {
      display: block;
    }

    .mini-book .cover-heart {
      font-size: 30px;
      margin: 8px 0;
    }

    .mini-book .cover-title {
      font-size: 18px;
      font-style: italic;
    }

    .mini-book .cover-small {
      font-size: 9px;
      margin-top: 10px;
      letter-spacing: .1em;
    }

    .gift-scene.reveal .mini-book {
      opacity: 1;
      transform: translateY(-138px) rotate(-5deg) scale(1);
      pointer-events: auto;
      z-index: 6;
      animation: bookFloat 3s 1.4s ease-in-out infinite;
    }

    /* BALÕES */

    #particles {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 6;
    }

    .balloon {
      position: absolute;
      left: var(--x);
      top: var(--y);
      width: var(--size);
      height: calc(var(--size) * 1.25);
      border-radius: 50% 50% 46% 46%;
      background:
        radial-gradient(circle at 30% 26%, #ffffff88, transparent 26%),
        var(--color);
      box-shadow: inset -5px -8px 12px #4e23432b;
      animation: flyUp var(--duration) ease-out forwards;
    }

    .balloon::before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: calc(50% - 4px);
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 0;
      border-top: 7px solid var(--color);
    }

    .balloon::after {
      content: "";
      position: absolute;
      top: calc(100% + 4px);
      left: 50%;
      width: 1px;
      height: 65px;
      background: #fff3eab3;
    }

    /* LEITURA */

    .reader {
      position: fixed;
      inset: 0;
      z-index: 10;
      background: #301c3b69;
      backdrop-filter: blur(9px);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:
        max(16px, env(safe-area-inset-top))
        14px
        max(12px, env(safe-area-inset-bottom));
      animation: readerIn .7s ease both;
    }

    .reader-top {
      width: min(100%, 510px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      flex: 0 0 auto;
      gap: 10px;
    }

    .reader-title {
      font-style: italic;
      font-size: 17px;
    }

    .plain-button {
      border: 1px solid #ffffff55;
      background: #ffffff12;
      border-radius: 30px;
      padding: 9px 13px;
      color: #fff7fa;
      font-family: Arial, sans-serif;
      font-size: 12px;
    }

    .book-frame {
      width: min(100%, 510px);
      flex: 1;
      min-height: 0;
      position: relative;
      border-radius: 7px 18px 18px 7px;
      background: #794368;
      padding: 5px 5px 5px 12px;
      box-shadow:
        4px 4px 0 #d7bdc7,
        7px 7px 0 #8c607f,
        0 22px 60px #22132e66;
      perspective: 1400px;
    }

    .page {
      height: 100%;
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      border-radius: 2px 13px 13px 2px;
      background:
        linear-gradient(90deg, #d9c3bf66, transparent 22px),
        var(--paper);
      color: var(--ink);
      padding: 27px clamp(19px, 5vw, 35px) 24px;
      scrollbar-width: thin;
      scrollbar-color: #cc9db3 transparent;
      transform-origin: left center;
    }

    .page.turn-next {
      animation: turnNext .48s ease both;
    }

    .page.turn-back {
      animation: turnBack .48s ease both;
    }

    .chapter {
      margin: 0 0 12px;
      font-family: Arial, sans-serif;
      font-size: 9px;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: #a7718c;
      text-align: center;
    }

    .page h2 {
      font-weight: normal;
      font-style: italic;
      font-size: clamp(27px, 7vw, 35px);
      line-height: 1.15;
      text-align: center;
      color: #8d4167;
      margin: 0 0 18px;
      text-wrap: balance;
    }

    .ornament {
      text-align: center;
      color: #b47d99;
      margin: 18px 0;
      letter-spacing: 12px;
      font-size: 15px;
    }

    .page p {
      font-size: 16px;
      line-height: 1.8;
      margin: 0 0 17px;
    }

    .photo-wrap {
      margin: 0 0 23px;
      padding: 8px 8px 13px;
      background: white;
      border: 1px solid #eee0df;
      box-shadow: 0 7px 18px #62425217;
      transform: rotate(-1.5deg);
    }

    .photo-wrap.straight {
      transform: rotate(1.2deg);
    }

    .photo-button {
      display: block;
      border: 0;
      background: #f2e4e9;
      width: 100%;
      padding: 0;
      border-radius: 2px;
      overflow: hidden;
    }

    .photo-button img {
      display: block;
      width: 100%;
      height: auto;
      max-height: 440px;
      object-fit: contain;
    }

    figcaption {
      margin-top: 10px;
      font-style: italic;
      text-align: center;
      font-size: 12px;
      color: #96677e;
      line-height: 1.4;
    }

    .photo-error {
      padding: 25px 15px;
      font: 13px/1.6 Arial, sans-serif;
      color: #8b536d;
      text-align: center;
    }

    .signature {
      text-align: right;
      font-size: 23px !important;
      font-style: italic;
      color: #984e73;
      margin-top: 25px !important;
    }

    .end-note {
      text-align: center;
      font: 10px/1.6 Arial, sans-serif;
      letter-spacing: .12em;
      color: #ac8294;
      margin-top: 25px;
    }

    .nav {
      width: min(100%, 510px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding-top: 19px;
      flex: 0 0 auto;
    }

    .nav button {
      min-height: 43px;
      border: 1px solid #ffffff44;
      border-radius: 30px;
      color: white;
      background: #925174;
      padding: 10px 17px;
      font-family: Arial, sans-serif;
      font-size: 12px;
    }

    .nav button:disabled {
      opacity: .35;
      cursor: default;
    }

    .progress {
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 11px;
      color: #fff0f5;
    }

    .dots {
      display: flex;
      gap: 5px;
      justify-content: center;
      margin-bottom: 6px;
    }

    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #ffffff44;
    }

    .dot.active {
      background: #ffd5e7;
    }

    /* FOTO AMPLIADA */

    .lightbox {
      position: fixed;
      inset: 0;
      z-index: 30;
      background: #160f1bf2;
      display: grid;
      place-items: center;
      padding: 65px 14px 25px;
    }

    .lightbox img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      min-height: 0;
    }

    .lightbox button {
      position: absolute;
      top: max(18px, env(safe-area-inset-top));
      right: 18px;
    }

    /* MÚSICA E AVISOS */

    .sound {
      position: fixed;
      bottom: max(16px, env(safe-area-inset-bottom));
      right: 16px;
      z-index: 7;
      background: #512d50aa;
      backdrop-filter: blur(8px);
    }

    .toast {
      position: fixed;
      left: 50%;
      bottom: 80px;
      transform: translateX(-50%);
      z-index: 40;
      width: max-content;
      max-width: calc(100% - 36px);
      padding: 13px 18px;
      background: #fff7f3;
      color: #72435e;
      border-radius: 14px;
      box-shadow: 0 10px 35px #23142f44;
      font: 13px/1.5 Arial, sans-serif;
      text-align: center;
    }

    @keyframes sway {
      from { transform: rotate(-5deg); }
      to { transform: rotate(6deg); }
    }

    @keyframes glow {
      0%, 100% { opacity: .15; transform: translateY(0); }
      50% { opacity: .9; transform: translate(12px, -25px); }
    }

    @keyframes cloudDrift {
      to { transform: translateX(80px); }
    }

    @keyframes giftFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-7px); }
    }

    @keyframes bookFloat {
      0%, 100% { transform: translateY(-138px) rotate(-5deg); }
      50% { transform: translateY(-147px) rotate(-2deg); }
    }

    @keyframes flyUp {
      0% {
        transform: translate(-50%, -50%) scale(.3);
        opacity: 0;
      }
      10% { opacity: 1; }
      75% { opacity: 1; }
      100% {
        transform:
          translate(calc(-50% + var(--drift)), -115vh)
          rotate(var(--rotation))
          scale(1);
        opacity: 0;
      }
    }

    @keyframes readerIn {
      from { opacity: 0; transform: translateY(20px) scale(.97); }
      to { opacity: 1; transform: none; }
    }

    @keyframes turnNext {
      from { opacity: .3; transform: rotateY(-12deg); }
      to { opacity: 1; transform: rotateY(0); }
    }

    @keyframes turnBack {
      from { opacity: .3; transform: rotateY(12deg); }
      to { opacity: 1; transform: rotateY(0); }
    }

    @media (max-height: 660px) {
      .gift-scene {
        height: 235px;
        margin-top: 0;
      }

      h1 {
        font-size: 35px;
      }

      .subtitle {
        font-size: 14px;
        margin-top: 10px;
      }

      .eyebrow {
        margin-bottom: 8px;
      }

      .small-date {
        margin-top: 7px;
      }

      .page {
        padding-top: 20px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
        scroll-behavior: auto !important;
      }
    }
  </style>
</head>

<body>

  <div class="landscape" aria-hidden="true">
    <div class="sun"></div>
    <div class="cloud one"></div>
    <div class="cloud two"></div>
    <div class="hill far"></div>
    <div class="hill near"></div>
    <div id="flowers"></div>
    <div class="vignette"></div>
  </div>

  <main class="intro" id="intro">
    <p class="eyebrow">de Wagner, com amor</p>

    <h1>Pra minha<br>Linda ♡</h1>

    <p class="subtitle">7 meses da nossa história, Iara.</p>

    <div class="gift-scene" id="giftScene">
      <div class="box-shadow"></div>

      <div class="box-body" aria-hidden="true">
        <span class="box-heart">♡</span>
        <span class="box-heart">♥</span>
        <span class="box-heart">♥</span>
        <span class="box-heart">♡</span>
      </div>

      <div class="lid" aria-hidden="true">
        <div class="bow"></div>
      </div>

      <button
        class="gift-button"
        id="giftButton"
        type="button"
        aria-label="Abrir o presente de Wagner"
      ></button>

      <button
        class="mini-book"
        id="openBook"
        type="button"
        aria-label="Abrir o livro da nossa história"
        tabindex="-1"
      >
        <span class="cover-heart">♡</span>
        <span class="cover-title">a gente</span>
        <span class="cover-small">WAGNER & IARA</span>
      </button>
    </div>

    <p class="hint" id="hint" aria-live="polite">
      toca na caixinha, linda…
    </p>

    <p class="small-date">16 DE NOVEMBRO DE 2026</p>
  </main>

  <div id="particles" aria-hidden="true"></div>

  <button class="plain-button sound" id="soundButton" type="button">
    ♫ tocar nossa música
  </button>

  <section
    class="reader"
    id="reader"
    aria-label="Livro de Wagner para Iara"
    hidden
  >
    <header class="reader-top">
      <span class="reader-title">um pedacinho de nós ♡</span>

      <button
        class="plain-button"
        id="closeBook"
        type="button"
      >
        fechar
      </button>
    </header>

    <div class="book-frame">
      <article class="page" id="page" tabindex="0"></article>
    </div>

    <nav class="nav" aria-label="Navegação do livro">
      <button id="previous" type="button">← voltar</button>

      <div class="progress" aria-live="polite">
        <div class="dots" id="dots" aria-hidden="true"></div>
        <span id="pageNumber"></span>
      </div>

      <button id="next" type="button">próxima →</button>
    </nav>
  </section>

  <div
    class="lightbox"
    id="lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Foto ampliada"
    hidden
  >
    <button class="plain-button" id="closePhoto" type="button">
      fechar ✕
    </button>

    <img id="largePhoto" alt="">
  </div>

  <div class="toast" id="toast" role="status" hidden></div>

  <audio id="music" loop preload="none" playsinline>
    <source src="musica.mp3" type="audio/mpeg">
  </audio>

  <script>
    /*
      As fotos precisam estar na mesma pasta deste HTML.
      Se mudar os nomes dos arquivos, atualize aqui.
    */

    const PHOTOS = {
      selfie: "temp_image_01663BFA-55A5-40D7-B42A-151D24BF7824.jpeg",
      beach: "IMG_3187.jpeg",
      mirror: "IMG_3294.jpeg"
    };

    const $ = (id) => document.getElementById(id);

    const intro = $("intro");
    const giftScene = $("giftScene");
    const giftButton = $("giftButton");
    const openBookButton = $("openBook");
    const reader = $("reader");
    const page = $("page");
    const previous = $("previous");
    const next = $("next");
    const music = $("music");
    const soundButton = $("soundButton");
    const lightbox = $("lightbox");

    let giftOpened = false;
    let currentPage = 0;
    let photoTrigger = null;
    let toastTimer;
    let touchStart = null;

    function photo(src, alt, caption, straight = false) {
      return `
        <figure class="photo-wrap ${straight ? "straight" : ""}">
          <button
            class="photo-button"
            type="button"
            aria-label="Ampliar foto: ${alt}"
          >
            <img src="${src}" alt="${alt}" decoding="async">
          </button>
          <figcaption>${caption}</figcaption>
        </figure>
      `;
    }

    const pages = [
      `
        <div class="chapter">capítulo um · o começo</div>

        <h2>ainda bem que foi você</h2>

        <div class="ornament">✧ ♡ ✧</div>

        <p>
          linda, sla nem como começar isso aqui kkkk, mas queria
          fazer uma coisa diferente pra você, uma coisa nossa.
        </p>

        <p>
          às vezes eu fico pensando em como tudo começou na escola,
          nossos amigos juntando a gente… e em como eu quase deixei
          passar a menina que hoje me faz tão bem.
        </p>

        <p>
          eu sei que vacilei com você no começo. não tenho desculpa
          pra isso, mas tenho mto carinho pela segunda chance que
          você me deu. e quero cuidar dessa chance com minhas
          atitudes, não só com palavras bonitas.
        </p>

        <p>
          quanto mais tempo eu passava com você, mais eu percebia
          que não queria só ficar. eu queria estar com você de
          verdade, saber do seu dia, te ver, te abraçar…
          queria a gente.
        </p>

        <p>
          ainda bem que a nossa história não acabou antes de
          começar direito.
        </p>

        <div class="ornament">♡</div>

        <p class="end-note">
          DESDE 16.04.2026<br>
          UMA HISTÓRIA QUE EU QUERO CONTINUAR ESCREVENDO COM VOCÊ
        </p>
      `,

      `
        <div class="chapter">capítulo dois · nossos momentos</div>

        <h2>meu lugar favorito é com você</h2>

        ${photo(
          PHOTOS.beach,
          "Nós dois nos beijando na praia",
          "o mar de fundo, você pertinho… e eu sem querer ir embora."
        )}

        <p>
          ir pra praia com você, ir pro cinema, ficar perto de você…
          pode parecer coisa simples, mas pra mim esses momentos
          são mto especiais.
        </p>

        <p>
          tipo, eu gosto do passeio, gosto do lugar, mas o que faz
          diferença mesmo é ter você ali comigo.
        </p>

        <p>
          quando eu tô com você eu fico em paz, tranquilo. e antes
          de te ver eu já fico feliz, animado, pensando em ficar
          juntinho de novo kkkk.
        </p>

        <p>
          eu amo seu sorriso, linda. amo o jeito que você me trata
          e o carinho que você tem comigo. são essas coisas que
          vão ficando na minha cabeça depois que a gente se despede.
        </p>

        <p>
          essa foto guarda um momento nosso. mas não guarda tudo
          que eu senti estando ali com você.
        </p>

        <div class="ornament">✧ ♡ ✧</div>
      `,

      `
        <div class="chapter">capítulo três · os detalhes</div>

        <h2>eu reparo nessas coisinhas</h2>

        ${photo(
          PHOTOS.mirror,
          "Nós dois juntos em uma foto no espelho",
          "seu sorriso é uma das minhas coisas favoritas.",
          true
        )}

        <p>
          sabe uma coisa sua que eu acho mto linda? quando você
          pergunta alguma coisa do meu karatê kkkkk, quer saber
          de um golpe ou de alguma coisa que eu faço.
        </p>

        <p>
          pode parecer besteira, mas eu gosto mto. porque é uma
          coisa importante pra mim e você chega com esse seu
          jeitinho querendo conhecer também.
        </p>

        <p>
          eu reparo nisso, tá? no seu carinho, no jeito que você
          me trata, nessas coisinhas que talvez você faça sem nem
          imaginar o quanto significam pra mim.
        </p>

        <p>
          e quando eu penso no buquê de borboletas que fiz pra você,
          na música no quarto e no pedido de namoro, eu lembro que
          queria te mostrar uma coisa: que eu tava falando sério
          sobre nós.
        </p>

        <p>
          não sou o melhor do mundo com palavras, sla kkkk.
          mas eu queria que você conseguisse sentir o quanto
          é importante pra mim.
        </p>

        <div class="ornament">🦋</div>
      `,

      `
        <div class="chapter">capítulo quatro · o que eu sonho</div>

        <h2>você mudou minha vida, minha princesa</h2>

        ${photo(
          PHOTOS.selfie,
          "Nossa selfie com efeito colorido e corações",
          "de Wagner, pra Iara. de mim, pra minha Linda."
        )}

        <p>
          linda, quando eu penso no meu futuro, eu penso em
          você nele.
        </p>

        <p>
          penso na nossa família, na nossa empresa, na gente
          construindo nossas coisas aos poucos. penso na nossa
          Merlia, no nome que você sempre quis dar pra sua menina…
          e fico imaginando como seria viver tudo isso com você.
        </p>

        <p>
          imagino nosso filho e nossa filha treinando karatê e eu
          todo besta vendo os dois kkkkk. sla, são umas coisas que
          eu penso e que me fazem querer construir esse futuro
          com você, um passo de cada vez.
        </p>

        <p>
          mas não quero só sonhar com o que vem depois. eu quero
          os dias até lá também. mais praia, mais cinema, mais
          conversa, mais abraço. quero viver as coisas simples
          com você, porque é nelas que eu percebo o quanto
          você me faz bem.
        </p>

        <p>
          eu sei que escrever tudo isso aqui é mais fácil do que
          construir. por isso eu quero fazer a minha parte, te
          ouvir, aprender com meus erros e cuidar do que a gente tem.
        </p>

        <p>
          você mudou minha vida, minha princesa. e eu quero que
          você sinta no meu jeito de te tratar, não só nesse texto,
          o quanto é importante pra mim.
        </p>

        <p>
          obrigado pelo carinho que você tem comigo. eu vejo isso
          e não quero tratar como se fosse pouca coisa.
        </p>

        <p>
          eu te amo mto linda. fiz isso aqui pra você ter um
          pedacinho do que eu sinto guardado e poder voltar
          sempre que quiser.
        </p>

        <p class="signature">com amor, seu Wagner ♡</p>

        <div class="ornament">✧ ♡ ✧</div>

        <div class="end-note">
          FELIZES 7 MESES DA NOSSA HISTÓRIA<br>
          16 DE NOVEMBRO DE 2026
        </div>
      `
    ];

    function createLandscape() {
      const field = $("flowers");
      const colors = [
        "#f3bad6",
        "#d6b4ef",
        "#bd8fd5",
        "#e894bb",
        "#fff0f3"
      ];

      const count = window.innerWidth > 700 ? 75 : 43;

      for (let i = 0; i < count; i++) {
        const flower = document.createElement("div");
        const height = 65 + Math.random() * 140;
        const color = colors[i % colors.length];

        flower.className = "flower";
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.bottom = `${Math.random() * 10 - 3}%`;
        flower.style.width = `${22 + Math.random() * 22}px`;
        flower.style.setProperty("--height", `${height}px`);
        flower.style.setProperty("--speed", `${3 + Math.random() * 3}s`);
        flower.style.setProperty("--delay", `${-Math.random() * 6}s`);
        flower.style.setProperty("--opacity", .45 + Math.random() * .55);

        flower.innerHTML = `
          <svg viewBox="0 0 40 180" preserveAspectRatio="none">
            <path
              d="M20 180 Q12 110 20 30"
              fill="none"
              stroke="#64735f"
              stroke-width="2"
            />
            <path
              d="M19 120 Q-2 95 5 88 Q23 91 19 120"
              fill="#859079"
            />
            <path
              d="M18 145 Q38 117 37 107 Q17 114 18 145"
              fill="#73866f"
            />
            <g fill="${color}">
              <ellipse cx="20" cy="17" rx="7" ry="12"/>
              <ellipse cx="10" cy="25" rx="10" ry="7"
                       transform="rotate(28 10 25)"/>
              <ellipse cx="30" cy="25" rx="10" ry="7"
                       transform="rotate(-28 30 25)"/>
              <ellipse cx="13" cy="36" rx="7" ry="10"
                       transform="rotate(30 13 36)"/>
              <ellipse cx="27" cy="36" rx="7" ry="10"
                       transform="rotate(-30 27 36)"/>
            </g>
            <circle cx="20" cy="28" r="5" fill="#f5da9f"/>
          </svg>
        `;

        field.appendChild(flower);
      }

      for (let i = 0; i < 16; i++) {
        const dot = document.createElement("span");
        dot.className = "firefly";
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${25 + Math.random() * 65}%`;
        dot.style.setProperty("--delay", `${-Math.random() * 5}s`);
        field.appendChild(dot);
      }
    }

    function releaseBalloons() {
      const box = giftScene.getBoundingClientRect();
      const x = box.left + box.width / 2;
      const y = box.bottom - 165;
      const colors = ["#e797b8", "#b58ad5", "#fff1f5", "#b9567a", "#d3b4ed"];

      for (let i = 0; i < 17; i++) {
        setTimeout(() => {
          const balloon = document.createElement("div");
          const duration = 4 + Math.random() * 2;

          balloon.className = "balloon";
          balloon.style.setProperty("--x", `${x + (Math.random() - .5) * 75}px`);
          balloon.style.setProperty("--y", `${y}px`);
          balloon.style.setProperty("--size", `${27 + Math.random() * 21}px`);
          balloon.style.setProperty("--color", colors[i % colors.length]);
          balloon.style.setProperty("--duration", `${duration}s`);
          balloon.style.setProperty("--drift", `${(Math.random() - .5) * 420}px`);
          balloon.style.setProperty("--rotation", `${(Math.random() - .5) * 45}deg`);

          $("particles").appendChild(balloon);
          setTimeout(() => balloon.remove(), duration * 1000 + 100);
        }, i * 100);
      }
    }

    function openGift() {
      if (giftOpened) return;

      giftOpened = true;
      giftButton.disabled = true;
      giftButton.hidden = true;
      giftScene.classList.add("open");
      $("hint").textContent = "tem um pedacinho de nós aqui dentro…";

      setTimeout(releaseBalloons, 350);

      setTimeout(() => {
        giftScene.classList.add("reveal");
        openBookButton.tabIndex = 0;
        $("hint").textContent = "agora toca no livrinho, minha Linda ♡";
        openBookButton.focus({ preventScroll: true });
      }, 1500);
    }

    function bindPhotos() {
      page.querySelectorAll(".photo-button").forEach(button => {
        const image = button.querySelector("img");

        function handleError() {
          button.disabled = true;
          image.hidden = true;

          if (!button.querySelector(".photo-error")) {
            const message = document.createElement("div");
            message.className = "photo-error";
            message.textContent =
              "A foto ainda não foi adicionada. Confira o nome do arquivo no repositório.";
            button.appendChild(message);
          }
        }

        image.addEventListener("error", handleError);

        if (image.complete && image.naturalWidth === 0) {
          handleError();
        }

        button.addEventListener("click", () => {
          if (!image.naturalWidth) return;

          photoTrigger = button;
          $("largePhoto").src = image.src;
          $("largePhoto").alt = image.alt;
          lightbox.hidden = false;
          reader.inert = true;
          $("closePhoto").focus();
        });
      });
    }

    function renderPage(direction = "next") {
      page.innerHTML = pages[currentPage];
      page.scrollTop = 0;

      page.classList.remove("turn-next", "turn-back");
      void page.offsetWidth;
      page.classList.add(
        direction === "back" ? "turn-back" : "turn-next"
      );

      previous.disabled = currentPage === 0;
      next.disabled = currentPage === pages.length - 1;
      next.textContent = currentPage === pages.length - 1
        ? "fim ♡"
        : "próxima →";

      $("pageNumber").textContent = `${currentPage + 1} de ${pages.length}`;

      $("dots").innerHTML = pages.map((_, index) =>
        `<span class="dot ${index === currentPage ? "active" : ""}"></span>`
      ).join("");

      bindPhotos();
    }

    function changePage(offset) {
      const target = currentPage + offset;

      if (target < 0 || target >= pages.length) return;

      currentPage = target;
      renderPage(offset < 0 ? "back" : "next");
    }

    function openReader() {
      renderPage();
      reader.hidden = false;
      intro.classList.add("gone");
      intro.inert = true;
      soundButton.hidden = true;
      $("closeBook").focus({ preventScroll: true });
    }

    function closeReader() {
      reader.hidden = true;
      intro.classList.remove("gone");
      intro.inert = false;
      soundButton.hidden = false;
      openBookButton.focus({ preventScroll: true });
    }

    function closePhoto() {
      lightbox.hidden = true;
      reader.inert = false;

      if (photoTrigger) {
        photoTrigger.focus({ preventScroll: true });
      }
    }

    function showToast(message) {
      clearTimeout(toastTimer);
      $("toast").textContent = message;
      $("toast").hidden = false;

      toastTimer = setTimeout(() => {
        $("toast").hidden = true;
      }, 5000);
    }

    function updateSoundButton() {
      soundButton.textContent = music.paused
        ? "♫ tocar nossa música"
        : "♫ pausar música";
    }

    soundButton.addEventListener("click", async () => {
      if (!music.paused) {
        music.pause();
        return;
      }

      try {
        await music.play();
      } catch {
        showToast(
          "Música indisponível. Se quiser adicioná-la, coloque o arquivo musica.mp3 junto do index.html."
        );
      }

      updateSoundButton();
    });

    music.addEventListener("play", updateSoundButton);
    music.addEventListener("pause", updateSoundButton);

    giftButton.addEventListener("click", openGift);
    openBookButton.addEventListener("click", openReader);
    $("closeBook").addEventListener("click", closeReader);
    $("closePhoto").addEventListener("click", closePhoto);

    previous.addEventListener("click", () => changePage(-1));
    next.addEventListener("click", () => changePage(1));

    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) closePhoto();
    });

    document.addEventListener("keydown", event => {
      if (!lightbox.hidden) {
        if (event.key === "Escape") closePhoto();

        if (event.key === "Tab") {
          event.preventDefault();
          $("closePhoto").focus();
        }

        return;
      }

      if (reader.hidden) return;

      if (event.key === "Escape") closeReader();

      if (
        event.target.tagName !== "BUTTON" &&
        event.key === "ArrowRight"
      ) {
        changePage(1);
      }

      if (
        event.target.tagName !== "BUTTON" &&
        event.key === "ArrowLeft"
      ) {
        changePage(-1);
      }
    });

    page.addEventListener("touchstart", event => {
      const touch = event.changedTouches[0];

      touchStart = {
        x: touch.clientX,
        y: touch.clientY
      };
    }, { passive: true });

    page.addEventListener("touchend", event => {
      if (!touchStart || !lightbox.hidden) return;

      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;

      if (Math.abs(dx) > 75 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        changePage(dx < 0 ? 1 : -1);
      }

      touchStart = null;
    }, { passive: true });

    createLandscape();
  </script>
</body>
</html>
