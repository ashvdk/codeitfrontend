import React, { useEffect } from 'react'
import styles from './Navigationbar.module.css'
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux'
import {getUserDetails} from '../../../actions'
import axios from 'axios'

function Navigationbar() {
    // const changeBackground = (id) => {
    //     console.log(id);
    //     document.getElementById(id).style.color = "#0876ff";
    //     onClick={() => changeBackground("dashboard")}
    // }
    const dispatch = useDispatch()
    const loadTheUserDetails = () => {
        dispatch(getUserDetails());
    }
    let clearinterval;
    const getDatAndTimeInSeconds = async () => {
        const token = localStorage.getItem("token");
        let dateInMillisecs = Date.now()
        let dateinseconds = Math.round(dateInMillisecs/1000); 
        let dateInWords = new Date(dateInMillisecs);
        const response = await axios.post('http://localhost:3900/saveuseractivity',{dateinseconds,dateInWords},{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        console.log(response)
    }
    const saveUserActivity = () => {
        clearinterval = setInterval(getDatAndTimeInSeconds,60000);
    }
    useEffect(() => {
        loadTheUserDetails();
        saveUserActivity()
        return () => { 
            console.log("componentWillUnmount");
            clearInterval(clearinterval) 
        }
    }, [])
    //https://github.com/ashvdk/codeit.git
    return (
        <div className={styles.navigationBar}>
            <div className={styles.sidebarElements} >
                <Link to="/dashboard">
                    <svg title="home" id="dashboard" className={`bi bi-house-door ${styles.fontAwesomeIcons}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5H9.5a.5.5 0 01-.5-.5v-4H7v4a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
                    </svg>
                </Link>
            </div>
            <div className={styles.sidebarElements}>
                <Link to="/newpost">
                    <svg className={`bi bi-plus ${styles.fontAwesomeIcons}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                    </svg>
                </Link>
            </div>
            <div className={styles.sidebarElements}>
                <Link to="/profile">
                    <svg className={`bi bi-people ${styles.fontAwesomeIcons}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zm7.973.056v-.002.002zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"/>
                    </svg>
                </Link>
            </div>
            <div className={styles.sidebarElements}>
                <Link to="/search">
                    <svg className={`bi bi-search ${styles.fontAwesomeIcons}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                    </svg>
                </Link>
            </div>
            <div className={styles.sidebarElements} onClick={() => dispatch({type:"LOG_OUT"})}>
                <svg className={`bi bi-box-arrow-right ${styles.fontAwesomeIcons}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.646 11.354a.5.5 0 010-.708L14.293 8l-2.647-2.646a.5.5 0 01.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h9a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M2 13.5A1.5 1.5 0 01.5 12V4A1.5 1.5 0 012 2.5h7A1.5 1.5 0 0110.5 4v1.5a.5.5 0 01-1 0V4a.5.5 0 00-.5-.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0V12A1.5 1.5 0 019 13.5H2z" clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
    )
}

export default Navigationbar
