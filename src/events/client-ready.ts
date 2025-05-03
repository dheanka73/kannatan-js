import { Client } from "discord.js";
import { mapCommandsProcess } from "../commands";

export default function (client: Client<boolean>) {
  mapCommandsProcess();

  console.log(`Ready! Logged in as ${client.user.tag}`);
}
