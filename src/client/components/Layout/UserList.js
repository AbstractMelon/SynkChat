import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const UserList = () => {
    const users = ['User1', 'User2', 'User3', 'User4']
    return (
        <aside className="user-list">
            <h3>
                Online Users <FontAwesomeIcon icon={faUsers} />
            </h3>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </aside>
    )
}

export default UserList
