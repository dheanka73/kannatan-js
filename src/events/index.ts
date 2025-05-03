import { Client, Events, GuildMember } from "discord.js";
import clientReady from "./client-ready";
import messageCreate from "./message-create";
import InteractionCreate from "./interaction-create";
import guildMemberAdd from "./guild-member-add";

export function registerEvents(client: Client<boolean>) {
  client.once(Events.ClientReady, () => clientReady(client));

  client.on(Events.MessageCreate, (interaction) => messageCreate(interaction));

  client.on(Events.InteractionCreate, (interaction) =>
    InteractionCreate(interaction),
  );

  client.on(Events.GuildMemberAdd, (member: GuildMember) =>
    guildMemberAdd(member),
  );
}
