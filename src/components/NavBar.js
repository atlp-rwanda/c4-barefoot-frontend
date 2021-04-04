import React from 'react'
import { AppBar, Toolbar, Button, makeStyles, List, Container, Hidden, Typography, Link,Grid } from '@material-ui/core'
import { PersonAddOutlined, PersonOutlined } from '@material-ui/icons'
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
    },
    link:{
        '&:hover':{
            cursor:'pointer',
            textDecoration:"none"
        }
    },
    title: {
        flexGrow: 1,
      }
}))

function Header() {
    const classes = useStyles()
    const { t, i18n } = useTranslation();

    const displayDesktop = () => {
        return (
            <Toolbar className={classes.navDisplay}>
                <Typography variant="h6" className={classes.title}>
                    <Link className={classes.link} href="/" color="inherit">
                        Barefoot Nomad
                    </Link>
                </Typography>
                <nav>
                    <Button><MultipleLanguages/></Button>
                    <Button href="/login" color='inherit' startIcon={<PersonOutlined />}>{t("Login")}</Button>
                    <Button href="/signup" color='inherit' startIcon={<PersonAddOutlined />}>{t("Signup")}</Button>
                </nav>
            </Toolbar>
        )
    }

    return (
        <React.Fragment>
            <AppBar position='static'>{displayDesktop()}</AppBar>
        </React.Fragment>
    )

}
export default Header;
