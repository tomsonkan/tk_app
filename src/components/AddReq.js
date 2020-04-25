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
    isLiked: false,
    Project:'',
    Des:''
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
        Project: this.state.Project,
        Des: this.state.Des
      })
    } else if (e.target.value === "Medium") {
      this.setState({
        Number: this.state.Number,
        Name:this.state.Name,
        Description:this.state.Description,
        Hours: this.state.Hours,
        Address: this.state.Address,
        Level:e.target.value,
        Project: this.state.Project,
        Des: this.state.Des
      }) 
    } else if (e.target.value === "High") {
      this.setState({
        Number: this.state.Number,
        Name:this.state.Name,
        Description:this.state.Description,
        Hours: this.state.Hours,
        Address: this.state.Address,
        Level:e.target.value,
        Project: this.state.Project,
        Des: this.state.Des
    })
}

}



handleSubmit = (e) => {
  let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  e.preventDefault()
  const payload = {...this.state}
  payload.id = this.props.busTotal + getRandomInt(2, 60)
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
      isLiked3: false,
      Bug: this.state.Project,
      Descr: this.state.Des
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
      isLiked: false,
      Project:'',
      Des:''
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
            <DialogTitle>Add New Bug</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                            <TextField 
                                id="Project" 
                                placeholder="Bug Type" 
                                value={this.state.Project} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Name" 
                                placeholder="First Name" 
                                value={this.state.Name} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Description" 
                                placeholder="Last Name" 
                                value={this.state.Description} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Hours" 
                                placeholder="ex. bug@grasshopper.com" 
                                value={this.state.Hours} 
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
                            <TextField 
                                id="Des" 
                                placeholder="Description" 
                                value={this.state.Des} 
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

export default AddReq