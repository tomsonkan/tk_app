import React, {Component, Fragment} from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core'

class AddReq1 extends Component {
  state = {
    open:false,
    Name:'',
    Description:'',
    Hours:'',
    Address:''
  }


toggleDialog = () => this.setState({open: !this.state.open})

handleTextChange = (e) => {
  const newState = {...this.state}
  newState[e.target.id] = e.target.value
  this.setState(newState)
}

handleSubmit = (e) => {
  e.preventDefault()
  const payload = {...this.state}
  payload.id = this.props.busTotal + 1
  delete payload.open
  this.props.addTic1(payload)
  this.setState({open: false})

  fetch(`/api/home`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      id: payload.id,
      first_name: this.state.Name,
      last_name: this.state.Description,
      email: this.state.Hours,
    })})
    .then(response => {
       response.json()
    }).then(function(body) {
      console.log('clientside post: ' + body);
    })
  .catch(error => console.log(error))
  this.props.fetchReqs1()
}

componentDidUpdate = (prevProps, prevState) => {
  if(prevState.open !== this.state.open) {
    this.setState({
      Name:'',
      Description:'',
      Hours:'',
      Address:''
    })
  }
}
render() {
  return (
    <Fragment>
      <div style={{ texAlign: 'center'}}>
        {/* <Button 
          variant="contained"
          className="add-bus"
          onClick={this.toggleDialog}>
          Add Mid
          </Button> */}
      </div>
      <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Req</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                <TextField 
                                id="Name" 
                                placeholder="Name" 
                                value={this.state.name} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Description" 
                                placeholder="Description" 
                                value={this.state.description} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Hours" 
                                placeholder="From -- to -- " 
                                value={this.state.hours} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Address" 
                                placeholder="ex. 123 Smith st." 
                                value={this.state.address} 
                                onChange={this.handleTextChange} 
                                required />
                            <br />
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
      </div>
      </Fragment>
    )
  }
}

export default AddReq1