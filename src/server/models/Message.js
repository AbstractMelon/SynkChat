const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    user: { type: String, required: true },
    text: { type: String, required: true },
    serverId: { type: String, required: true },
    channelId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Message', messageSchema)
