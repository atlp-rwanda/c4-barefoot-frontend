import { 
  Divider, Typography, List, ListItem,ListItemText, Grid, Container, Card,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../../redux/actions/fetchAllUsers';
import { getStatistics } from '../../../redux/actions/fetchStatisticsAction';
import { getVisitors } from '../../../redux/actions/fetchVisitorsAction';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

export const SectionSkeleton = () => (
  <Grid item style={{marginBottom: 20, width: 300}}>
    <Skeleton animation={false} />
    <Container style={{paddingLeft: 20, paddingRight: '0'}}>
      <Skeleton height={50} />
      <Skeleton height={20} />
    </Container>
    <Container style={{paddingLeft: 20, paddingRight: '0'}}>
      <Skeleton height={50} />
      <Skeleton height={20} />
    </Container>
    <Container style={{paddingLeft: 20, paddingRight: '0'}}>
      <Skeleton height={50} />
      <Skeleton height={20} />
    </Container>
  </Grid>
);

const Statistics = (props) => {

  const state = useSelector(state => state);
  const { 
    fetchAllUsers,
    fetchStatistics: { statistics },
    fetchVisitors
  } = state;
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllUsers()(dispatch);
    getStatistics()(dispatch);
    getVisitors()(dispatch);
  }, []);
  return (
    <Container style={{color: '#257AAA'}}>
      <Typography variant='h6' style={{ marginTop: 20, textAlign: 'center'}}>This is the overall statistics for Barefoot Nomad</Typography>
      <Divider/>
      <List style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justify: 'flex-end',
        marginTop: 15,
        textAlign: 'center'
      }}>
        {
          fetchAllUsers && statistics 
          ? <>
              <ListItemText>Total users   : {fetchAllUsers.count}</ListItemText>
              {/* <ListItemText>Messages      : {183}</ListItemText> */}
              <ListItemText>Locations     : {statistics.numberOfLocation.count}</ListItemText>
              <ListItemText>Accomodations : {statistics.numberOfAccommodation}</ListItemText>
            </>
          : <>
              <Skeleton animation={false} width={150} height={40} style={{margin: 'auto', marginBottom: 40}} />
              <Skeleton animation={false} width={150} height={40} style={{margin: 'auto', marginBottom: 40}} />
            </>
        }
      </List>
     <Grid spacing={3} container direction="row" justify="space-evenly" alignItems="flex-start">
        {
        fetchAllUsers && statistics
        ? (
          <>  
          <Grid item container direction="column" justify="flex-start" alignItems="flex-start" style={{width: 310, marginTop: 10, flexWrap: 'nowrap'}}>
          <Card style={{padding: 10, color: '#257AAA'}}>
            {/* {Active users} */}
            <Grid item style={{width: '100%'}}>
              <Typography variant='h6'>Active Users</Typography>
              <Divider/>
              <ListItemText>Registered users : { statistics ? statistics.numberOfActiveUsers : 0 }</ListItemText>
              <ListItemText>Visitors in last 2 weeks : { fetchVisitors.count ? fetchVisitors.count : 0 }</ListItemText>
            </Grid>
            {/* {App visits} */}
            {/* <Grid item>
              <Typography variant='h6'>App visits</Typography>
              <Divider/>
              <ListItemText>Past 7 days : { 213 }</ListItemText>
              <ListItemText>Past 28 days   : { 680 }</ListItemText>
              <ListItemText>Lifetime   : { 76890 }</ListItemText> 
            </Grid> */}
            {/* {Flow of Messages} */}
            {/* <Grid item>
              <Typography variant='h6'>Flow of messages</Typography>
              <Divider />
              <ListItemText>From unregistered visitors : { 2 }</ListItemText>
              <ListItemText>From registered users      : { 680 }</ListItemText>
            </Grid> */}
          </Card>
          
          </Grid>
          <Grid item style={{width: 310, marginTop: 10}}>
          {/* {Top visited locations} */}
              <Card style={{padding: 10, color: '#257AAA'}}>
              <Typography variant='h6'>Top visited locations</Typography>
              <Divider />
              <List>
                {
                  statistics ?
                  statistics.sortedVisitedLocation.map((location, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={`${index+1}. ${location.LocationName}`} secondary={`${location.visits} visits`} />
                    </ListItem>
                  )) : <></>
                }
              </List>
              </Card>
          </Grid>
          {/* <Grid item style={{width: 310, marginTop: 10, background: '#fdd'}}> */}
          {/* {Top booked accomodations} */}
              {/* <Typography variant='h6'>Top booked accomodations</Typography>
              <Divider />
              <List>
                {
                  statistics ?
                  statistics.SortedBookedAccomodation.map((accomodation, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={`${index+1}. ${accomodation[0]}`} secondary={`${accomodation[1]} bookings`} />
                    </ListItem>
                  )) : <></>
                }
              </List>
          </Grid>
          <Grid item style={{width: 310, marginTop: 10, background: '#ddd'}}> */}
          {/* {Top rated accomodations} */}
              {/* <Typography variant='h6'>Top rated accomodations</Typography>
              <Divider />
              <List>
                <ListItem>
                  <ListItemText primary='1. Mariott Hotel' secondary={
                    <Rating value={4} readOnly/>
                  } />
                </ListItem>
                <ListItem>
                  <ListItemText primary='2. Letmigo Hotel' secondary={<Rating value={1} readOnly/>} />
                </ListItem>
              </List>
          </Grid> */}
        </>)
      : <><SectionSkeleton /><SectionSkeleton /><SectionSkeleton /></>
      }
     </Grid>
     </Container>
  )
};

export default Statistics;
