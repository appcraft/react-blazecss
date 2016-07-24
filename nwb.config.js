module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'ReactBlazeCSS',
    jsNext: true,
    umd: true
  }
}
