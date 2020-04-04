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
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
// import { makeStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
// import createTypography from '@material-ui/styles/typography'
import {Link} from 'react-router-dom';
import AddReq from '../containers/AddReq'
// import RemoveReq from './RemoveReq';
import Like from '../containers/Like'
;



const Home = (props) => {


  // function myFunction() {
  //   var d = new Date();
  //   var n = d.valueOf();
  //   return n;
    
  // }

  const theme = createMuiTheme({
    palette: {
        primary: { main: '#228e22' },
        secondary: { main: '#4d4d4d' },
    },
    typography: {
        useNextVariants: true,
        fontFamily: '"Montserrat", Arial, Helvetica, sans-serif',
    },
})

  function refreshPage() {
    window.location.reload(false);
  }

  function highCount() {

  }

  const TextStyle = {
    fontWeight: 'bold'
}

console.log(props.reqs)
console.log(props.reqs.length)


  return (
    <>
    {document.cookie == "loggedIn=true" ? ( 
    <>
   
    <Container maxWidth="lg" className="car-container" style={{height: "60px", width: "500px", marginTop:"50px", marginBottom:"70px", justifyContent:"center"}}>
      <br/>
      <div className = "flex-container">
        <Grid container justify="center" spacing={3}>
          <h2 >Welcome! Lets Add Some Tickets</h2>
          <AddReq style={{alignContent:"flex-start"}} busTotal={props.reqs.length}/>
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
              <CardContent className="text-gray1" theme = {theme}>
                <Grid container alignItems="flex-start" justify="space-evenly" direction="row">
                  <h2>BUG ID:         
                  </h2>
                  <Avatar className = "av1" aria-label="recipe"  style={{color: 'mediumblue'}}>
                  {req["id"]}
                  </Avatar>
                </Grid>
                
                <ul >  
                  <li className = "unlist"><span style={{fontWeight: "Bold"}}>Bug Type:</span> {req["Bug"]}</li>
                  <li className = "unlist"><span style={{fontWeight: "Bold"}}>First Name:</span> {req["first_name"]}</li>
                  <li className = "unlist"><span style={{fontWeight: "Bold"}}>Last Name:</span> {req["last_name"]}</li>
                  <li className = "unlist"><span style={{fontWeight: "Bold"}}>Email:</span> {req["email"]}</li>
                  <li className = "unlist"><span style={{fontWeight: "Bold"}}>Level: </span>{req["lvl"]}</li>
                </ul>  
                <Like req = {req} refresh= {() => {refreshPage()} }/>
              </CardContent>
              <Divider />
              <CardActions style={{ color: 'mediumblue' }} className="del">
                  <Link to={`/req/${req.id}`}>See More Details</Link>
                  {/* <RemoveReq /> */}
                  <TableCell>
                    <DeleteOutlinedIcon  onClick = {() => {props.removeTic(req); refreshPage() }}
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
                <h3>BUG ID:         
                </h3>
                <Avatar className = "av2" aria-label="recipe"  style={{color: 'mediumblue'}}>
                {req["id"]}
                </Avatar>
              </Grid>
              <ul>  
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Bug Type:</span> {req["Bug"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>First Name:</span> {req["first_name"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Last Name:</span> {req["last_name"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Email:</span> {req["email"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Level: </span>{req["lvl"]}</li>
              </ul> 
              <Like req = {req} refresh= {() => {refreshPage()} }/> 
            </CardContent>
            <Divider />
              <CardActions style={{ color: 'mediumblue' }} className="del">
                  <Link to={`/req/${req.id}`}>See More Details</Link>
                  {/* <RemoveReq /> */}
                  <TableCell>
                  <DeleteOutlinedIcon onClick = {() => {props.removeTic(req); refreshPage() }}
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
                <h3>BUG ID:         
                </h3>
                <Avatar className = "av2" aria-label="recipe"  style={{color: 'mediumblue'}}>
                {req["id"]}
                </Avatar>
              </Grid>
              <ul>  
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Bug Type:</span> {req["Bug"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>First Name:</span> {req["first_name"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Last Name:</span> {req["last_name"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Email:</span> {req["email"]}</li>
                <li className = "unlist"><span style={{fontWeight: "Bold"}}>Level: </span>{req["lvl"]}</li>
              </ul>  
              <Like req = {req} refresh= {() => {refreshPage()} }/>
            </CardContent>
            <Divider />
              <CardActions style={{ color: 'mediumgreen' }} className="del">
                  <Link to={`/req/${req.id}`}>See More Details</Link>
                  {/* <RemoveReq /> */}
                  <TableCell>
                  <DeleteOutlinedIcon onClick = {() => {props.removeTic(req); refreshPage() }}
                      className="icon text-red" />
                  </TableCell>  
              </CardActions>
            </>
            : null
            }
        </Card> 
      ))}
    </div>  
  </>)
  : null}
  </>
  )
}

export default Home