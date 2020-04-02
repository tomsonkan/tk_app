import React, { Component } from 'react';


class Like extends Component {
  state = {
    isLiked1: true,
    isLiked2: false,
    isLiked3: false
  }

  //opposite of blackButton for handleLiked
  handleLiked1 = (req) => {
    const payload = { ...this.state }
    let ticId = this.props.id
    payload.id = ticId
    this.setState({isLiked1: !this.state.isLiked1})

    fetch(`/api/home/${ticId}`, {
      method: 'PUT',
      body: JSON.stringify({
        isLiked1: false, 
        })
      })
      .then((response) => {
        console.log("hii", this.state.isLiked1)
         response.json()
      })
      .then(function() {
        console.log('clientside post: ');
      })
    .catch(error => console.log(error))
  }

  handleLiked2 = () => {
    this.setState({isLiked2: !this.state.isLiked2})
  }
  handleLiked3 = () => {
    this.setState({isLiked3: !this.state.isLiked3})
  }

  render() {
    return <div>
      Status:
      <button 
        className = {this.state.isLiked1 ? "blackButton" : "whiteButton"} 
        onClick={() => this.handleLiked1()}
        >Early
      </button>
      <button 
        className = {this.state.isLiked2 ? "blackButton" : "whiteButton"} 
        onClick={() => this.handleLiked2()}
        >Mid
      </button>
      <button 
        className = {this.state.isLiked3 ? "blackButton" : "whiteButton"} 
        onClick={() => this.handleLiked3()}
        >Complete
      </button>

    </div>
  }

}

export default Like