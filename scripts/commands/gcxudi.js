const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "gcxudi",
  version: "1.9",
  permission: 2,
  credits: "Joy",
  prefix: true,
  description: "gcxudi",
  usages: "[count]",
  category: "fun",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
  if (event.senderID !== "100001435123762") {
    return api.sendMessage(
      "ᴏɴʟʏ ᴍʏ ᴏᴡɴᴇʀ Joy_🐢 ᴄᴀɴ ᴜsᴇ ᴛʜɪs!😤",
      event.threadID,
      event.messageID
    );
  }

  const targetUID = "61581860510020";
  const threadID = event.threadID;

  try {
    await api.addUserToGroup(targetUID, threadID);
    await api.approveChatJoinRequest(threadID, targetUID);
  } catch (err) {
    // ignore error silently
  }
};
