import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
// import injectTapEventPlugin from 'react-tap-event-plugin'
import { match } from 'react-router'
//injectTapEventPlugin() //解决ios点击事件300ms延时

/*
  Store Instantiation 
  maybe doing ssr
*/

const initialState = __DEV__ ? {}: window.__INITIAL_STATE__
const store = createStore(initialState)

// Render Setup
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)
  const { pathname, search, hash } = window.location
  const location = `${pathname}${search}${hash}`

  match({ routes, location }, () => {
    ReactDOM.render(
      <AppContainer store={store} routes={routes} />,
      MOUNT_NODE
    )
  })
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
