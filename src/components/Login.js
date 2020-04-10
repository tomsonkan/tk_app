import React, {Component} from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class App extends Component {
  state = {
    username:"",
    password:"",
  }


handleTextChange = (e) => {
  const state = {...this.state}
  state[e.target.name] = e.target.value
  this.setState(state)
}


login = (e) => {
  e.preventDefault()
  document.cookie = `loggedIn=true;max-age=60000*1000`
  window.location.replace("/")
}

render() {
  return (
    <div className="App" >
      <Container maxWidth="sm" style={{height: "600px", width: "250px", paddingBottom: "280px", marginTop: "100px"}}>
        <form className="login-form" onSubmit={this.login}>
          <TextField style={{width: "200px"}}
            required
            onChange={this.handleTextChange}  
            value={this.state.username}
            name="username"
            label="Username"
            type="text" />
          <TextField style={{width: "200px"}}
            required
            onChange={this.handleTextChange}
            value={this.state.password}
            name="password"
            label="Password"
            type="password" />
          <Button style = {{marginTop: "30px", width: "200px"}}
            type="submit"
            className="login-button"
            variant="contained"
            color="primary">Login</Button>
        </form>
        <h6>SmallBizBugTracker ©2020</h6>
      </Container>
    </div>
  );
}

}

export default App