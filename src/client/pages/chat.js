import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import MessageList from "../components/Chat/MessageList";
import MessageInput from "../components/Chat/MessageInput";
import UserList from "../components/Layout/UserList";
// import "../styles/global.css";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        if (text.trim() === "") return;
        const newMessage = {
            user: "Abstractmelon",
            text,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages([...messages, newMessage]);
    };

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
    );
};

export default Chat;
