import React, { useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Article.module.css'
import {getMore} from '../../../../actions'
function Articles(props) {
    const observer = useRef();
    const dispatch = useDispatch();
    const bringInMoreTests = useCallback( node => {
        let appeared = 0;
        if(observer.current)
        {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting)
            {
                if(appeared<1)
                {
                    appeared++;
                    console.log(appeared)
                    console.log("visible");
                    console.log(node.attributes.time.value);
                    props.addMore(node.attributes.time.value);
                }
            }
        })
        if(node) observer.current.observe(node)
    })
    
    const showallarticles = props.showallarticles.map( (article,i) => {
        if(i+1===props.showallarticles.length)
        {
            return (
                <div ref={bringInMoreTests} className={styles.card} time={article.dateinseconds}>
                    <div className={styles.cardheader}>
                        <div>{article.userId.email}</div>
                    </div>
                    <div className={styles.cardtext}>
                        <span className="date">{article.question}</span>
                        <div className={styles.cardTextOptions}>
                            <div className={styles.options}>Option one</div>
                            <div className={styles.options}>Option two</div>
                            <div className={styles.options}>Option three</div>
                            <div className={styles.options}>Option four</div>
                        </div>
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
        }
        else
        {
            return (
                <div className={styles.card}>
                    <div className={styles.cardheader}>
                        <div>{article.userId.email}</div>
                    </div>
                    <div className={styles.cardtext}>
                        <span className="date">{article.question}</span>
                        <div className={styles.cardTextOptions}>
                            <div className={styles.options}>Option one</div>
                            <div className={styles.options}>Option two</div>
                            <div className={styles.options}>Option three</div>
                            <div className={styles.options}>Option four</div>
                        </div>
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
        }
    })
    return (
        <div style={{width: '40%',height: '100%',overflow: 'scroll'}}>
            {showallarticles}
            <br />
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Articles
