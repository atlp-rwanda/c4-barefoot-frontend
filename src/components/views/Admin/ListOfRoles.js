import React, {useEffect} from 'react'
import {makeStyles, Slide,Snackbar,Grid, CssBaseline,Typography,Divider} from '@material-ui/core'
import { connect } from 'react-redux'
import { getRoles, clearSnackBar } from '../../../redux/actions/fetchRolesAction'
import RolesCard from '../../rolesCard'
import Loader from '../../Loader'
import { Alert } from '@material-ui/lab';
import { changePermission, updatePermission, clearPermissionSnackbar } from '../../../redux/actions/PermissionsAction'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
 root: {
   height: '90vh'
 },
 separate:{
  marginTop:theme.spacing(3)
},
center:{
  [theme.breakpoints.up("xs")]:{
    marginLeft:theme.spacing(3)
  },
  [theme.breakpoints.up("sm")]:{
    marginLeft:theme.spacing(35)
  }
  
}
}))

const skeletonData = (<Grid item sm={8} xs={10}><RolesCard/></Grid>)

function ListOfRoles(props){
  const { t, i18n } = useTranslation();

  useEffect(() => {
    props.getRoles()
  }, [])

  const classes = useStyles()

  const load = props.savedRoles.load

  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  }

  const closeRoleSnackBarTimer = () => {
    props.clearSnackBar()
  }
  return(
    <>
      <Grid 
      container 
      component='main' 
      justify='center'
      spacing={4}
      className={classes.separate}
      >
        
        <CssBaseline/>
        
        <Loader open={load}/>

        {/* This snackbar is for the roles column */}
        <Snackbar
        open={props.savedRoles.snackBarMessage.open}
        onClose={closeRoleSnackBarTimer}
        autoHideDuration={4000}
        TransitionComponent={TransitionUp}>
          <Alert
          severity={props.savedRoles.snackBarMessage.severity}
          variant='filled'
          elevation={6}>
            {props.savedRoles.snackBarMessage.message}
          </Alert>
        </Snackbar>
        <Grid item sm={5} xs={10}>
          <div>
          <Typography variant='h5' align='center'>{t("List of roles")}</Typography>
          <Divider/>
          </div>
        </Grid>
        <Grid item sm={8} xs={12} className={classes.center}>
          {props.savedRoles.pending ? skeletonData : props.savedRoles.roles.rows.map((role, index) => (
              <Grid item sm={8} xs={12} key={role.id}>
              <RolesCard roleId={role.id} roleTitle={role.name} idx={index} pop={props}/>
            </Grid>
          ))}
        </Grid>

        {/* </div> */}
           
      </Grid>
    </>
  )
}

const mapStateToProps = state =>({
  savedRoles: state.roles,
  permissions: state.permissions
})

export default  connect(mapStateToProps, {getRoles, clearSnackBar, changePermission, updatePermission, clearPermissionSnackbar})(ListOfRoles);