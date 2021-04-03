import React, {useEffect} from 'react'
import {Typography, makeStyles, Slide, Box, Snackbar, Divider, Grid, CssBaseline, Checkbox, FormControlLabel,FormControl,FormGroup, Button,Select, InputLabel, MenuItem} from '@material-ui/core'
import { connect } from 'react-redux'
import { getRoles, clearSnackBar } from '../../../redux/actions/fetchRolesAction'
import RolesCard from '../../rolesCard'
import Loader from '../../Loader'
import MuiAlert from '@material-ui/lab/Alert';
import { changePermission, updatePermission, clearPermissionSnackbar,getPermissions} from '../../../redux/actions/PermissionsAction'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
 root: {
   height: '420vh'
 },
 content:{
   marginBottom:theme.spacing(3)
 },
 formControl:{
  marginTop:theme.spacing(2),
  marginBottom:theme.spacing(3),
  minWidth:357
},
formButtons: {
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  justifyContent: 'space-evenly'
},
container:{
  margin:'inherit',
  width:'80%'
},
separate:{
  marginTop:theme.spacing(3)
},
separetor:{
  marginBottom:theme.spacing(4)
}
}))

const skeletonData = (<Grid item sm={8} xs={10}><RolesCard/></Grid>)

function SetPermissions(props){
  const { t, i18n } = useTranslation();

  useEffect(() => {
    props.getRoles()
  }, [])

 const perm=props.permissions?(props.permissions):({
    "edit profile": 0,"assign requesters to manager": 0,"create travel requests": 0,"view travel requests": 0,"edit travel requests": 0,"cancel travel requests": 0,"approve direct reports travel requests": 0,"view direct reports travel requests": 0,"reject direct reports travel requests": 0,"view accommodations": 0,"create accommodations": 0,"update accommodations": 0,"delete accommodations": 0,"book accommodations": 0,"view locations": 0,"create locations": 0,"update locations": 0,"delete locations": 0,"view statistics": 0
})
  //const [perms,setValues]=React.useState(perms);
  const [value,setValue]=React.useState();
  const [checked,setChecked]=React.useState(false);
  const classes = useStyles()

  const load = props.status

  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  }

  const closePermissionsSnackBarTimer = () => {
    props.clearPermissionSnackbar()
  }

  const handleCheckBox = (e) => {
    let allowed = e.target.checked ? 1 : 0
    props.changePermission(e.target.name, allowed)
  }

  const populateChecbox=()=>{
      let labels=[];
      let label;
      let count=0;
      for(const property in perm){
        label=<FormControlLabel
              key={property}
              control={<Checkbox checked={perm[property]==1?true:false} color={'primary'} name={property} id={count}  onChange={handleCheckBox} />}
              label={property}
        />
        count++;
        labels.push(label);
      }
      return labels;
    }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.updatePermission(props.permissions, props.selectedRole)
   
  }
  const hanldeSelectOnchange=(e)=>{
      console.log(e.target.value)
      const name=e.target.value;
      const values=name.split(",");
      console.log(values)
      const id=values[0];
      setValue(id)
      const role=values[1];
       console.log(id)
      console.log(role)
      props.getPermissions(id,role);
  }
  const handleCancel=()=>{
    props.getPermissions(value, props.selectedRole);
  }
   const populateSelect= props.savedRoles.pending?(<MenuItem value={''}>Empty</MenuItem>):(props.savedRoles.roles.rows.map((role,index)=>{
     return <MenuItem  key={role.name} name={role.name} value={role.id+","+role.name}>{role.name}</MenuItem>
  }))
  
  return(
   // <>
        <Grid container  justify='center' spacing={3} className={classes.separator,classes.container}>
          <CssBaseline/>
          <Grid item md={6} sm={12} xs={12}>
            <Loader open={load}/>
            
            <Snackbar
            open={props.snackBarMessage.open}
            onClose={closePermissionsSnackBarTimer}
            autoHideDuration={4000}
            TransitionComponent={TransitionUp}
            >
              <MuiAlert
              severity={props.snackBarMessage.severity}
              variant='filled'
              elevation={6}
              >{props.snackBarMessage.message}</MuiAlert>
            </Snackbar>
          <Box>
            <Typography variant='subtitle1' justify= 'center'  >{t("Allow users to perform their operations")}</Typography>
            <Divider/>
          </Box>
          <Grid container  sm={6} xs={4} className={classes.container}>

            <form onSubmit={handleSubmit} >
              <FormControl className={classes.formControl}>
                <InputLabel>{t("Select the role")}</InputLabel>
                <Select 
                  labelId='select-roles'
                  id='roles'
                  value={value}
                  onChange={hanldeSelectOnchange}
                >
                  {populateSelect}
                </Select>
              </FormControl>
              <Box>
                <Typography className={classes.content} variant='body2' >{t("Assign all required permissions to the role:")}</Typography>
              </Box>
              <FormGroup>
                {populateChecbox()}
              </FormGroup>
                <Box className={classes.formButtons} >
                <Button variant='contained' size='small' color='primary' type="submit" disabled={load} >{t("set")}</Button>
                <Button variant='contained' size='small' color='secondary' onClick={handleCancel} >{t("Cancel")}</Button>
              </Box>
            </form>

          </Grid>
          </Grid>
        </Grid>
   // </>
  )
}

const mapStateToProps = state =>({
  savedRoles: state.roles,
  permissions: state.permissions.permissions,
  selectedRole:state.permissions.selectedRole,
  status:state.permissions.pending,
  snackBarMessage:state.permissions.snackBarMessage
})

export default  connect(mapStateToProps,{getRoles, clearSnackBar, changePermission, updatePermission, clearPermissionSnackbar,getPermissions})(SetPermissions);