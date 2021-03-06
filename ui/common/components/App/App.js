import React, { Component } from 'react'
import Header from './Header'
import styles from './App.scss'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className={styles['content']}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default App