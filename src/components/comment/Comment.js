import React from 'react'
 import moment from 'moment'
import {Paper, Grid, Avatar, Divider, TextField,Button, makeStyles, Typography, Snackbar, FormHelperText} from '@material-ui/core'
import { retrieveComments, submitComment } from '../../redux/actions/CommentActon';
import { useEffect } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux'
import MuiAlert from '@material-ui/lab/Alert'

function alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')

  const anyerror = props.error
  useEffect(() => {
    props.retrieveComments()
    if(anyerror){
      setError(anyerror)
      setOpen(true)
    }
  }, [])

  
  const handleClose = () => {
  
    setOpen(false);
  };

  const comments = props.comments
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(comment !== ''){
      props.submitComment(comment).then(()=>{
        props.retrieveComments()
        setNewComment('')
      })
    }else{
      setError("Comment can't be blank")
      setOpen(true)
    }
    
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
  
    {comments.map(comment => (

    <Grid container wrap="nowrap" spacing={2} key={comment.comment.commentId}>
      <Grid item>
        <Avatar alt="Gatera" src={'imgLink'} />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
      <Typography variant="h6" style={{ margin: 0, textAlign: "left", color:"skyblue" }}>{comment.senderInfo.username}</Typography>
      <Typography style={{ textAlign: "left", wordWrap:"break-word" }}>{comment.comment.comment}{" "}
      </Typography>
      <Typography style={{ textAlign: "left", color: "gray" }}>
        posted  {moment(comment.comment.createdAt).calendar()}
      </Typography>
    </Grid>
    </Grid>
    ))}
   
  <Grid container wrap="nowrap" spacing={2}>
    <Grid item>
    </Grid>
   
  </Grid>
</Paper>

      {open === true && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <alert onClose={handleClose} severity="success">
          <Typography style={{backgroundColor: 'red', padding: 10, borderRadius: 10, color: 'white'}}>{error}</Typography>
        </alert>
      </Snackbar>}
</div>
  )
}

const mapStateToProps = state => ({
  comments: state.comments.comments,
  error: state.comments.error
})
export{Comments}
export default connect(mapStateToProps, {retrieveComments, submitComment}) (Comments);