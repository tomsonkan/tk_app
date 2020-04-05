import React from 'react';
import Navigation from './components/Navigation'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';

function App () {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
    </Provider>
  )
}

export default App;




/* "proxy": "http://localhost:5000" */ 






// import React from 'react';
// import {Component} from 'react'
// import { AppBar, Toolbar, IconButton, 
//   Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
// // import TextField from 'material-ui/TextField';
// import { Link } from 'react-router-dom'
// import './App.css';
// import { render } from '@testing-library/react';

//  class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: ' ',
//       todos: [],
//       isClicked: false
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

// handleClick(){
//   this.setState(state => ({
//     isClicked: !state.isClicked
// }));
// }

// formSubmit = event => {
//   event.preventDefault()
//   this.setState({
//     todos: [...this.state.todos, this.state.text],
//     text:''
//   })
// }

// inputUpdate = event => {
//   this.setState({
//     text: event.target.value
//   })
//   console.log("****" + event.target.value)
// }

// onDelete = index => {
//   let before = this.state.todos.slice(0, index)
//   let after = this.state.todos.slice(index + 1, this.state.todos.length)
//   this.setState({
//     text: [...before, ...after]
//   })
// }

//   render() {
//   console.log(this.state.todos)
//   return (
//     <div className="App">
//     <AppBar position="relative">
//             <Toolbar>
//                 <IconButton color="inherit">
//                     <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h5" style={{ flexGrow: "1" }}>
//                     JIRA Knockoff
//                 </Typography>
//                 {/* <ul className="nav-list">
//                     <li className="nav-list-item">
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li className="nav-list-item">
//                         <Link to="/about">About</Link>
//                     </li>
//                     <li className="nav-list-item">
//                         <Link to="/dashboard">Dashboard</Link>
//                     </li>
//                     <li className="nav-list-item">
//                         <Link to="/import">Import</Link>
//                     </li>
//                 </ul> */}
//             </Toolbar>
//         </AppBar>
//       <header className="App-header">
//         <h1>JIRA Knockoff</h1>
//         <form onSubmit = {this.formSubmit}>
//           <label>
//            Name 
//           <input 
//             value={this.state.text}
//             onChange={this.inputUpdate}
//           />
//           </label>
//           <br />
//           {/* <label>
//            Date 
//           <input 
//             value={this.state.text}
//             onChange={this.inputUpdate}
//           />
//           </label>
//           <br /> */}
//           <button onClick = {this.handleClick}>Submit </button>
//         </form>
//         <ul>
//         {this.state.todos.map((item, index) => {
//         return (
//           <li key={index}>
//           {this.state.todos[index]}
//           <button value = {index}></button> 
//           </li>
//         )
//       })}
//     </ul>
//       </header>
//     </div>
//   );
// }
// }


// export default App;
