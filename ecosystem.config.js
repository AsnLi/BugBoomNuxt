module.exports = {
  // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
  apps : [{
    name                : 'jiaxiaoclass',
    script              : './server/index.js',
    cwd                 : __dirname,
    args                : '',
    instances           : 1,
    'error_file'        : './logs/pm2/error.log',
    'out_file'          : './logs/pm2/out.log',
    'pid_file'          : './pids/pid.pid',
    'merge_logs'        : false,
    'ignore_watch'      : ['node_modules', 'logs', 'pids'],
    autorestart         : true,
    watch               : false,
    max_memory_restart  : '1G',
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
      user          : 'root', // Nginx服务器上的username
      host          : ['139.224.118.112'],
      port          : '22',
      ref           : 'origin/master',
      repo          : 'git@github.com:AsnLi/BugBoomNuxt.git',
      path          : '/var/www/production',
      ssh_options   : 'StrictHostKeyChecking=no',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js -- run start',
      env: {
        'NODE_ENV': 'production'
      }
    }
  }
};
