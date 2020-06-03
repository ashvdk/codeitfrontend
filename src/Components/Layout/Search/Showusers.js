import React,{useState} from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Friendsbutton from './Friendsbutton';

function Showusers() {
    let showUsers = useSelector(state => state.getAllUsers);
    console.log(showUsers);
    let showUsersDiv;
    if(showUsers.length)
    {
        showUsersDiv = showUsers.map(user => (
            <div className="shadow p-4 mb-4 bg-white">
                {user.email}
                <Friendsbutton followersUserId={user._id}/>
            </div>
        ))
    }
    else
    {
        showUsersDiv = (
            <p>Search for users</p>
        )
    }
    
    return (
        <div>
            {showUsersDiv}
        </div>
    )
}

export default Showusers
