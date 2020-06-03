import React,{useState,useEffect} from 'react'
import styles from './Postwebsite.module.css'
import {Link, Route} from "react-router-dom";
import Create from './Create/Create'
import {connect} from 'react-redux'
import _ from 'lodash'
import {getAllTest} from '../../../actions'
import { useSelector,useDispatch } from 'react-redux'

let  Postwebsite = (props) => {
    const [allOfMyQuestions,getAllOfMyQuestions] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTest());
    },[]);
    let alltest = useSelector(state =>  _.valuesIn(state.allTests))
    console.log(alltest);
    const formatDate = (date) => {
        let d = new Date(date);
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return `${d.getDate()}-${months[d.getMonth()]}-${d.getFullYear()}`;
    }
    const isThisTheAnswer = () => {
        return "classname='bg-warning'";
    }
    const displayStuff = () => {
        if(alltest.length)
        {
            return alltest.map( (question,i) => {
                return (
                    <tr>
                        <td>{i+1}</td>
                        <td className="font-weight-bolder">{question.question}</td>
                        <td className={question.answer==="option1" ? "bg-warning" : ""}>{question.optionone}</td>
                        <td className={question.answer==="option2" ? "bg-warning" : ""}>{question.optiontwo}</td>
                        <td className={question.answer==="option3" ? "bg-warning" : ""}>{question.optionthree}</td>
                        <td className={question.answer==="option4" ? "bg-warning" : ""}>{question.optionfour}</td>
                        <td>{formatDate(question.date)}</td>
                        <td style={{textAlign: 'center'}}>
                            <svg style={{cursor:'pointer'}} onClick={()=>console.log("object")} className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                            </svg> <svg onClick={()=>console.log("object")} style={{marginLeft: '20px',cursor:'pointer'}} className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                            </svg>
                        </td>
                    </tr>
                )
            })
        }
        else
        {
            return (
                <tr>
                    <td colSpan="6">
                        No Questions asked create one now!!!!
                    </td>
                </tr>
            )
        }
    }
    
    return (
        <div className={styles.postWebsite}>
            {/* <Testsidebar /> */}
            
            <div className={styles.AllQuestion}>
                <br />
                <div>
                    <h2 className="float-left" ><span style={{borderBottom:'3px solid #007BFF'}}>All questions</span></h2>
                    <Link to="/newpost/create" className="btn btn-primary float-right btn-lg" style={{marginLeft:'10px'}}>Ask one question</Link>
                </div>
                <br /><br /><br />
                <div style={{marginTop:'1%'}}>
                    <table className="table table-hover" style={{fontSize:'1.25rem'}}>
                        <thead className="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Question</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                                <th>Option 3</th>
                                <th>Option 4</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayStuff()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

// const mapStatetoProps = state => {
//     console.log(state);
//     return {
//         alltest: _.valuesIn(state.allTests)
//     } 
// }

// export default connect(mapStatetoProps,{getAllTest})(Postwebsite)

export default Postwebsite

