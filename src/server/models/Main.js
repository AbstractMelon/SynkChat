const mongoose = require('mongoose')

// Define the message schema
const messageSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    serverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Server',
        required: true,
    },
    channelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
})

// Define the user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

// Define the server schema
const serverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

// Define the channel schema
const channelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    serverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Server',
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
})

// Define the models
const Message = mongoose.model('Message', messageSchema)
const User = mongoose.model('User', userSchema)
const Server = mongoose.model('Server', serverSchema)
const Channel = mongoose.model('Channel', channelSchema)

module.exports = { Message, User, Server, Channel }
