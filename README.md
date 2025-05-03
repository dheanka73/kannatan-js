# Kannatan Discord Bot

## Feature List [WIP]
- [ ] Moderation Commands
- [ ] Reaction Roles
- [ ] Tickets
- [ ] Utility Commands
- [ ] Roleplay Commands


## Installation Guide

Clone this repo
```bash
git clone https://github.com/dheanka73/kannatan-js.git
```

Copy .env.example and rename it as .env
```bash
cp .env.example .env
```

Modify the .env file
```bash
APPLICATION_ID='YOUR APP ID'
BOT_TOKEN='Your Bot Token'
GUILD_ID='Your Server ID'
```

Install dependencies
```bash
npm install
```

Run the bot
```bash
npm run app
```

or using watch mode
```bash
npm run watch
```


## Development

Create your slash commands, and dont forget set CommandType as variable type
```js
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

```

Add it to the commands list
```js
/**
 * List of all commands
 *
 * Add your commands here
 */
const commands: Array<CommandType> = [
  // Todo: Add your commands here
  Ping,
];
```

Register it to discord
```bash
npm run register
```