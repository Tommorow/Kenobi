const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (!message.author.bot){
        content = message.content.toLowerCase()
        
        if (content === 'hello there') {
    	message.reply('General Kenobi!');
        }   else if (content.includes('anime')) {
            if (content !== "anime"  && content !== "anime is trash"){
                message.reply('Anime is trash. Get help.',{
                    file: "stop.gif"});
                

            } 
            else if(content === "anime is trash")     
            {
                message.reply('I am glad you have learned my boy.');
            }
        }   
    }

});

// THIS  MUST  BE  THIS  WAY
//client.login("NDA5Nzk3NTA1ODI0NDU2NzA2.DZsj2g.dr5EEm_bPn4eZ4JYAnQgHUa7r_g");
//NDA5Nzk3NTA1ODI0NDU2NzA2.DZsj2g.dr5EEm_bPn4eZ4JYAnQgHUa7r_g

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
