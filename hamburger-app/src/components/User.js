import React from 'react';

const User = ({ id, name, username, email, deleteUser }) => {
    return(
        <div className='userContainers' id={id}>
            <h1>Name: {name}</h1>
            <h2>Username: {username}</h2>
            <p>Email: {email}</p>
            <button onClick={() => deleteUser(id)}>Delete</button>
        </div>
    );
}

export default User;