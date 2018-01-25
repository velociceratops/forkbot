const Discord = require('discord.js');
const client = new Discord.Client();

var forks = require("./forks.js");
var theForks = forks.largeArrayFunction();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            case 'fork':
              var fork = theForks[ (Math.floor(Math.random() * theForks.length)) ];
              message.channel.send(fork);
              break;
            case 'iloveisabelle':
              message.channel.send("isabelle is your god now and also the best coder");
              break;
            case 'ilovejoss':
              message.channel.send("joss is best mom");
            break;
            // Just add any case commands if you want to..
         }
     }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
