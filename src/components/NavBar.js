import React from 'react'
import { AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core'
import {PersonAddOutlined, PersonOutlined} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
  }))

function Header (){
    const classes = useStyles()
    const barefootLogo = <Typography href='/' variant='h6'component='h1'>
                Barefoot Nomad
            </Typography>

    const displayDesktop = () => {
    return (
        <Toolbar className='toolbar'>
            {barefootLogo}
            <nav>
                <Button className="menuButton" href="/login" color='inherit' startIcon={ <PersonOutlined/> }>Login</Button>
                <Button  className="menuButton" href="/signup" color='inherit' startIcon = { <PersonAddOutlined/> }>Signup</Button>
            </nav>
        </Toolbar>
        )
    }

     return(
         <React.Fragment>
            <AppBar>{displayDesktop()}</AppBar>
            <div className={classes.offset} />
         </React.Fragment>
     )
 
}
export default Header;