import axios from 'axios'
import history from '../history'
import { formValues } from 'redux-form'

export const loggingin = (formValues) => {
    return async function(dispatch){
        await axios.post('http://localhost:3900/login',formValues)
        .then( response => {
            console.log(response.data.dateinseconds)
            localStorage.setItem("token",response.data.token)  
            dispatch({type:"LOGIN_SUCCCESS",payload:response.data.token,lastLoggedInTime:response.data.dateinseconds});
            history.push("/dashboard");
        })
        .catch(error => {
            dispatch({type:"LOGIN_FAILED",payload:"Incorrect email or password"});
        })
    }
}
export const getUserDetails = () => {
    return async function(dispatch){
        const token = localStorage.getItem("token")
        const response = await axios.get(`http://localhost:3900/getUserDetails`,{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        //console.log("bring in ",response.data.doc.dateinseconds)
        dispatch({type:"GETTING_LAST_LOGGEDIN",lastLoggedInTime:response.data.dateinseconds});
    }
}
export const signup = (formValues) => {
    return async function(dispatch){
        await axios.post('http://localhost:3900/signup',formValues)
        .then( response => {
            localStorage.setItem("token",response.data.token)  
            dispatch({type:"LOGIN_SUCCCESS",payload:response.data.token,lastLoggedInTime:response.data.dateinseconds});
            history.push("/dashboard");
        })
        .catch(error => {
            dispatch({type:"LOGIN_FAILED",payload:"Email in use!!"});
        })
    }
}
export const getQuestionsForTheParticularUser = (followersUserId) => {
    return async function(dispatch)
    {
        const token = localStorage.getItem("token")
        const response = await axios.get(`http://localhost:3900/getQuestionsForTheParticularUser?followersUserId=${followersUserId}`,{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        //console.log(response.data);
        dispatch({type:"SHOW_ALL_QUESTIONS",payload:response.data});
    }
}
export const getFollowers = () => {
    return async function(dispatch)
    {
        const token = localStorage.getItem("token")
        const response = await axios.get(`http://localhost:3900/getfollowers`,{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        console.log(response.data);
        dispatch({type:"GET_FOLLOWERS",payload:response.data});
    }
}

export const getnames = (values) => {
    return async function(dispatch)
    {
        const token = localStorage.getItem("token")
        const response = await axios.get(`http://localhost:3900/getnames?email=${values.email}`,{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        dispatch({type:"GET_ALL_USERS",payload:response.data});
    }
}
export const getAllTest = (formValues) => {
    return async function(dispatch)
    {
        const token = localStorage.getItem("token")
        const response = await axios.post('http://localhost:3900/getalltest',formValues,{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        dispatch({type:"GET_TEST",payload:response.data});
    }
}

export const createANewTest = (formValues) => {
    return async function(dispatch)
    {
        let dateInMillisecs = Date.now()
        let dateinseconds = Math.round(dateInMillisecs/1000); 
        const token = localStorage.getItem("token")
        const response = await axios.post('http://localhost:3900/savethetest',{...formValues,dateinseconds},{headers:{
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + token
        }})
        dispatch({type:"SAVE_TEST",payload:response.data});
        history.push("/newpost")
    }
}