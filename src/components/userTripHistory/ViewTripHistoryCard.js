import moment from "moment";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { getTripHistory } from "../../redux/actions/userTravelHistoryAction";
import { getAccommodation } from "../../redux/actions/userTravelHistoryAction";

const useStyle = makeStyles(() => ({
  paper: {
    padding: 5,
    textAlign: "center",
    margin: "1em",
  },
  container: {
    margin: "2% 5% 2% 5%",

    width: "90%",
  },
  centered: {
    margin: "50px",
    fontSize: "2em",
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
  paganete: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
}));

function ViewTripHistoryCard(props) {
  const [page, setPage] = useState(1);
  const page_size = 6;
  // const filtered = filter(travel, category);

  const handlePage = (e, value) => {
    setPage(value);
  };
  const { location } = props.match.params;
  let tripp = [];
  let trippp = [];

  useEffect(() => {
    props.getTripHistory();
    props.getAccommodation();
  }, []);

  const { trips, pending } = props.trips;
  trips.forEach((trip) => {
    tripp.push(trip.travelRequestInfo.Trip);
  });
  tripp.forEach((item) => {
    item.map((trip) => trippp.push(trip));
  });
  console.log(trippp.length);
  console.log(tripp);

  const classes = useStyle();
  const acc = props.acc;

  const paginate = (array, page_number) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };
  const paginated = paginate(trippp, page);

  return (
    <div>
      <Grid container spacing={1} className={classes.container}>
        {!pending &&
          paginated.map((trip) => (
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
        {pending && (
          <Typography className={classes.centered}>Loading</Typography>
        )}
        {!pending && trippp.length == 0 && (
          <Typography className={classes.centered} color="primary">
            No trips available
          </Typography>
        )}
      </Grid>
      <div className={classes.paganete}>
        {trippp.length !== 0 && trippp.length / page_size > 1 && (
          <Pagination
            count={Math.ceil(trippp.length / page_size)}
            color="primary"
            onChange={handlePage}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  trips: state.tripHistory,
  locations: state.tripHistory.locations,
  acc: state.tripHistory.acc,
});
export { ViewTripHistoryCard };
export default connect(mapStateToProps, { getTripHistory, getAccommodation })(
  ViewTripHistoryCard
);
