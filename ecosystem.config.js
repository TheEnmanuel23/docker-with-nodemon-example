module.exports = {
  apps : [{
    message: 'Server running!',
    name      : 'API',
    script    : 'server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    },
    output: './out.log',
    error: './error.log',
    log: './combined.outrr.log'
  }],
};
