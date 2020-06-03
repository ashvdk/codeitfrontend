import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'
import history from '../history'
let initialValue = {
    authenticated:"",
    errorMessage:"",
    lastLoggedInTime:""
}

const login = (state = initialValue,action) => {
    switch (action.type) {
        case "LOGIN_SUCCCESS":
            return {
                ...state,
                authenticated:action.payload,
                lastLoggedInTime:action.lastLoggedInTime
            }
        case "GETTING_LAST_LOGGEDIN":
            return {
                ...state,
                lastLoggedInTime:action.lastLoggedInTime
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                errorMessage:action.payload
            }
        default:
            return state
            break;
    }
}
const getAllFollowers = (state = [],action) => {
    switch(action.type)
    {
        case "GET_FOLLOWERS":
            return [...action.payload]
        default:
            return state
    }
}
const allTests = (state = {},action) => {
    switch(action.type)
    {
        case "GET_TEST" :
            console.log(action.payload);
            return {
                ...state,
                ..._.mapKeys(action.payload,'_id')
            };
        case "SAVE_TEST" :
            console.log(action.payload["_id"]);
            return {
                ...state,
                [action.payload["_id"]]:action.payload,
            };
        default:
            return state
    }
}
const getAllUsers = (state = [],action) => {
    switch(action.type)
    {
        case "GET_ALL_USERS":
            return [...action.payload]
        default:
            return state
    }
}
const displayQuestions = (state = {},action) => {
    switch(action.type)
    {
        case "SHOW_ALL_QUESTIONS":
            return {
                [action.payload.userId]:action.payload
            }
        default:
            return state;
    }
}
const logout = (state = "",action) => {
    switch(action.type)
    {
        case "LOG_OUT":
            console.log("sdj sdihfvs");
        default:
            return state
    }
}
const appReducer = combineReducers({
    login,
    form: formReducer,
    allTests,
    getAllUsers,
    getAllFollowers,
    displayQuestions
})

const rootReducer = (state, action) => {   
    // Clear all data in redux store to initial.
    if(action.type === "LOG_OUT"){
        localStorage.removeItem("token")
        history.push("/")
        state = undefined;
    }
    return appReducer(state, action);
};
export default rootReducer;