import React, { useEffect, useRef } from 'react'
import styles from './Peopleifollow.module.css'
import {connect, useSelector, useDispatch } from 'react-redux'
import {getQuestionsForTheParticularUser} from '../../../../actions'
import {getFollowers} from '../../../../actions'

function Peopleifollow(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFollowers())
    }, [])
    let peopleRef = useRef();
    let allThePeopleIFollow = useSelector(state => state.getAllFollowers);
    let allOfThePeopleIFollow = allThePeopleIFollow.map( following => {
        return (
            <div className={styles.card}>
                <div className={styles.cardtext}>
                    <div style={{marginBottom: '-4px',fontSize:'20px'}}>{following.followersUserId.email}</div>
                    <span className="date" style={{color: '#656565'}}>4 days ago</span>
                </div>
                <div className={styles.cardstats}>
                    <div className={styles.stat}>
                        <div className={styles.value}>4<sup>m</sup></div>
                        <div className={styles.type}>read</div>
                    </div>
                    <div className={`${styles.stat} ${styles.border}`}>
                        <div className={styles.value}>5123</div>
                        <div className={styles.type}>views</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.value}>32</div>
                        <div className={styles.type}>comments</div>
                    </div>
                </div>
            </div>
        )
    });
    const goright = () => {
        peopleRef.current.scrollLeft = 100;
        peopleRef.current.style.transition = "scrollLeft all 2s";
        //peopleRef.current.animate( { scrollLeft: 100}, 300);
    }
    return (
        <div className={styles.peopleifollowContent}>
            <div style={{display:'flex',borderBottom: '1px solid #e3e3e3',marginTop:'15px',padding: '0% 2%'}}>
                <div>
                    <div style={{fontSize:'25px',marginBottom:'-6px'}}><b>Collections</b></div>
                    <div style={{color:'#656565',marginBottom:'5px'}}>All your recent collections for you to try</div>
                </div>
                <div style={{display:'flex',marginLeft:'auto',padding:'13px 52px'}}>
                    <div style={{fontSize: '20px',cursor:'pointer'}}>
                        <svg class="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div style={{marginLeft: '20px',fontSize: '20px',cursor:'pointer'}} onClick={goright}>
                        <svg class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                </div>
            </div>
            <br />
            <div ref={peopleRef} style={{display:'flex',overflow:'scroll'}}>
                {allOfThePeopleIFollow}
                {/* <div className={styles.card}>
                    <div className={styles.cardtext}>
                        <h2 style={{marginBottom: '-4px'}}>Post One</h2>
                        <span className="date" style={{color: '#656565'}}>4 days ago</span>
                    </div>
                    <div className={styles.cardstats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>4<sup>m</sup></div>
                            <div className={styles.type}>read</div>
                        </div>
                        <div className={`${styles.stat} ${styles.border}`}>
                            <div className={styles.value}>5123</div>
                            <div className={styles.type}>views</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>32</div>
                            <div className={styles.type}>comments</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardtext}>
                        <h2 style={{marginBottom: '-4px'}}>Post One</h2>
                        <span className="date" style={{color: '#656565'}}>4 days ago</span>
                    </div>
                    <div className={styles.cardstats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>4<sup>m</sup></div>
                            <div className={styles.type}>read</div>
                        </div>
                        <div className={`${styles.stat} ${styles.border}`}>
                            <div className={styles.value}>5123</div>
                            <div className={styles.type}>views</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>32</div>
                            <div className={styles.type}>comments</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardtext}>
                        <h2 style={{marginBottom: '-4px'}}>Post One</h2>
                        <span className="date" style={{color: '#656565'}}>4 days ago</span>
                    </div>
                    <div className={styles.cardstats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>4<sup>m</sup></div>
                            <div className={styles.type}>read</div>
                        </div>
                        <div className={`${styles.stat} ${styles.border}`}>
                            <div className={styles.value}>5123</div>
                            <div className={styles.type}>views</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>32</div>
                            <div className={styles.type}>comments</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardtext}>
                        <h2 style={{marginBottom: '-4px'}}>Post One</h2>
                        <span className="date" style={{color: '#656565'}}>4 days ago</span>
                    </div>
                    <div className={styles.cardstats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>4<sup>m</sup></div>
                            <div className={styles.type}>read</div>
                        </div>
                        <div className={`${styles.stat} ${styles.border}`}>
                            <div className={styles.value}>5123</div>
                            <div className={styles.type}>views</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>32</div>
                            <div className={styles.type}>comments</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardtext}>
                        <h2 style={{marginBottom: '-4px'}}>Post One</h2>
                        <span className="date" style={{color: '#656565'}}>4 days ago</span>
                    </div>
                    <div className={styles.cardstats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>4<sup>m</sup></div>
                            <div className={styles.type}>read</div>
                        </div>
                        <div className={`${styles.stat} ${styles.border}`}>
                            <div className={styles.value}>5123</div>
                            <div className={styles.type}>views</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>32</div>
                            <div className={styles.type}>comments</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardtext}>
                        <h2 style={{marginBottom: '-4px'}}>Post One</h2>
                        <span className="date" style={{color: '#656565'}}>4 days ago</span>
                    </div>
                    <div className={styles.cardstats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>4<sup>m</sup></div>
                            <div className={styles.type}>read</div>
                        </div>
                        <div className={`${styles.stat} ${styles.border}`}>
                            <div className={styles.value}>5123</div>
                            <div className={styles.type}>views</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>32</div>
                            <div className={styles.type}>comments</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardtext}>
                        <h2 style={{marginBottom: '-4px'}}>Post One</h2>
                        <span className="date" style={{color: '#656565'}}>4 days ago</span>
                    </div>
                    <div className={styles.cardstats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>4<sup>m</sup></div>
                            <div className={styles.type}>read</div>
                        </div>
                        <div className={`${styles.stat} ${styles.border}`}>
                            <div className={styles.value}>5123</div>
                            <div className={styles.type}>views</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>32</div>
                            <div className={styles.type}>comments</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Peopleifollow
