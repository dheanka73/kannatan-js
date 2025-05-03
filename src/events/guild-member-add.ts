import { GuildMember, TextChannel } from "discord.js";

export default function guildMemberAdd(member: GuildMember) {
  // Cari channel dengan nama 'entryway' dan kategori 'Community'
  const channel = member.guild.channels.cache.find((ch) => {
    return (
      ch.type === 0 && // Text channel
      ch.name === "entryway" &&
      ch.parent?.name === "Community"
    );
  }) as TextChannel | undefined;

  const memberNumber = member.guild.memberCount;

  if (!channel) return;

  channel
    .send(
      `Selamat datang, ${member.toString()}! 🎉\n` +
        `Kamu adalah member ke-${memberNumber} di server ini.\n`,
    )
    .then();
}
