const Discord = require('discord.js');
const client = new Discord.Client( );

client.on('Ready', ()=>{
    console.log('Logged in as ${client.user.tag}!');
});
client.on('message', msg=>{
    if(msg.content === '야') {
        msg.reply('호!');
    }
});

client.login('ODYzNzA3OTM2ODMxNDM4ODUw.YOq0sw.YP9WjYwP0_WXMUw1fwY2tQW-5y8');