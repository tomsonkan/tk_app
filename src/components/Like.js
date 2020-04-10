import React, { Component } from 'react';


class Like extends Component {

  state = {
    isLiked1: this.props.req.isLiked1,
    isLiked2: this.props.req.isLiked2,
    isLiked3: this.props.req.isLiked3
  }
    
  //opposite of blackButton for handleLiked
  handleLiked1 = () => {
    const payload = { ...this.state }
    let ticId = this.props.req.id
    payload.id = ticId
    console.log("****hi***", this.props)
    console.log("***tic", ticId)
    this.setState({isLiked1: !this.state.isLiked1})

    fetch(`/api/home/${ticId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        isLiked1: true, 
        isLiked2: false, 
        isLiked3: false, 
        })
      })
    .catch(error => console.log(error))
    this.props.refresh()
  }

  handleLiked2 = () => {
    const payload = { ...this.state }
    let ticId = this.props.req.id
    payload.id = ticId
    console.log("****hi***", this.props)
    console.log("***tic", ticId)
    this.setState({isLiked1: !this.state.isLiked1})

    fetch(`/api/home/${ticId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      body: JSON.stringify({
        isLiked1: true, 
        isLiked2: true, 
        isLiked3: false, 
        })
      })
    .catch(error => console.log(error))
    this.props.refresh()
  }

  handleLiked3 = () => {
    const payload = { ...this.state }
    let ticId = this.props.req.id
    payload.id = ticId
    console.log("****hi***", this.props)
    console.log("***tic", ticId)
    this.setState({isLiked1: !this.state.isLiked1})

    fetch(`/api/home/${ticId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      body: JSON.stringify({
        isLiked1: true, 
        isLiked2: true, 
        isLiked3: true, 
        })
      })
    .catch(error => console.log(error))
    this.props.refresh()
  }

  render() {
    console.log(this.props , "render")
    return <div className= "ticTitle">
      Status:
      <button 
        className = {this.props.req.isLiked1 == "1" ? "blackButton" : "whiteButton"} 
        onClick={() => this.handleLiked1()}
        >EARLY
      </button>
      <button 
        className = {this.props.req.isLiked2 == "1" ? "blackButton" : "whiteButton"} 
        onClick={() => this.handleLiked2()}
        >IN PROG
      </button>
      <button 
        className = {this.props.req.isLiked3 == "1" ? "blueButton" : "whiteButton"} 
        onClick={() => this.handleLiked3()}
        >DONE!
      </button>

    </div>
  }

}

export default Like