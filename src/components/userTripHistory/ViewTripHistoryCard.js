import moment from "moment";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { getTripHistory } from "../../redux/actions/userTravelHistoryAction";
import { getAccommodation } from "../../redux/actions/userTravelHistoryAction";

const useStyle = makeStyles(() => ({
  paper: {
    padding: 5,
    textAlign: "center",
  },
  container: {
    margin: 10,
  },
  media: {
    height: 140,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function ViewTripHistoryCard(props) {
  const { location } = useParams();

  useEffect(() => {
    props.getTripHistory(location);
    props.getAccommodation();
  }, []);

  const trips = location
    ? props.trips
    : Object.keys(props.locations).map((destination, i) => ({
        tripId: i + 1,
        destination: destination.split(",")[0],
        originCity: "Kigali",
        reason: "Trainings for work",
        tripDate: "03/03/2021",
        returnDate: "31/04/2021",
        accommodationId: (i + 3) / 3 + 3,
      }));
  const classes = useStyle();
  const acc = props.acc;

  console.log(location, props.trips, props.locations);

  const paginate = (array, page_size, page_number) =>
    array.slice((page_number - 1) * page_size, page_number * page_size);

  const paginatedTrips = paginate(trips, 12, 1);

  return (
    <div>
      <Grid container spacing={1} className={classes.container}>
        {paginatedTrips.map((trip) => (
          <Grid item key={trip.tripId} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              {acc && <img src={acc.photos} style={{ width: 150 }}></img>}
              <Typography>Destination: {trip.destination}</Typography>
              <Typography>Origin City: {trip.originCity}</Typography>
              <Typography>Reason: {trip.reason}</Typography>
              <Typography>
                From: {moment(trip.tripDate).format("DD/MMM/YYYY")}
              </Typography>
              <Typography>
                To: {moment(trip.returnDate).format("DD/MMM/YYYY")}
              </Typography>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  localStorage.setItem("accId", trip.accommodationId);
                  localStorage.setItem("destination", trip.destination);
                  localStorage.setItem("origin", trip.originCity);
                  localStorage.setItem("reason", trip.reason);
                  localStorage.setItem("departure", trip.tripDate);
                  localStorage.setItem("returning", trip.returnDate);
                }}
              >
                <Link
                  to="/individual-history"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Details
                </Link>
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Pagination count={10} color="primary" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  trips: state.tripHistory.trips,
  locations: state.tripHistory.locations,
  acc: state.tripHistory.acc,
});
export { ViewTripHistoryCard };
export default connect(mapStateToProps, { getTripHistory, getAccommodation })(
  ViewTripHistoryCard
);
