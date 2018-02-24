 /*
  create by ligang on 2018-02-24 14:42:40
 */
import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import locationReducer from './location'
import redirectReducer, { reducerKey as REDIRECT_REDUCER_KEY } from 'modules/redirect'
// import { Cache } from 'wnpm-common'

export const makeRootReducer = (asyncReducers) => {
  return enableBatching(combineReducers({
    location: locationReducer,
    [REDIRECT_REDUCER_KEY]: redirectReducer,
    // [Cache.reducerKey]: Cache.reducer,
    ...asyncReducers
  }))
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
