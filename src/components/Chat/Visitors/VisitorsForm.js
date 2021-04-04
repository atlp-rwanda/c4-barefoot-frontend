import React from 'react';
import { visitorsMessage } from '../../../redux/actions/ChatAction';
import {connect} from 'react-redux';
import { IconButton, FormControl, InputLabel, Input, FormHelperText, Button, Container, Typography } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {useStyles} from '../ChatStyles';
import CloseIcon from '@material-ui/icons/Close';
import NewForm from './NewForm';
import RecordEmail from './recordEmail';

function VisitorsForm (props){
    const classes = useStyles();
    const [btnstate, setBtnstate] = React.useState('close');
    const [showForm, setShowForm] = React.useState(false);
    const [showActualForm, setActualForm] = React.useState(false);

    const handleOpen = () => {
        setBtnstate('open')
        setShowForm(true)
        const visitor = localStorage.getItem('visitorEmail')
        if(visitor){
            setActualForm(true);
            setShowForm(false)
        }
    }

    const handleClose = () => {
        setBtnstate('close')
        setShowForm(false)
        setActualForm(false);
    }


    return (
        <div>
            {btnstate === 'close' ? 
            <IconButton className={classes.chatIcon} onClick={handleOpen}>
                <QuestionAnswerIcon className='chatus' style={{color: 'white'}}></QuestionAnswerIcon>
            </IconButton> : <IconButton className={classes.chatIcon} onClick={handleClose}>
                <CloseIcon className='chatus' style={{color: 'white'}}/>
            </IconButton>}
            {showForm === true && <RecordEmail openActualForm={setActualForm}/>}
            {showActualForm === true && <NewForm/>}
        </div>
    )
}

export default connect(null, {visitorsMessage})(VisitorsForm)