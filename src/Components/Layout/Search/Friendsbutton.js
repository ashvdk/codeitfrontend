import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Friendsbutton(props) {
    const [showit, setshowit] = useState(true)
    const followHim = async (e,friendUserId) => {
        console.log(e,friendUserId)
        const token = localStorage.getItem("token")
        const response = await axios.post(`http://localhost:3900/follow`,{friendUserId},{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        if(response.data=="saved")
        {
            console.log("U r ready to go forward")
            setshowit(true);
        }
    }
    console.log(props.followersUserId)
    const showButton = async () => {
        const token = localStorage.getItem("token")
        const response = await axios.post(`http://localhost:3900/checkifheisurfriend`,{friendUserId:props.followersUserId},{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        console.log(response)
        if(response.data=="yes")
        {
            setshowit(true);
        }
        else
        {
            setshowit(false);
        }
    }
    useEffect(()=>{
        showButton()
    })
    return (
        <div style={{float:'right'}}>
            {showit ? "friends" : (<button className="btn btn-danger" onClick={(e) => followHim(e,props.followersUserId)}>Follow +</button>)}
        </div>
    )
}

export default Friendsbutton
