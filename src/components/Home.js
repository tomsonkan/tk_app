import React, { useEffect } from 'react'
import {
      Container,
      Card,
      CardContent,
      CardActions,
      Divider,
      TableCell,
      Grid,
      Avatar,
      BottomNavigation,
      BottomNavigationAction,
      AppBar
      
    } from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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

//   const theme = createMuiTheme({
//     palette: {
//         primary: { main: '#228e22' },
//         secondary: { main: '#4d4d4d' },
//     },
//     typography: {
//         useNextVariants: true,
//         fontFamily: '"Montserrat", Arial, Helvetica, sans-serif',
//     },
// })

  function refreshPage() {
    window.location.reload(false);
  }

  const styles = {
    paperContainer: {
        backgroundImage: `url(${"https://img.wallpapersafari.com/desktop/1600/900/6/39/01gilJ.png"})`
    }
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
    <div className="wrapper">
      <div className="slide">
    <Container maxWidth="lg" className="car-container" style={{height: "60px", width: "500px", marginTop:"50px", paddingBottom: "200px", justifyContent:"center"}}>
      <br/>
      <div className = "flex-container">
        <Grid container justify="center" spacing={1} style={{marginTop:"40px"}}>
          <h2 className= "ticTitle">Welcome! Lets Add Some Tickets</h2>
          <AddReq style={{alignContent:"flex-start"}} busTotal={props.reqs.length}/>
          <br/>
          {/* <AddReq1 busTotal={props.reqs.length}/> */}
        </Grid>
      </div>
    </Container>
    <div className="card-container1" style={{ marginBottom: "50px"}}>
    <Container><h2 className= "ticTitle">High Priority Tickets: <span style={{fontSize: '30px', fontWeight: "Bold"}}>{props.reqs.filter(item => item.lvl === 'High').length}</span></h2></Container> 
      {props.reqs.length === 0 ? props.fetchReqs() :  
          props.reqs.map((req, idx) => (
            <Card key={req.id} className="card">
            {req["lvl"] == "High" ? 
              <>
              <CardContent className="text-gray1">
                <Grid container alignItems="flex-start" justify="space-evenly" direction="row" >
                  <h2 className= "ticTitle">BUG ID:  </h2>
                  <Avatar className = "av" aria-label="recipe"  style={{color: 'mediumblue'}}>
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
    
    <div className="card-container2" style={{marginTop:"20px", marginBottom: "40px"}}>
      <Container><h2 className= "ticTitle">Medium Priority Tickets: <span style={{fontSize: '30px', fontWeight: "Bold"}}>{props.reqs.filter(item => item.lvl === 'Medium').length}</span></h2></Container>
      {props.reqs.length === 0 ? props.fetchReqs() :props.reqs.map((req, idx) => (
        <Card key={idx} className="card1">
          {req["lvl"] == "Medium" ? 
            <>
            <CardContent className="text-gray2" >
              <Grid container alignItems="flex-start" justify="space-evenly" direction="row">
                <h2 className= "ticTitle">BUG ID:</h2>
                <Avatar className = "av" aria-label="recipe"  style={{color: 'mediumblue'}}>
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

    <div className="card-container3" style={{marginTop:"20px", marginBottom: "100px"}}>
      <Container><h2 className= "ticTitle">Low Priority Tickets: <span style={{fontSize: '30px', fontWeight: "Bold", paddingBottom: "100px"}}>{props.reqs.filter(item => item.lvl === 'Low').length}</span></h2></Container>
      {props.reqs.length === 0 ? props.fetchReqs() :props.reqs.map((req, idx) => (
        <Card key={idx} className="card1">
          {req["lvl"] == "Low" ? 
            <>
            <CardContent className="text-gray3" >
              <Grid container alignItems="flex-start" justify="space-evenly" direction="row">
                <h2 className= "ticTitle">BUG ID: </h2>
                <Avatar className = "av" aria-label="recipe"  style={{color: 'mediumblue'}}>
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
      <div className="foot">
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        <h4 className= "ticTitle">SmallBizBugTracker ©2020</h4>
       </div>
    </div>
    </div>
  </>
  )
  : null}
  </>
  )
}

export default Home