import React, {Component, Fragment} from 'react'
import {
  TableCell,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import store from "store2";

class RemoveReq extends Component {
  state = {
    data: [{
    open:false,
    Number:'',
    Name:'',
    Description:'',
    Hours:'',
    Address:'',
    Level:'High',
    card:[]
  }]
  }

  // syncStateWithLocalStore = () => {
	// 	store.set("dnd-data", this.state);
	// };

  // delete(id){
    // this.setState(prevState => ({
    //     data: prevState.data.filter(el => el != id )
//     // }));
//     let { elements } = this.state;
//     console.log("dont know? " + this.state.data)
// 		elements = elements.filter(el => el.id !== id);
// 		this.setState({ elements });
//     this.syncStateWithLocalStore();
//  }

 delete = (index) => {
  let stuffBefore = this.state.data.slice(0,index);
  let stuffAfter = this.state.data.slice(index + 1, this.state.data.length);

  this.setState({
    data: [...stuffBefore, ...stuffAfter]
    })
  }

//  delete = (index) => {
//   let stuffBefore = this.props.reqs.slice(0,index);
//   let stuffAfter = this.props.reqs.slice(index + 1, this.props.reqs.length);
//   console.log(this.props.reqs)
//   this.setState({
//     data: [...stuffBefore, ...stuffAfter]
//     })
//     console.log(this.props.reqs)
//   }


  // componentDidUpdate = (prevProps, prevState) => {
  //   if(prevState.open !== this.state.open) {
  //     this.setState({
  //       Number:'',
  //       Name:'',
  //       Description:'',
  //       Hours:'',
  //       Address:'',
  //       Level:''
  //     })
      
  //   }
  // }

  render() {
    
    return (
      <>
      {this.state.data.map((item, index) => (
      <TableCell>
                    <DeleteIcon value = {index}onClick = {() => this.delete(index)}
                      className="icon text-red" />
      </TableCell>  
      ))}
      </>
    )
}
}

export default RemoveReq

// {this.state.todos.map(function(todo, index) {
//   return <li key={index} onClick={this.deleteTodo.bind(this, index)}>{todo}</li>

// }.bind(this))}