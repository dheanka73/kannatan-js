import { Client, Events } from "discord.js";
import clientReady from "./client-ready";

export function registerEvents(client: Client<boolean>) {
  client.once(Events.ClientReady, () => clientReady(client));
}
