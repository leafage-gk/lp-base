const setupConfig = require('@leafage-gk/lp-config')

const config = {
  title: 'lp-base',
  rootDir: __dirname,
}

if (process.env.TARGET) {
  config.target = process.env.TARGET
}

module.exports = setupConfig(config)
