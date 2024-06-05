import React from "react";

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div key={index} className="message-item">
                    <div className="avatar"></div>
                    <div className="content">
                        <div className="username">
                            {message.user}
                            <span className="timestamp">
                                {message.timestamp}
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
