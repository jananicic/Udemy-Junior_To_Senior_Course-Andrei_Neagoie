import React from 'react';
import User from './User';
import './css/users.css'

const Users = ({users, deleteUsers, deleteUser}) => {
    return(
        <div id='usersContainer'>
            {
                users.map( (element, i) => {
                    return <User deleteUser={deleteUser}
                    id = {users[i].id}
                    name={users[i].name} 
                    username={users[i].username}
                    email={users[i].email}
                    /> 
                })
            }
            <button onClick={deleteUsers} style={{display: 'block', width: '100%'}}>Delete all</button>
        </div>
    );
}

export default Users;