const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token, {intents: []});

bot.on("ready", async () => { // When the bot is ready
  console.log("Ready!");
  bot.editStatus("dnd", {name:"rbxrise.com", state: "rbxrise.com", type: 4});
});

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
