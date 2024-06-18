const messageService = require('../services/messageService')

exports.getMessages = async (req, res) => {
    try {
        const messages = await messageService.getMessages()
        res.status(200).json(messages)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.createMessage = async (req, res) => {
    try {
        console.log('Received message data:', req.body)

        const message = await messageService.createMessage(req.body)
        res.status(201).json(message)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
