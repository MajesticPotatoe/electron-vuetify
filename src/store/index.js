let window = {}
if (process.env.IS_ELECTRON) {
  window = (() => (require('./window').default))()
}
export { window }
