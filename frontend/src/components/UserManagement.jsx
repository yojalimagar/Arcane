// src/components/UserManagement.jsx

import React, { useEffect, useState } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    const addUser = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
        if (response.ok) {
            setUsername('');
            setEmail('');
            setPassword('');
            // Fetch users again to update the list
            const updatedUsers = await fetch('http://localhost:5000/api/users');
            setUsers(await updatedUsers.json());
        } else {
            console.error('Failed to add user');
        }
    };

    return (
        <div className="UserManagement">
            <h1>User List</h1>
            <form onSubmit={addUser}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Add User</button>
            </form>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserManagement;
