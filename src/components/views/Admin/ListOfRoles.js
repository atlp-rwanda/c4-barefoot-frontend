import React, {useEffect} from 'react'
import {makeStyles, Slide,Snackbar,Grid, CssBaseline} from '@material-ui/core'
import { connect } from 'react-redux'
import { getRoles, clearSnackBar } from '../../../redux/actions/fetchRolesAction'
import RolesCard from '../../rolesCard'
import Loader from '../../Loader'
import { Alert } from '@material-ui/lab';
import { changePermission, updatePermission, clearPermissionSnackbar } from '../../../redux/actions/PermissionsAction'

const useStyles = makeStyles((theme) => ({
 root: {
   height: '90vh'
 },
 separate:{
  marginTop:theme.spacing(3)
}
}))

const skeletonData = (<Grid item sm={8} xs={10}><RolesCard/></Grid>)

function ListOfRoles(props){

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
            {props.savedRoles.pending ? skeletonData : props.savedRoles.roles.rows.map((role, index) => (
               <Grid item sm={8} xs={10} key={role.id}>
               <RolesCard roleId={role.id} roleTitle={role.name} idx={index} pop={props}/>
             </Grid>
            ))}
           
      </Grid>
    </>
  )
}

const mapStateToProps = state =>({
  savedRoles: state.roles,
  permissions: state.permissions
})

export default  connect(mapStateToProps, {getRoles, clearSnackBar, changePermission, updatePermission, clearPermissionSnackbar})(ListOfRoles);