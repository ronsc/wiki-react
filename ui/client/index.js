import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import Root from '../common/containers/Root'

const initialState = window.__INITIAL_STATE__
const rootE1 = document.getElementById('app')

render(
    <AppContainer>
        <Root
            history={browserHistory}
            initialState={initialState} />
    </AppContainer>,
    rootE1
)

if (module.hot) {
    module.hot.accept('../common/containers/Root', () => {
        const NextRootApp = require('../common/containers/Root').default

        render(
            <AppContainer>
                <NextRootApp
                    history={browserHistory}
                    initialState={initialState} />
            </AppContainer>,
            rootE1
        )
    })
}