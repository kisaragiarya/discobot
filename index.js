const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login('ODAyMTA2NDA0MDEyODE4NDcy.YAqZzQ.t4NN8SJEWm4IBbo8KRXrYq8VSsY');