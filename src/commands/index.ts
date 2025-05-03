import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Ping } from "./ping";

const commandsMap = new Map<
  string,
  (interaction: ChatInputCommandInteraction) => Promise<void>
>();

export type CommandType = {
  data: SlashCommandBuilder;
  process: (interaction: ChatInputCommandInteraction) => Promise<void>;
};

const commands: Array<CommandType> = [];

export async function executeCommandProcess(
  name: string,
  interaction: ChatInputCommandInteraction,
) {
  if (commandsMap.has(name)) {
    try {
      await commandsMap.get(name)(interaction);
    } catch (error) {
      console.error(`Error encountered ! :`, error);
    }
  } else {
    console.log(`Command ${name} not found.`);
  }
}

export function mapCommandsProcess(): void {
  commands.forEach((command: CommandType) => {
    commandsMap.set(command.data.name, command.process);
  });
}

export function loadCommandsDataAsJson() {
  return commands.map((command: CommandType) => command.data.toJSON());
}
