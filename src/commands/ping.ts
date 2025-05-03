import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { CommandType } from "./index";

export const Ping: CommandType = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),

  process: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply("Pong!");
  },
};
