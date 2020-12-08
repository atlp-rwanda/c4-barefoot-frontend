import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {PersonAddOutlined, PersonOutlined} from '@material-ui/icons'
class Header extends Component {

    barefootLogo = <Typography href='/' variant='h6'component='h1'>
                Barefoot Nomad
            </Typography>


    displayDesktop = () => {
    return (
        <Toolbar className='toolbar'>
            {this.barefootLogo}
            <nav>
                <Button className="menuButton" href="/login" color='inherit' startIcon={ <PersonOutlined/> }>Login</Button>
                <Button  className="menuButton" href="/signup" color='inherit' startIcon = { <PersonAddOutlined/> }>Signup</Button>
            </nav>
        </Toolbar>
        )
    }
 render(){
     return(
         <header>
            <AppBar>{this.displayDesktop()}</AppBar>
         </header>
     )
 }
}
export default Header;