import { combineReducers } from 'redux'

import todosReducer from './features/Todos/todoSlice'
import filtersReducer from './features/Filters/filtersSlice'

// const rootReducer = (state, action) => {
//   // always return a new object for the root state
//   return {
//     // the value of `state.todos` is whatever the todos reducer returns
//     todos: todosReducer(state.todos, action),
//     // For both reducers, we only pass in their slice of the state
//     filters: filtersReducer(state.filters, action),
//   }
// }

// rootReducer using combineReducers
const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
