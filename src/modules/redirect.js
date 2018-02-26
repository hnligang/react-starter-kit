 /*
  create by ligang on 2018-02-24 15:35:59
 */
import { createAction } from 'redux-actions'

const SET_REDIRECTURL = 'SET_REDIRECTURL'
export const reducerKey = 'REDIRECT'

export const setRedirectUrl = createAction(SET_REDIRECTURL)

export function getRedirectUrl (state) {
  return state[reducerKey].url
}

const initialState = { url: '/' }

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_REDIRECTURL:
      return !action.payload.url ? state : Object.assign({}, state, {
        url: action.payload.url,
        state: action.payload.state,
        query: action.payload.query
      })

    default:
      return state
  }
}
