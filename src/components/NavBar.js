import React from 'react'
import { AppBar, Toolbar, Button, makeStyles, List, Container, Hidden, Typography, Link } from '@material-ui/core'
import { PersonAddOutlined, PersonOutlined } from '@material-ui/icons'
import SideDrawer from './SideDrawer'

const navLinks = [
    { title: 'Login', path: '/login' },
    { title: 'Signup', path: '/signup' }
]

const useStyles = makeStyles(theme => ({
    navDisplay: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        textDecorationLine: 'none',
        color: 'inherit'
    }
}))

function Header() {
    const classes = useStyles()

    const barefootLogo = <Typography href='/welcome' variant='h6' component='a' className={classes.logo}> Barefoot Nomad </Typography>

    const displayDesktop = () => {
        return (
            <div>
                <div className="navbar">
                    <div className="logo">
                        <h2>Barefoot Nomad</h2>
                    </div>
                    <div className="navlinks">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li> <Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <AppBar position='static'>{displayDesktop()}</AppBar>
        </React.Fragment>
    )

}
export default Header;