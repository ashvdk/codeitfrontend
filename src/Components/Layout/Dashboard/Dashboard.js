import React, { useEffect, useState } from 'react'
import {connect, useSelector, useDispatch } from 'react-redux'
import Iframe from '../Iframe';
import styles from './Dashboard.module.css'
import Searchpost from './Searchpost';
import axios from 'axios';
import Followers from './Followers/Followers';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Peopleifollow from './Peopleifollow/Peopleifollow';
import Articles from './Articles/Articles';
function Dashboard(props) {
    const dispatch = useDispatch();
    const lastloggedintime = useSelector(state => state.login.lastLoggedInTime);
    console.log("last logged in time ",lastloggedintime)
    
    let { path, url } = useRouteMatch();
    const CancelToken = axios.CancelToken;
    let cancel;
    const [allArticles,setallArticles] = useState([]);
    const getAllFollwersTests = async () => {
        const token = localStorage.getItem("token")
        const response = await axios.get(`http://localhost:3900/getallposts?lastloggedintime=${lastloggedintime}`,{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }});
        let allArticles = [...response.data];
        setallArticles(allArticles)
    }
    useEffect(() => {
        getAllFollwersTests()
        console.log("object")
    }, [lastloggedintime])
    const addmore = async (lastarticleTime) => {
        const token = localStorage.getItem("token")
        const response = await axios.get(`http://localhost:3900/getallposts?lastloggedintime=${lastarticleTime}`,{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }},{
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              cancel = c;
            })
        });
        console.log(response);
        if(response.data.length)
        {
            
            let moredata = [...response.data];
            setallArticles([...allArticles,...moredata])  
        }
        else
        {
            cancel();
        }
    }
    console.log(allArticles)
    return (
        <div className={styles.dashBoardContent}>
            <Articles showallarticles={allArticles} addMore={addmore}/>
            
            {/* <Peopleifollow /> */}
            {/* <Followers />
            <Switch>
                <Route exact path={`${path}/:followersUserId`} component={Peopleifollow}/>
            </Switch> */}
            <button onClick={() => getAllFollwersTests(lastloggedintime)}>Get all followers</button>
            <button onClick={addmore}>Add more</button>
            {/* <Iframe src="http://vayser.github.io/react-js-pagination/" height="100%" width="90%"/> */}
        </div>
    )
}

export default Dashboard
