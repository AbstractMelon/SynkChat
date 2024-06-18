import React from 'react'

const Message = ({ message }) => {
    return (
        <div className="message">
            <p>
                <strong>{message.user}</strong>: {message.text}
            </p>
        </div>
    )
}

export default Message
