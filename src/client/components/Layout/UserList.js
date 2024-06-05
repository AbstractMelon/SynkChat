import React from "react";

const UserList = () => {
    const users = ["User1", "User2", "User3", "User4"];
    return (
        <aside className="user-list">
            <h3>Online Users</h3>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </aside>
    );
};

export default UserList;
