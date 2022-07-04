console.info('chrome-ext template-vue-js content script')

if (window.location.host === 'www.npmjs.com') {
  // console.log("npmjs.com");

  const nodes = document.querySelector(
    '#top > div.fdbf4038.w-third-l.mt3.w-100.ph3.ph4-m.pv3.pv0-l > div:nth-child(3) > p > a',
  ).href

  console.log(nodes)

  window.location.replace(nodes);

}
export {}
