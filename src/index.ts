// Load client and intent
import { Client, GatewayIntentBits } from "discord.js";
import { registerEvents } from "./events";
import "dotenv/config";

const token = process.env.BOT_TOKEN;

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

// Register all events
registerEvents(client);

client.login(token).then();
