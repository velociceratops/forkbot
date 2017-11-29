var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');


var toFork = ['http://2.bp.blogspot.com/_NpINLHeo8rM/TLcz-gU2mbI/AAAAAAAA2N8/ILZZd9L-CRw/s1600/11.jpg',
  'https://shechive.files.wordpress.com/2010/05/cool-forks-6.jpg?quality=100&strip=info&w=500',
  'http://media.techeblog.com/images/cool_fork_2.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/6f/94/f9/6f94f900ab9a789b6307c578ea63aee5.jpg',
  'https://i.ytimg.com/vi/ejbgSQhSHIU/maxresdefault.jpg',
  'http://www.toxel.com/wp-content/uploads/2010/03/fork01.jpg',
  'https://www.thegreenhead.com/imgs/calamete-pasta-fork-2.jpg',
  'https://i0.wp.com/hometone.com/wp-content/uploads/2012/07/finger_fork_rruge.jpg?w=1170',
  'http://photos1.blogger.com/x/blogger/7016/3128/1600/461920/fork_art_01.jpg',
  'http://24.media.tumblr.com/tumblr_m19jy4RQ2s1qljrw2o1_1280.jpg',
  'http://weirdcooldumb.com/wp-content/uploads/2012/05/Knork.jpg',
  'https://www.thegreenhead.com/imgs/ramen-noodle-spoon-fork-4.jpg',
  'https://cocktailvp.com/wp-content/uploads/2016/11/00303c2b2a8463b030ed7bcb40412af5.jpg',
  'https://shechive.files.wordpress.com/2010/05/cool-forks-5.jpg?quality=100&strip=info&w=500',
  'https://cdn.shopify.com/s/files/1/0112/8702/products/1177320.jpg?v=1446917171',
  'http://inventorsproject.co.uk/website/wp-content/uploads/2016/01/fork2-1.jpg',
  'https://i2.wp.com/howtodogreat.com/wp-content/uploads/2017/10/22090348_1466818106705697_1615149273731563520_n.jpg?resize=400%2C296',
  'https://cdn.shopify.com/s/files/1/0164/6254/products/cool_colorblock_forks_web_large.jpg?v=1446671311',
  'https://images-na.ssl-images-amazon.com/images/I/41lIa-nlkiL._SL500_.jpg',
  'http://1.bp.blogspot.com/_NpINLHeo8rM/S_zRv-DrZcI/AAAAAAAAy-g/JAWb490AC6c/s1600/20.jpg',
  'https://shechive.files.wordpress.com/2010/05/cool-forks-3.jpg?quality=100&strip=info&w=500',
  'https://i.pinimg.com/236x/68/85/bd/6885bdff374126a93e5d6d1cc07a14db--convex-mirror-sunburst-mirror.jpg',
  'https://www.ateriet.com/wp-content/uploads/2015/03/hard-rock-1-e1425886705148.jpg',
  'https://lh6.googleusercontent.com/-tPm2WTdaOIQ/Te9gLwk3vGI/AAAAAAAADRQ/1QnI8slVhVE/s800/creative-kitchen-gadgets-fork-2.jpg',
  'http://static.neatorama.com/images/2006-01/fork-art.jpg' ];

  var forkLength = toFork.length;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
              var fork = toFork[ (Math.floor(Math.random() * forkLength)) ];
              bot.sendMessage({
                  to: channelID,
                  message: fork
              });
            break;
            // Just add any case commands if you want to..
         }
     }
});
