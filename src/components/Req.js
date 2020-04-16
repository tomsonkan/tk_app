import React from 'react'
import { Container, Paper, Chip,
  Card,
  CardContent,
  CardActions,
  Divider,
  TableCell,
  Grid,
  Avatar,
} 
from '@material-ui/core';


const Req = (props) => {
    // const id = props.reqs.id
    // {/* Change cars to props.cars and remove the cars.json import above */}
    // const req = props.reqs.find(c => c.id == id)
    console.log(props.match.params.id)
    const id = props.match.params.id
    const req = props.reqs.find(c => c.id == id)
    console.log(req)
    
    return (
        <Container maxWidth="sm" className="car-container">
           { props.reqs.map((req, idx) => (
            <Paper className="car-paper">
                <h2>{id}</h2>
            
                <ul >  
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Bug Type:</span> {Object.keys(req.id)}</li>
                
                </ul> 
            
            </Paper>
            ))}
        </Container>
    )
}

export default Req

// Object.keys(req).map((key, idx) => {
//   return <Chip label={`${key}: ${req[key]}`}></Chip>
// })


// props.reqs.map((req, idx) => (
// <Container className="text-gray1">

//   <Grid container alignItems="flex-start" justify="space-evenly" direction="row" >
    
//     <h2 className= "ticTitle">BUG ID:  </h2>
//     <Avatar className = "av" aria-label="recipe"  style={{color: 'mediumblue'}}>
//     {req["id"]}
//     </Avatar>
//   </Grid>
//       <ul >  
//       <li className = "unlist"><span style={{fontWeight: "Bold"}}>Bug Type:</span> {req["Bug"]}</li>
//       <li className = "unlist"><span style={{fontWeight: "Bold"}}>First Name:</span> {req["first_name"]}</li>
//       <li className = "unlist"><span style={{fontWeight: "Bold"}}>Last Name:</span> {req["last_name"]}</li>
//       <li className = "unlist"><span style={{fontWeight: "Bold"}}>Email:</span> {req["email"]}</li>
//       <li className = "unlist"><span style={{fontWeight: "Bold"}}>Level: </span>{req["lvl"]}</li>
//     </ul>  
// </Container>)
// )

{/* <Container maxWidth="sm" className="car-container">
{ props.reqs.map((req, idx) => (
 <Paper className="car-paper">
     <h2>{id}</h2>
 
     <ul >  
     <li className = "unlist"><span style={{fontWeight: "Bold"}}>Bug Type:</span> {req["Bug"]}</li>
     <li className = "unlist"><span style={{fontWeight: "Bold"}}>First Name:</span> {req["first_name"]}</li>
     <li className = "unlist"><span style={{fontWeight: "Bold"}}>Last Name:</span> {req["last_name"]}</li>
     <li className = "unlist"><span style={{fontWeight: "Bold"}}>Email:</span> {req["email"]}</li>
     <li className = "unlist"><span style={{fontWeight: "Bold"}}>Level: </span>{req["lvl"]}</li>
     </ul> 
 
 </Paper>
 ))}
</Container> */}