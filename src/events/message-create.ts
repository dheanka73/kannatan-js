import { Message, OmitPartialGroupDMChannel } from "discord.js";

export default function (message: OmitPartialGroupDMChannel<Message<boolean>>) {
  if (message.author.bot) return;
  if (message.mentions.users.first()?.id !== process.env.APPLICATION_ID) return;

  message.reply("Halo").then();
}
