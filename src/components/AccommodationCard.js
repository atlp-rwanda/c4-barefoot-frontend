import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Place } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.primary
  },
  media: {
    height: 140
  },
}));

function Accommodations(props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
    }, 3000)
  })
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        { loading ? 
        (<Skeleton variant='rect' animation="wave" className={classes.media} />)
        :
        (<CardMedia
          className={classes.media}
          image={props.accommodation.photos}
          title={props.accommodation.title}
        />)}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           { loading ? (<Skeleton animation="wave" width="50%"/>)
           : (props.accommodation.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { loading ? 
            (<React.Fragment>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" width='80%' />
            </React.Fragment>)
            : (props.accommodation.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {loading ? (<Skeleton animation='wave' width='20%' height='20px' />) :
        <Button size="small" color="primary" startIcon={<Place />}> {props.accommodation.city} </Button>
      }
      </CardActions>
    </Card>
  );
}

export default Accommodations