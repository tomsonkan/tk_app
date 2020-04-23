import React from 'react'
import { Container, Paper, Chip,
  Card,
  CardContent,
  CardActions,
  BottomNavigationAction,
  TableCell,
  Box,
  Grid,
  Avatar,
} 
from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Req = (props) => {
    // const id = props.reqs.id
    // {/* Change cars to props.cars and remove the cars.json import above */}
    // const req = props.reqs.find(c => c.id == id)
    console.log(props.match.params.id)
    console.log(props.match.params.firstName)
    const id = props.match.params.id
    const firstName = props.match.params.first_name
    const req = props.reqs.find(c => c.id == id)
    console.log(req)

    
    return (
        props.reqs.map((req, idx) => (
        <div className = "Reqr"  >
        <Container className="Reqr"  >
         {req["id"] == id ? 
         <>
            <Card  container alignItems="flex" justify="space-evenly" direction="row" style={{marginTop: '10em', marginLeft:'20em', marginRight:'20em'}} >
                <CardContent className="Req">
                    <h2 className= "reqTitle">BUG ID: {req["id"]} </h2>
                
                    <ul >  
                    <li className = "unlist"><span style={{fontWeight: "Bold"}}>Bug Type:</span> {req["Bug"]}</li>
                    <li className = "unlist"><span style={{fontWeight: "Bold"}}>First Name:</span> {req["first_name"]}</li>
                    <li className = "unlist"><span style={{fontWeight: "Bold"}}>Last Name:</span> {req["last_name"]}</li>
                    <li className = "unlist"><span style={{fontWeight: "Bold"}}>Email:</span> {req["email"]}</li>
                    <li className = "unlist"><span style={{fontWeight: "Bold"}}>Level: </span>{req["lvl"]}</li>
                    </ul> 
                    <h3 style={{marginLeft: "1em"}}>DESCRIPTION: </h3> 
                    <p style={{marginLeft: "1em"}}>{req["Descr"]} </p>
                </CardContent>
            </Card>
            </>
             : null}
      </Container>
      </div>
        )
     )
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