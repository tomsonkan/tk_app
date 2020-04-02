import React from 'react'
import { AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'



const Navigation = (props) => {

  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <IconButton color="inherit">
        <Typography vairant="h3" style={{ flexGrow:"2"}}>
          JIRA KnockOff
        </Typography>

        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation