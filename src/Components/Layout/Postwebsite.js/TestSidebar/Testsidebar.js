import React from 'react'
import styles from './Testsidebar.module.css'
import {
    Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import {connect} from 'react-redux'
import _ from 'lodash'

function Testsidebar(props) {
    let { path, url } = useRouteMatch();
    const showalltest = [
        {
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim",
            "status":"Draft"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "sunt qui excepturi placeat culpa",
            "status":"Published"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "omnis laborum odio",
            "status":"Draft"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "non esse culpa molestiae omnis sed optio",
            "status":"Published"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "eaque aut omnis a",
            "status":"Draft"
        },
        {
            "userId": 1,
            "id": 6,
            "title": "natus impedit quibusdam illo est",
            "status":"Published"
        },
        {
            "userId": 1,
            "id": 7,
            "title": "quibusdam autem aliquid et et quia",
            "status":"Draft"
        },
        {
            "userId": 1,
            "id": 8,
            "title": "qui fuga est a eum",
            "status":"Published"
        },
        {
            "userId": 1,
            "id": 9,
            "title": "saepe unde necessitatibus rem",
            "status":"Draft"
        },
        {
            "userId": 1,
            "id": 10,
            "title": "distinctio laborum qui",
            "status":"Published"
        },
        {
            "userId": 2,
            "id": 11,
            "title": "quam nostrum impedit mollitia quod et dolor",
            "status":"Draft"
        },
        {
            "userId": 2,
            "id": 12,
            "title": "consequatur autem doloribus natus consectetur",
            "status":"Published"
        },
        {
            "userId": 2,
            "id": 13,
            "title": "ab rerum non rerum consequatur ut ea unde",
            "status":"Draft"
        },
        {
            "userId": 2,
            "id": 14,
            "title": "ducimus molestias eos animi atque nihil",
            "status":"Published"
        },
        {
            "userId": 2,
            "id": 15,
            "title": "ut pariatur rerum ipsum natus repellendus praesentium",
            "status":"Draft"
        },
        {
            "userId": 2,
            "id": 16,
            "title": "voluptatem aut maxime inventore autem magnam atque repellat",
            "status":"Published"
        },
        {
            "userId": 2,
            "id": 17,
            "title": "aut minima voluptatem ut velit",
            "status":"Draft"
        },
        {
            "userId": 2,
            "id": 18,
            "title": "nesciunt quia et doloremque",
            "status":"Published"
        },
        {
            "userId": 2,
            "id": 19,
            "title": "velit pariatur quaerat similique libero omnis quia",
            "status":"Draft"
        },
        {
            "userId": 2,
            "id": 20,
            "title": "voluptas rerum iure ut enim",
            "status":"Published"
        }
    ]
    let allOfMyTest = props.alltest.map( oneTest => {
        return (
            <div className={styles.individualTest} >
                {oneTest.testname.substr(0,21)}
                <br />
                <span style={{fontSize:'15px',color:'rgb(158, 158, 158)'}}>15/04/2020</span>
            </div>
        )
    });
    //console.log(props.alltest);
    return (
        <div className={styles.listtest}>
            {/* <div className={`bg-primary ${styles.createatest}`}>
                <Link to={`/newpost/create`}>
                    <svg className={`bi bi-plus ${styles.fontAwesomeIcons}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                    </svg> Add test
                </Link>
            </div> */}
            <div className={styles.showalltest}>
                <h2 style={{marginTop:'10px'}}>All tests</h2>
                {props.alltest.length ? allOfMyTest : 'Create your first test by clicking +'}
                <Link to={`/newpost/create`}>
                    <div className={`${styles.cre} bg-warning`}>
                        <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.allTests)
    return {
       alltest: _.valuesIn(state.allTests)
    }
}

export default connect(mapStateToProps)(Testsidebar)
