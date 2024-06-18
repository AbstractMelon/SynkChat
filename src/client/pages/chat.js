import React, { useState, useEffect } from 'react'
import Header from '../components/Layout/Header'
import Sidebar from '../components/Layout/Sidebar'
import MessageList from '../components/Chat/MessageList'
import MessageInput from '../components/Chat/MessageInput'
import UserList from '../components/Layout/UserList'
import axios from 'axios'
// import "../styles/global.css";

const Chat = () => {
    const [messages, setMessages] = useState([])

    const fetchMessages = () => {
        axios
            .get('http://localhost:5000/api/messages')
            .then((response) => {
                setMessages(response.data)
            })
            .catch((error) => {
                console.error('Error fetching messages:', error)
            })
    }

    const sendMessage = (text) => {
        if (text.trim() === '') return
        const messageData = {
            user: 'Abstractmelon',
            text: text,
            serverId: 'defaultServerId',
            channelId: 'defaultChannelId',
        }

        axios
            .post('http://localhost:5000/api/messages', messageData)
            .then((response) => {
                console.log('Message sent successfully:', response.data)
                fetchMessages()
            })
            .catch((error) => {
                console.error(
                    'Error sending message:',
                    error.response ? error.response.data : error.message
                )
            })
    }

    return (
        <div className="chat-page">
            {/* <Header /> */}
            <div className="chat-container">
                <Sidebar />
                <div className="chat-content">
                    <MessageList messages={messages} />
                    <MessageInput sendMessage={sendMessage} />
                </div>
                <UserList />
            </div>
        </div>
    )
}

export default Chat
