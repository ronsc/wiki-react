import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {
    Pages,
    ShowPage,
    NewPage
} from './containers'
import {
    App,
    Home
} from './components'

export default (store, history) => {
    return (
        <Router history={syncHistoryWithStore(history, store)}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='pages'>
                    <IndexRoute component={Pages} />
                    <Route path='new'
                        component={NewPage} />
                    <Route path=':id' 
                        component={ShowPage} />
                </Route>
            </Route>
        </Router>
    )
}