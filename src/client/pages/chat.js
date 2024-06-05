import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import MessageList from '../components/Chat/MessageList';
import MessageInput from '../components/Chat/MessageInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMessage = {
      user: 'User1',
      text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-page">
      <Header />
      <div className="chat-container">
        <Sidebar />
        <div className="chat-content">
          <MessageList messages={messages} />
          <MessageInput sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
