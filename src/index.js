// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// import './api/server'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// Omit existing React imports

import store from './store'

console.log('Dispatching action')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
console.log('Dispatch complete')
