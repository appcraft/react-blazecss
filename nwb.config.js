module.exports = {
  type: 'react-component',  
  babel: {
    runtime: 'helpers'
  },
  npm: { 
    esModules: true,
    umd: 'ReactBlazeCSS'
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
