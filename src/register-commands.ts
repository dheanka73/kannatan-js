import "dotenv/config";
import { loadCommandsDataAsJson } from "./commands";
import { REST, Routes } from "discord.js";

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
const commands = loadCommandsDataAsJson();

try {
  console.log("Registering Slash Commands.....");

  rest
    .put(
      Routes.applicationGuildCommands(
        process.env.APPLICATION_ID,
        process.env.GUILD_ID,
      ),
      {
        body: commands,
      },
    )
    .then((r) => r);

  console.log(
    `Successfully reloaded ${commands.length} application (/) commands.`,
  );
} catch (error) {
  console.error("There was an error: " + error);
}
