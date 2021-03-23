import React from 'react'
 
import {Paper, Grid, Avatar, Divider, TextField,Button, makeStyles} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { retrieveComments, submitComment } from '../../redux/actions/CommentActon';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles= makeStyles( (theme)=>({
  comment:{
    marginTop: '5px',
    color:'#707070'
  },
  
  commentCard:{
    width: '100%',
    margin: '0 auto',
    borderRadius:'8px',
    backgroundColor:'white',
    marginTop: '10px',
    padding: '30px',
    boxShadow: '2px 4px 8px 0px rgba(153, 153, 153, 0.5)'
  },
  saveComment:{
    width: '10rem'
  },
  avatar:{
    // -webkit-background-size: 32px 32px;
    backgroundSize: '32px 32px',
    webkitBorderRadius:'50%',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'block',
    margin: '0',
    overflow: 'hidden',
    position: 'relative',
    height: '42px',
    width: '42px',
   
  },
  commentEditor:{
    display: 'flex',
    justifyContent: 'center',
    width: '95%',
    wordBreak: 'break-all',
    minHeight: '10rem'
  },


}))


 export const Comments = ({travelId=""})=>{
  const classes= useStyles();
  const dispatch  = useDispatch()
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    dispatch(retrieveComments(travelId))
  }, [])

  return(
<div style={{ padding: 14 }} className={classes.comment.commentCard}>

<TextField
          className={classes.commentEditor}
          id="outlined-multiline-static"
          multiline
          rows={4}
          columns={12}
          defaultValue="Add your comment here"
          variant="outlined"
          value={newComment}
          onChange={(event)=>setNewComment(event.target.value)}
        />
 <Button variant="contained" onClick={()=>dispatch(submitComment(travelId, {comment:newComment}))} className={classes.saveComment} color="primary" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '10px' }}>
  Send
</Button>
<h1>COMMENTS</h1>
<Paper style={{ padding: "40px 20px" }}>
  <Grid container wrap="nowrap" spacing={2}>
    <Grid item>
      <Avatar alt="Gatera" src={'imgLink'} />
    </Grid>
    <Grid justifyContent="left" item xs zeroMinWidth>
      <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
      <p style={{ textAlign: "left" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
        Suspendisse congue vulputate lobortis. Pellentesque at interdum
        tortor. Quisque arcu quam, malesuada vel mauris et, posuere
        sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
        metus, efficitur lobortis nisi quis, molestie porttitor metus.
        Pellentesque et neque risus. Aliquam vulputate, mauris vitae
        tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
        lectus vitae ex.{" "}
      </p>
      <p style={{ textAlign: "left", color: "gray" }}>
        posted 1 minute ago
      </p>
    </Grid>
  </Grid>
  <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
  <Grid container wrap="nowrap" spacing={2}>
    <Grid item>
    </Grid>
   
  </Grid>
</Paper>
</div>
  )
}

