const Message = require("../models/Message");

exports.getMessages = async () => {
    return await Message.find().sort({ createdAt: -1 });
};

exports.createMessage = async (data) => {
    if (!data.user || !data.text || !data.serverId || !data.channelId) {
        throw new Error("All fields (user, text, serverId, channelId) are required.");
    }

    return await Message.create({
        user: data.user,
        text: data.text,
        serverId: data.serverId,
        channelId: data.channelId
    });
};
