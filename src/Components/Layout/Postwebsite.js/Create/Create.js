import React,{useEffect,useState} from 'react'
import styles from './Create.module.css'
import { Field, FieldArray, reduxForm } from 'redux-form'
import {createANewTest} from '../../../../actions'
import {connect} from 'react-redux'
import {Link, Route} from "react-router-dom";
import '../../../../Radio.css'

const renderField = ({input,label,className,type,meta: { touched, error, warning }}) => {
    return (
        <input {...input} type={type} className={className}/>
    )
}

function Create(props) {
    const [color,changeColor] = useState('black');
    
    const submitTest = (formValues) => {
        console.log(formValues);
        props.createANewTest(formValues);
        
    }
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div className={styles.createContent}>
            <h2><span style={{borderBottom:'3px solid #007BFF'}}>What do you want to ask?</span></h2>
            <div style={{marginTop: '50px'}}>
                <form onSubmit={handleSubmit(submitTest)}>
                    <div className="form-group">
                        <label>Ask something:</label>
                        <div  className="input-group-lg">
                            <Field
                                name="question"
                                type="text"
                                component={renderField}
                                className="form-control"
                            />
                        </div>
                    </div><br />
                    <div className="row form-group" style={{display:'flex'}}>
                        <div className="col-md-3">
                            <label>Option 1:</label>
                            <div  className="input-group-lg" style={{display:'flex'}}>
                                <div style={{borderLeft: '1px solid #ced4da',borderRadius: '5px 0px 0px 5px',borderTop: '1px solid #ced4da',borderBottom: '1px solid #ced4da',paddingTop: '12px',paddingLeft: '5px',paddingRight: '5px',position:"relative",cursor:'pointer'}}>
                                    <Field
                                        name="answer"
                                        type="radio"
                                        component={renderField}
                                        label="Answer:"
                                        value="option1"
                                    />
                                </div>
                                <Field
                                    name="optionone"
                                    type="text"
                                    component={renderField}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label>Option 2:</label>
                            <div  className="input-group-lg" style={{display:'flex'}}>
                                <div style={{borderLeft: '1px solid #ced4da',borderRadius: '5px 0px 0px 5px',borderTop: '1px solid #ced4da',borderBottom: '1px solid #ced4da',paddingTop: '12px',paddingLeft: '5px',paddingRight: '5px',position:"relative",cursor:'pointer'}}>
                                    <Field
                                        name="answer"
                                        type="radio"
                                        component={renderField}
                                        value="option2"
                                    />
                                </div>
                                <Field
                                    name="optiontwo"
                                    type="text"
                                    component={renderField}
                                    className="form-control"
                                /> 
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label>Option 3:</label>
                            <div  className="input-group-lg" style={{display:'flex'}}>
                                <div style={{borderLeft: '1px solid #ced4da',borderRadius: '5px 0px 0px 5px',borderTop: '1px solid #ced4da',borderBottom: '1px solid #ced4da',paddingTop: '12px',paddingLeft: '5px',paddingRight: '5px',position:"relative",cursor:'pointer'}}>
                                    <Field
                                        name="answer"
                                        type="radio"
                                        component={renderField}
                                        value="option3"
                                    />
                                </div>
                                <Field
                                    name="optionthree"
                                    type="text"
                                    component={renderField}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label>Option 4:</label>
                            <div  className="input-group-lg" style={{display:'flex'}}>
                                <div style={{borderLeft: '1px solid #ced4da',borderRadius: '5px 0px 0px 5px',borderTop: '1px solid #ced4da',borderBottom: '1px solid #ced4da',paddingTop: '12px',paddingLeft: '5px',paddingRight: '5px',position:"relative",cursor:'pointer'}}>
                                    <Field
                                        name="answer"
                                        type="radio"
                                        component={renderField}
                                        value="option4"
                                    />
                                </div>
                                <Field
                                    name="optionfour"
                                    type="text"
                                    component={renderField}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group text-right" style={{marginTop: '47px'}}>
                        <button type="submit" className="btn btn-primary rounded-lg btn-lg" style={{width: '14%'}}>
                            SUBMIT 
                        </button> <Link to="/newpost" className="btn btn-danger rounded-lg btn-lg" style={{width: '14%'}}>
                            Cancel
                        </Link>
                    </div>
                </form>
                {/* <button onClick={(e)=>e.currentTarget.style.backgroundColor = "green"} id="buttonone" style={{background:color}}>getThis</button>
                <button onClick={(e)=>e.currentTarget.style.backgroundColor = "blue"} style={{background:color}}>getThis</button> */}
            </div> 
        </div>
    )
}

let TestNameForm = reduxForm({
    // a unique name for the form
    form: 'testnameform'
})(Create)

export default connect(null,{createANewTest})(TestNameForm)
