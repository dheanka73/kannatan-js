import { CacheType, Interaction } from "discord.js";
import { executeCommandProcess } from "../commands";

export default async function (interaction: Interaction<CacheType>) {
  if (!interaction.isChatInputCommand()) return;

  await executeCommandProcess(interaction.commandName, interaction);
}
