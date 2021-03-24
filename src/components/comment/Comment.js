import React from 'react'
 
import {Paper, Grid, Avatar, Divider, TextField,Button, makeStyles, Typography} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { retrieveComments, submitComment } from '../../redux/actions/CommentActon';
import { useEffect } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux'

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


 const Comments = (props)=>{
  const classes= useStyles();
  const [comment, setNewComment] = useState('')

  useEffect(() => {
    props.retrieveComments()
  }, [])

  const comments = props.comments

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitComment(comment).then(()=>{
      props.retrieveComments()
    })
  }

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
    value={comment}
    onChange={(event)=>setNewComment(event.target.value)}
  />
 <Button variant="contained" onClick={handleSubmit} className={classes.saveComment} color="primary" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '10px' }}>
  Send
</Button>
 <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
<Typography variant="h4">COMMENTS</Typography>
<Paper style={{ padding: "40px 20px" }}>
  
    {comments.sort((a,b) => b.createdAt > a.createdAt ? 1 : -1).map(comment => (
    <Grid container wrap="nowrap" spacing={2} key={comment.commentId}>
      <Grid item>
        <Avatar alt="Gatera" src={'imgLink'} />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
      <Typography variant="h5" style={{ margin: 0, textAlign: "left" }}>{comment.userId}</Typography>
      <Typography style={{ textAlign: "left" }}>{comment.comment}{" "}
      </Typography>
      <Typography style={{ textAlign: "left", color: "gray" }}>
        posted {comment.createdAt}
      </Typography>
    </Grid>
    </Grid>
    ))}
  
  <Grid container wrap="nowrap" spacing={2}>
    <Grid item>
    </Grid>
   
  </Grid>
</Paper>
</div>
  )
}

const mapStateToProps = state => ({
  comments: state.comments.comments
})

export default connect(mapStateToProps, {retrieveComments, submitComment}) (Comments);