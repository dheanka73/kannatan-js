import { ChannelType, PermissionsBitField, VoiceState } from "discord.js";

export default async function voiceStateUpdate(
  oldState: VoiceState,
  newState: VoiceState,
) {
  const TRIGGER_CHANNEL_NAME = "Create Channel";
  const TARGET_CATEGORY_NAME = "Voice Channels";

  const guild = newState.guild;

  const member = newState.member;
  if (!member) return;

  const joinedChannel = newState.channel;
  if (
    joinedChannel &&
    joinedChannel.name === TRIGGER_CHANNEL_NAME &&
    joinedChannel.parent?.name === TARGET_CATEGORY_NAME
  ) {
    const tempChannel = await guild.channels.create({
      name: `🗣 ${member.user.username} Channel`,
      type: ChannelType.GuildVoice,
      parent: joinedChannel.parentId!,
      permissionOverwrites: [
        {
          id: guild.id,
          allow: [PermissionsBitField.Flags.Connect],
        },
      ],
    });

    await member.voice.setChannel(tempChannel);
  }

  const leftChannel = oldState.channel;
  if (
    leftChannel &&
    leftChannel.parent?.name === TARGET_CATEGORY_NAME &&
    leftChannel.name.includes("Channel") &&
    leftChannel.name !== TRIGGER_CHANNEL_NAME &&
    leftChannel.members.size === 0
  ) {
    await leftChannel
      .delete()
      .catch((err) => console.error(`Gagal hapus channel: ${err}`));
  }
}
