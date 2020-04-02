import {combineReducers} from 'redux'
import { fetchReqs } from './actions';

const user = (state = null) => state

const reqs = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_REQS':
      return action.value
    case 'ADD_REQ':
      return [ ...state, action.value]
    case 'REMOVE_TIC':
      console.log("hi" , state)
      const newState = [...state]
      const index = newState.findIndex(ticket => action.value.id == ticket.id)
      index.splice(action.value, 1)
      console.log("rrr", newState)
      return newState
    case 'IS_LIKE':
      return [...state]
    default:
      return state
  }
}

const reqs1 = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_REQS1':
      return action.value
    case 'ADD_REQ1':
      return [ ...state, action.value]
    case 'REMOVE_TIC1':
      const newState = [...state]
      newState.splice(action.value, 1)
      return newState
    default:
      return state
  }
}

export default combineReducers ({user, reqs, reqs1})
