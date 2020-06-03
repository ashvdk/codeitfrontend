import React,{useState} from 'react'
import '../Login/Login.css';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {signup} from '../../actions'
import { Link } from "react-router-dom";
import styles from './Signup.module.css'

const renderInput = (formProps) => {
    //console.log(formProps);
    return (
        <div className={`form-group ${styles.username}`}>
            <label htmlFor={formProps.placeholder}>{formProps.placeholder}</label>
            <input 
                type={formProps.type}  
                placeholder={`Enter ${formProps.placeholder}`}
                {...formProps.input}
                autoComplete="off"
                className="form-control"
                //onChange={event => formProps.input.onChange(event)}
            />
        </div>
    )
}

function Login(props) {
    
    const submitTheForm = (formValues) => {
        props.signup(formValues);
        //console.log(formValues);
    }
    let height = 480;
    if(props.loginMessage)
    {
        height = 570; 
    }
    return (
        <div style={{height: '100vh',width:'100vw',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
            <div style={{background: 'white',width:'350px',height: `${height}px`,borderRadius:'10px',padding: '60px 35px 35px 35px'}}>
                <div style={{textAlign: 'center',fontSize: '28px',letterSpacing: '0.5px'}}>&lt;codeIt /&gt;</div>
                <div className={styles.fields}>
                    {props.loginMessage ? <div style={{background: '#c05c48',color: 'white',textAlign: 'center',padding: '6px 7px 7px',marginBottom: '30px'}}>
                        {props.loginMessage}
                    </div> : ""}
                    <form onSubmit={props.handleSubmit(submitTheForm)}>
                        <Field name="email" component={renderInput} type="email" placeholder="Email"/>
                        <Field name="password" component={renderInput} type="password" placeholder="Password" />
                        <button type="submit" class="btn btn-success btn-block">Sign up</button>
                    </form>
                
                    <p style={{textAlign: 'center',marginTop:'35px'}}><Link to="/" >Already have an account? Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        loginMessage:state.login.errorMessage
    }
}

const loginForm = reduxForm({
    // a unique name for the form
    form: 'login',
    //onChange:(values,dispatch) => console.log(values)
})(Login)

export default connect(mapStateToProps,{signup})(loginForm)
