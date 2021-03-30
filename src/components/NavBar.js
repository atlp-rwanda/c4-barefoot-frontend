import React from 'react'
import { AppBar, Toolbar, Button, makeStyles, List, Container, Hidden, Typography, Link } from '@material-ui/core'
import { PersonAddOutlined, PersonOutlined } from '@material-ui/icons'
import SideDrawer from './SideDrawer'
import MultipleLanguages from './MultiLang/MultiLang'
import { useTranslation } from 'react-i18next';


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
    const { t, i18n } = useTranslation();

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
                            <li> <Link to="/login"><MultipleLanguages/></Link></li>
                            <li><Link to="/login">{t("Login")}</Link></li>
                            <li><Link to="/signup">{t("Signup")}</Link></li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <React.Fragment>
            <AppBar position='static'>{displayDesktop()}</AppBar>
        </React.Fragment>
    )

}
export default Header;
