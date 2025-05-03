import { GuildMember, PartialGuildMember, TextChannel } from "discord.js";

export default function guildMemberRemove(
  member: GuildMember | PartialGuildMember,
) {
  const channel = member.guild.channels.cache.find((ch) => {
    return (
      ch.type === 0 && // text channel
      ch.name === "entryway" &&
      ch.parent?.name === "Community"
    );
  }) as TextChannel | undefined;

  if (!channel) return;

  channel
    .send(
      `👋 ${member.user.tag} telah keluar dari server. Semoga sukses di tempat lain!`,
    )
    .then();
}
