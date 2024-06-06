import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const MessageInput = ({ serverId, channelId }) => {
    const [text, setText] = useState("");

    const sendMessage = () => {
        const messageData = {
            user: "User", 
            text: text,
            serverId: serverId,
            channelId: channelId
        };

        /*
        axios.post("http://localhost:5000/messages", messageData)
            .then(response => {
                console.log("Message sent successfully:", response.data);
            })
            .catch(error => {
                console.error("Error sending message:", error);
            });

        */
        setText("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send <FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
    );
};

export default MessageInput;
