import React, { useEffect, useState } from 'react'
import {connect, useSelector, useDispatch } from 'react-redux'
import styles from './Followers.module.css'
import {
    Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import _ from 'lodash'
import {getFollowers} from '../../../../actions'

function Followers(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFollowers())
    }, [])
    let { path, url } = useRouteMatch();
    let allFollowers = useSelector(state => state.getAllFollowers);
    let allOfMyFollowers = allFollowers.map( following => {
        return (
            <Link to={`${url}/${following.followersUserId._id}`}>
                <div className={styles.individualTest} >
                    <div style={{marginRight: '12px',border: '1px solid',borderRadius: '50%',width: '12%',padding: '4px 10px',height: '38px'}}>
                        <svg className="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div style={{padding: '7px 1px'}}>
                        {following.followersUserId.email}
                    </div>
                </div>
            </Link>
        )
    });
    //console.log(props.alltest);
    return (
        <div className={styles.listtest}>
            <div className={`${styles.createatest}`}>
                <svg style={{marginRight: '4px',marginTop: '-5px'}} className={`bi bi-people ${styles.fontAwesomeIcons}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zm7.973.056v-.002.002zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"/>
                </svg> Following
            </div>
            <div className={styles.showalltest}>
                {allOfMyFollowers.length ? allOfMyFollowers : 'Create your first test by clicking +'}
            </div>
        </div>
    )
}

export default Followers
