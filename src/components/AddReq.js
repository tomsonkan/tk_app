import React, {Component, Fragment} from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@material-ui/core'

class AddReq extends Component {
  state = {
    open:false,
    Number:'',
    Name:'',
    Description:'',
    Hours:'',
    Address:'',
    Level:'High',
    isLiked1: true, 
    isLiked2: false, 
    isLiked: false
  }


toggleDialog = () => this.setState({open: !this.state.open})

handleTextChange = (e) => {
  const newState = {...this.state}
  newState[e.target.id] = e.target.value
  this.setState(newState)
}

handleLevelChange = (e) => {
  console.log(e.target.value)
  e.preventDefault()
  if(e.target.value === "Low") {
      this.setState({
        Number: this.state.Number,
        Name:this.state.Name,
        Description:this.state.Description,
        Hours: this.state.Hours,
        Address: this.state.Address,
        Level:e.target.value,
      })
    } else if (e.target.value === "Medium") {
      this.setState({
        Number: this.state.Number,
        Name:this.state.Name,
        Description:this.state.Description,
        Hours: this.state.Hours,
        Address: this.state.Address,
        Level:e.target.value
      }) 
    } else if (e.target.value === "High") {
      this.setState({
        Number: this.state.Number,
        Name:this.state.Name,
        Description:this.state.Description,
        Hours: this.state.Hours,
        Address: this.state.Address,
        Level:e.target.value,
        isLiked1: true, 
        isLiked2: false, 
        isLiked: false
    })
}

}

handleSubmit = (e) => {
  e.preventDefault()
  const payload = {...this.state}
  payload.id = this.props.busTotal + 1
  delete payload.open
  // this.props.addTic(payload)
  this.setState({open: false,
      isLiked1: true,
      isLiked2: false,
      isLiked3: false
  
  })

  fetch(`/api/home`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      id: payload.id,
      first_name: this.state.Name,
      last_name: this.state.Description,
      email: this.state.Hours,
      lvl: this.state.Level,
      isLiked1: true,
      isLiked2: false,
      isLiked3: false
      })

      })
    .then(response => {
       response.json()
    }).then(function() {
      console.log('clientside post: ');
    })
  .catch(error => console.log(error))
  this.props.fetchReqs()
}

componentDidUpdate = (prevProps, prevState) => {
  if(prevState.open !== this.state.open) {
    this.setState({
      Number:'',
      Name:'',
      Description:'',
      Hours:'',
      Address:'',
      Level:'',
      isLiked1: true, 
      isLiked2: false, 
      isLiked: false
    })
    this.props.fetchReqs()
  }
}


render() {
  return (
    <Fragment>
      <div style={{ texAlign: 'center'}}>
        {/* <h1> Add New Ticket</h1> */}
        <Button 
          variant="contained"
          className="add-bus"
          style={{marginLeft: "10px"}}
          onClick={this.toggleDialog}>
          ADD TICKET
          </Button>
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
                                value={this.state.Name} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Description" 
                                placeholder="Description" 
                                value={this.state.Description} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Hours" 
                                placeholder="From -- to -- " 
                                value={this.state.Hours} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Address" 
                                placeholder="ex. 123 Smith st." 
                                value={this.state.Address} 
                                onChange={this.handleTextChange} 
                                required />
                            <FormControl >
                        <InputLabel id="open-select-label">Level</InputLabel>
                        <Select
                            id="Level" 
                            placeholder="ex. 123 Smith st." 
                            value={this.state.Level} 
                            onClose={this.state.Level}
                            onChange={this.handleLevelChange} 
                            required >
                          <MenuItem value={'Low'}>Low</MenuItem>
                          <MenuItem value={'Medium'}>Medium</MenuItem>
                          <MenuItem value={'High'}>High</MenuItem>
                        </Select>
                        </FormControl>  
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

export default AddReq