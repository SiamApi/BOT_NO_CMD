const pathImg = "HACKIMG";

module.exports.config = {
  name: "hack",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SIAM",
  description: "hack",
  commandCategory: "hack",
  usages: "@mention",
  dependencies: {
    "axios": "",
    "fs-extra": ""
  },
  cooldowns: 0
};

module.exports.run = async function ({ args, Users, Threads, api, event }) {
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + '/cache/fact.jpg';
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var name = await Users.getNameUser(id);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
  let HACKIMG = (
    await axios.get(
      `https://hack--haxorsiamapi.repl.co/?id=${id}&name=${name}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathImg, HACKIMG); // Fix the writeFileSync() call
  return api.sendMessage(
    { body: ` `, attachment: fs.createReadStream(pathImg) },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    event.messageID
  );
};
