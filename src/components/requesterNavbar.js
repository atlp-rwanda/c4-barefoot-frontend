import React from 'react'
import { AppBar, Toolbar, Button, makeStyles, List, Box, Typography} from '@material-ui/core'
import RequesterDrawer from './requesterDrawer'
import MultipleLanguages from './MultiLang/MultiLang'
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(theme => ({
    navDisplay: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        textDecorationLine: 'none',
        color: 'inherit'
    },
    innerBox: {
        display: 'flex',
        alignItems: 'center'
    }
  }))

function Header (){
    const {t, i18n} = useTranslation();
    const classes = useStyles()

    const barefootLogo = <Typography href='/welcome' variant='h6'component='a' className={classes.logo}> Barefoot Nomad </Typography>

    const displayDesktop = () => {
    return (
        <Toolbar>
            <Box  className={classes.navDisplay}>
                <Box className={classes.innerBox}>
                    <RequesterDrawer/>
                    {barefootLogo}
                </Box>
              
                    <List component='nav'>
                        <Button><MultipleLanguages/></Button>
                        <Button href="/login" color='inherit'>{t("Logout")}</Button>
                    </List>
            </Box>
        </Toolbar>
        )
    }

     return(
         <React.Fragment>
            <AppBar
                position="fixed">
                {displayDesktop()}
            </AppBar>
         </React.Fragment>
     )
}
export default Header;
