 /*
  create by ligang on 2018-02-24 12:13:24
 */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'

export default (initialState = {}, initialReducer = {}) => {

  // Middleware Configuration
  const logger = createLogger()
  const middleware = [thunk, logger]

  /*
    Store Enhancers
    In the development environment can be observed in chrome redux devtool data changes
  */
  const enhancers = []
  
  if (__DEV__ === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // Store Instantiation
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  /*
    Used to cache the old reducers and then merge with the new reducer, 
    the specific operation is in injectReducer
  */
  store.asyncReducers = {
    ...initialReducer
  }
  
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  /*
    Webpack can monitor changes in our components and make immediate responses,
    but can't monitor changes in reducers.
    Add the following code and refresh the page when reducers changes
  */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
