import React from 'react'
import {Box, makeStyles, Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    height: '90vh',
    color: "#fff",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

function PageNotFound (){
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return(
    <React.Fragment>
      <Box className={classes.box}>
        <Typography variant='h1' >404</Typography>
        <Typography variant='h4' >{t("Page Not Found :(")}</Typography>
      </Box>
    </React.Fragment>
  )
}

export default PageNotFound