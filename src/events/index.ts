import { Client, Events } from "discord.js";
import clientReady from "./client-ready";
import messageCreate from "./message-create";

export function registerEvents(client: Client<boolean>) {
  client.once(Events.ClientReady, () => clientReady(client));

  client.on(Events.MessageCreate, (interaction) => messageCreate(interaction));
}
