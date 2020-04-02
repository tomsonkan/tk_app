import {createStore, applyMiddleware, combineReducers} from 'redux'
import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk'

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   } catch(e) {
//     console.log(e)
//   }
// }

// const rootReducer = combineReducers ({
  
// })

// const store = createStore(

// )

export default createStore(reducers, state, applyMiddleware(thunk))