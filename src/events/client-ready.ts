import { Client } from "discord.js";

export default function (client: Client<boolean>) {
  console.log(`Ready! Logged in as ${client.user.tag}`);
}
