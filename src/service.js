import { getMembers, getMessages } from "./data.js";

export const getChatLog = () => {
  return Promise.all([getMembers(), getMessages()]).then(
    ([members, messages]) => {
      return members.map(member => {
        const messageById = messages.filter(
          message => message.userId === member.id
        )[0];
        return {
          messageId: (messageById && messageById.id) || null,
          userId: member.id,
          fullName: `${member.firstName} ${member.lastName}`,
          timestamp:
            (messageById && new Date(messageById.timestamp).toISOString()) ||
            null,
          email: member.email,
          message: (messageById && messageById.message) || null,
          avatar: member.avatar
        };
      });
    }
  );
};
