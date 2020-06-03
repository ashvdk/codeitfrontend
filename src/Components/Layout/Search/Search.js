import React,{useState,useEffect} from 'react'
import styles from './Search.module.css'
import logo from '../../../assets/photopeople.jpg';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import {getnames} from '../../../actions'
import {connect} from 'react-redux'
import Showusers from './Showusers';
const renderField = ({ input, label, type, meta: { touched, error } }) => {
    console.log(input.onChange);
    return (
        <input onChange={(e) => input.onChange(e)} type={type} className="form-control" style={{borderRadius: 'unset',border: 'unset',boxShadow: 'none !important',fontSize:'30px'}}/> 
    )
} 
function Search(props) {
    
    return (
        <div className={styles.searchContent}>
            <div className={`shadow p-4 mb-4 bg-white ${styles.searchSection}`}>
                <div className={styles.searchHeader}>
                    <h1>Search for someone!!</h1>
                </div>
                <div className="form-group" style={{position:'relative',display:'flex'}}>
                    <div style={{background: 'white',color: 'black',padding: '17px 20px',borderTop:'2px solid',borderBottom:'2px solid',borderLeft:'2px solid'}}>
                        <svg  className="bi bi-search text-dark" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div style={{marginBottom:'unset !important',width:'100%',border:'2px solid'}}>
                        <form>
                            <Field name="email" type="text" component={renderField}  type="email"  />
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.searchedUsers}>
                <Showusers />
            </div>
        </div>
    )
}



export default connect(null,{getnames})(reduxForm({
    form: 'search', // a unique identifier for this form
    onChange:(value,dispatch) => dispatch(getnames(value))
})(Search))
