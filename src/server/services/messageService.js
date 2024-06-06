const Message = require("../models/Message");

exports.getMessages = async () => {
    return await Message.find().sort({ createdAt: -1 });
};

exports.createMessage = async (data) => {
    return await Message.create({
        user: data.user,
        text: data.text,
        serverId: data.serverId,
        channelId: data.channelId
    });
};

