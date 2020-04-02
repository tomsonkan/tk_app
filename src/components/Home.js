import React, { useEffect } from 'react'
import {
      Container,
      Card,
      CardContent,
      CardActions,
      Divider,
      TableCell,
      Grid,
      Avatar
    } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
// import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom';
import AddReq from '../containers/AddReq'
// import RemoveReq from './RemoveReq';
import Like from '../containers/Like'



const Home = (props) => {


  function myFunction() {
    var d = new Date();
    var n = d.valueOf();
    return n;
    
  }

  function refreshPage() {
    window.location.reload(false);
  }

  function highCount() {

  }

  // useEffect(() => {
  //   props.fetchReqs();
  // }, [])

console.log(props.reqs)
console.log(props.reqs.length)


  return (
    <>
    <Container maxWidth="lg" className="car-container" style={{marginTop:"50px", marginBottom:"70px"}}>
      <h2>Add New Ticket</h2>
      <br/>
      <div className = "flex-container">
        <Grid container justify="left" spacing={3}>
          <AddReq busTotal={props.reqs.length}/>
          <br/>
          {/* <AddReq1 busTotal={props.reqs.length}/> */}
        </Grid>
      </div>
    </Container>
    <div className="card-container1">
    <Container><h2>High Priority Tickets: {props.reqs.filter(item => item.lvl === 'High').length}</h2></Container> 
      {props.reqs.length === 0 ? props.fetchReqs() :  
          props.reqs.map((req, idx) => (
            <Card key={req.id} className="card">
            {req["lvl"] == "High" ? 
              <>
              <CardContent className="text-gray1">
                <Grid container alignItems="flex-start" justify="space-evenly" direction="row">
                  <h2>High:         
                  </h2>
                  <Avatar className = "av1" aria-label="recipe"  style={{color: 'mediumblue'}}>
                  {req["id"]}
                  </Avatar>
                </Grid>
                <ul>  
                  <li>Id: {req["id"]}</li>
                  <li>First Name: {req["first_name"]}</li>
                  <li>Last Name: {req["last_name"]}</li>
                  <li>Email: {req["email"]}</li>
                  <li>Level: {req["lvl"]}</li>
                </ul>  
                <Like />
              </CardContent>
              <Divider />
              <CardActions style={{ color: 'mediumblue' }} className="del">
                  <Link to={`/req/${req.id}`}>See More Details</Link>
                  {/* <RemoveReq /> */}
                  <TableCell>
                    <DeleteIcon  onClick = {() => {props.removeTic(req); refreshPage() }}
                      className="icon text-red" />
                  </TableCell>  
              </CardActions>
              </>
            : null
            }
        </Card> 
        )
      )
    }
    </div> 
    
    <div className="card-container2" style={{marginTop:"120px"}}>
      <Container><h2>Medium Priority Tickets: {props.reqs.filter(item => item.lvl === 'Medium').length}</h2></Container>
      {props.reqs.length === 0 ? props.fetchReqs() :props.reqs.map((req, idx) => (
        <Card key={idx} className="card1">
          {req["lvl"] == "Medium" ? 
            <>
            <CardContent className="text-gray2" >
              <Grid container alignItems="flex-start" justify="space-evenly" direction="row">
                <h3>MEDIUM:         
                </h3>
                <Avatar className = "av2" aria-label="recipe"  style={{color: 'mediumblue'}}>
                {req["id"]}
                </Avatar>
              </Grid>
              <ul>  
                <li>Id: {req["id"]}</li>
                <li>First Name: {req["first_name"]}</li>
                <li>Last Name: {req["last_name"]}</li>
                <li>Email: {req["email"]}</li>
                <li>Level: {req["lvl"]}</li>
              </ul>  
            </CardContent>
            <Divider />
              <CardActions style={{ color: 'mediumblue' }} className="del">
                  <Link to={`/req/${req.id}`}>See More Details</Link>
                  {/* <RemoveReq /> */}
                  <TableCell>
                  <DeleteIcon onClick = {() => {props.removeTic(req); refreshPage() }}
                      className="icon text-red" />
                  </TableCell>  
              </CardActions>
            </>
            : null
            }
        </Card> 
      ))}
    </div>  

    <div className="card-container3" style={{marginTop:"120px"}}>
      <Container><h2>Low Priority Tickets: {props.reqs.filter(item => item.lvl === 'Low').length}</h2></Container>
      {props.reqs.length === 0 ? props.fetchReqs() :props.reqs.map((req, idx) => (
        <Card key={idx} className="card1">
          {req["lvl"] == "Low" ? 
            <>
            <CardContent className="text-gray3" >
              <Grid container alignItems="flex-start" justify="space-evenly" direction="row">
                <h3>LOW:         
                </h3>
                <Avatar className = "av2" aria-label="recipe"  style={{color: 'mediumblue'}}>
                {req["id"]}
                </Avatar>
              </Grid>
              <ul>  
                <li>Id: {req["id"]}</li>
                <li>First Name: {req["first_name"]}</li>
                <li>Last Name: {req["last_name"]}</li>
                <li>Email: {req["email"]}</li>
                <li>Level: {req["lvl"]}</li>
              </ul>  
            </CardContent>
            <Divider />
              <CardActions style={{ color: 'mediumgreen' }} className="del">
                  <Link to={`/req/${req.id}`}>See More Details</Link>
                  {/* <RemoveReq /> */}
                  <TableCell>
                  <DeleteIcon onClick = {() => {props.removeTic(req); refreshPage() }}
                      className="icon text-red" />
                  </TableCell>  
              </CardActions>
            </>
            : null
            }
        </Card> 
      ))}
    </div>  
  </>
  )
}

export default Home