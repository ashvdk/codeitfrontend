import React,{useState} from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {loggingin} from '../../actions'
import { Link } from "react-router-dom";
import styles from './Log.module.css'

const renderInput = (formProps) => {
    //console.log(formProps);
    return (
        <div className={`form-group ${styles.username}`}>
            <label htmlFor={formProps.placeholder}>{formProps.placeholder}</label>
            <input 
                type={formProps.type}  
                placeholder={`Enter ${formProps.placeholder}`}
                {...formProps.input}
                className="form-control"
                //onChange={event => formProps.input.onChange(event)}
            />
        </div>
    )
}

function Login(props) {
    
    const submitTheForm = (formValues) => {
        props.loggingin(formValues);
        //console.log(formValues);
    }
    let height = 500;
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
                    <form onSubmit={props.handleSubmit(submitTheForm.bind(this))}>
                        <Field 
                            name="email" 
                            component={renderInput} 
                            type="email" 
                            placeholder="Email"
                        />
                        <Field name="password" component={renderInput} type="password" placeholder="Password" />
                        <p className="float-right" style={{textAlign: 'center',marginTop:'-22px',marginBottom:'28px'}}><Link to="/forgotpassword" >Forgot password?</Link></p>
                        <button type="submit" class="btn btn-success btn-block">Sign in</button>
                    </form>
                
                    <p style={{textAlign: 'center',marginTop:'35px'}}><Link to="/signup" >Create an account</Link></p>
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

export default connect(mapStateToProps,{loggingin})(loginForm)
