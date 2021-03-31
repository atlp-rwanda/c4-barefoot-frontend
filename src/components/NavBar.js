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
        color: 'inherit',
        float: 'right',
        marginRight: '1000px'
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

                    <div className="navlinks">
                        <Toolbar className={classes.navDisplay}>
                            <h2>{barefootLogo}</h2>
                            <nav>
                                <Button><MultipleLanguages/></Button>
                                <Button href="/login" color='inherit' startIcon={<PersonOutlined />}>{t("Login")}</Button>
                                <Button href="/signup" color='inherit' startIcon={<PersonAddOutlined />}>{t("Signup")}</Button>
                            </nav>
                        </Toolbar>
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
