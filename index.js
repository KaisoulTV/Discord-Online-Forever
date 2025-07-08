const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log("I'm ready, changing status")
  bot.editStatus("dnd", {
    name: "rbxrise.com",
    type: 0
  });
})

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
