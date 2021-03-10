import React from "react";
import { Card, CardContent, Typography, CardActions, IconButton, makeStyles, CardActionArea } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import {connect} from 'react-redux'
import { Skeleton } from '@material-ui/lab'
import { deleteRoleAction } from '../redux/actions/fetchRolesAction'
import { getPermissions } from '../redux/actions/fetchPermissions'
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ABD5ED',
    borderRadius: 0,                                                             
    
  }
}))

function RolesCard(props) {
  const handleDelete = () => {
    props.deleteRoleAction(props.idx, props.roleTitle)
  }
  
  const handlePermissions = () => {
    props.getPermissions(props.roleTitle)
  }

  const classes = useStyles()
  return (
      <div className={classes.root}>

        <Card className={classes.card} onClick={handlePermissions}>
          <CardActionArea >
            <CardContent>
              <Typography  variant='h6' component='h2'>{props.pending ? (<Skeleton variant='text'/>) : props.roleTitle}
              </Typography>
            </CardContent>

          </CardActionArea>
          <CardActions>
            <IconButton onClick={handleDelete}>
              <Delete color='secondary'/>
            </IconButton>
          </CardActions>
        </Card>
        </div>
  );
}

const mapStateToProps = state => ({
  pending: state.roles.pending
})

export default connect(mapStateToProps, {deleteRoleAction, getPermissions})(RolesCard)