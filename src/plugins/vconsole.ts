async function getVconsole() {
  const VConsole = await import(/* webpackChunkName: "vconsole" */ 'vconsole')
  // eslint-disable-next-line
  new VConsole.default()
}

if (process.env.VUE_ENV === 'dev') {
  getVconsole()
}
