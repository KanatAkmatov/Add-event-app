import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import events from './events'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    events
  })

export default createRootReducer
