module.exports = {
  type: 'react-component',  
  babel: {
    optional: ['runtime']
  },
  build: {
    externals: {
      'react': 'React'
    },
    global: 'ReactBlazeCSS',
    jsNext: true,
    umd: true
  },
  webpack: {
    extra: {
      node: {
        fs: 'empty',
        net: 'empty',
        module: 'empty',
      }
    }
  }
}
