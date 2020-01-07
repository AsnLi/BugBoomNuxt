module.exports = {
  apps : [{
    name: 'jiaxiaoclass',
    script: './server/index.js',
    cwd: __dirname,
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
  */
  deploy : {
    production : {
      user : 'root', // Nginx服务器上的username
      host : '139.224.118.112',
      port : "22",
      ref  : 'origin/master',
      repo : 'git@github.com:AsnLi/BugBoomNuxt.git',
      path : '/var/www/production',
      ssh_options: 'StrictHostKeyChecking=no',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js -- run start',
      env: {
        "NODE_ENV": "production"
      }
    }
  }
};
