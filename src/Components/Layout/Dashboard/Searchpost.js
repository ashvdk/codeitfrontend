import React, { useEffect } from 'react'

function Searchpost() {
    useEffect(()=>{
        console.log("search post did mount");
    },[])
    return (
        <div>
            <p>Search post</p>
        </div>
    )
}

export default Searchpost
