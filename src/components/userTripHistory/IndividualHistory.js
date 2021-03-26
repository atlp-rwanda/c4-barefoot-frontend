import { Typography, Card, CardMedia, CardActionArea, CardContent, Divider } from '@material-ui/core'
import React from 'react'
import {connect} from 'react-redux'
import {getAccommodation} from '../../redux/actions/userTravelHistoryAction'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        padding: 15,
        width: '50%'
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 250,
      },
      cover1: {
        width: 250,
      },
  });

function IndividualHistory(props) {
    React.useEffect(()=>{
        props.getAccommodation()
    },[])
    const acc = props.acc
    const classes = useStyles();
    const dest = localStorage.getItem('destination')
    const origin = localStorage.getItem('origin')
    const reason = localStorage.getItem('reason')
    return (
 
        <div>
        
            {acc && 
                <div>
                <Typography variant='h5' style={{textAlign: 'center', weight: 'bolder'}}>Trip History</Typography>
                <Divider></Divider>
                <center><Card className={classes.root}>
                <CardMedia
                        className={classes.cover1}
                        image={acc.photos}
                        title="Trip image"
                    />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Trip History
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Destination: {dest}
                    </Typography>
                    <Typography>Origin City: {origin}</Typography>
                    <Typography>Reason: {reason}</Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    </div>
                </div>
                </Card>
                <Card className={classes.root}>
                
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Accomodation used
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Country: {acc.country}
                    </Typography>
                    <Typography>Street: {acc.streetAddress}</Typography>
                    <Typography>Type: {acc.title}</Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    </div>
                </div>
                    <CardMedia
                        className={classes.cover}
                        image={acc.photos}
                        title="Accommodation image"
                    />
                </Card></center>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    acc: state.tripHistory.acc
})

export default connect(mapStateToProps, {getAccommodation}) (IndividualHistory)
