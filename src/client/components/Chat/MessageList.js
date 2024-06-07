import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = () => {
            axios.get("http://localhost:5000/api/messages")
                .then(response => {
                    setMessages(response.data);
                })
                .catch(error => {
                    console.error("Error fetching messages:", error);
                });
        };
    
        fetchMessages();
        const intervalId = setInterval(fetchMessages, 500);
    
        return () => clearInterval(intervalId);
    }, []);
    

    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div key={index} className="message-item">
                    <div className="avatar"></div>
                    <div className="content">
                        <div className="username">
                            {message.user}
                            <span className="timestamp">
                                {message.createdAt}
                            </span>
                        </div>
                        <div className="text">{message.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
