import React, { useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const addUser = () => {
        const newUser = {
        id: Math.floor(Math.random() * 1000),
        name: "John Doe",
        email: "john.doe@example.com"
        };
        setUsers([...users, newUser]);
    };

    return (
        <div>
        <h2>User List</h2>
        <button onClick={addUser}>Add User</button>
        <ul>
            {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
        </div>
    );
};

export default UserList;
