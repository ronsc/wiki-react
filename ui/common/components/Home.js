import React, { Component } from 'react'
import styles from './Home.scss'

class Home extends Component {
    render() {
        return (
            <h2 className={styles['title']}>
                Hello World Wiki! Fast
            </h2>
        )
    }
}

export default Home