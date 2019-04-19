(() => {
  const css = document.createElement('style');
  css.media = 'screen';
  const rule = document.createTextNode(`
    body {
      font-family: initial !important;
      --global-font-support: initial !important;
      --global-second-font-support: initial !important;
    }
    * {
      font-family: initial !important;
    }
    `);

  css.appendChild(rule);
  document.getElementsByTagName('head')[0].appendChild(css);
})();