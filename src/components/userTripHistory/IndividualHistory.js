import {
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Divider,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { getAccommodation } from "../../redux/actions/userTravelHistoryAction";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import moment from "moment";

const useStyle = makeStyles({
  cover1: {
    padding: "10px 5px",
  },
  // main: {
  //   margin: "20px",
  // },
  root: {
    margin: "20px",
  },
});

function IndividualHistory(props) {
  React.useEffect(() => {
    props.getAccommodation();
  }, []);
  const acc = props.acc;
  const dest = localStorage.getItem("destination");
  const origin = localStorage.getItem("origin");
  // const reason = localStorage.getItem("reason");
  const departure = localStorage.getItem("departure");
  const returning = localStorage.getItem("returning");
  console.log(acc);
  const classes = useStyle();
  return (
    <div>
      {acc && (
        <div className={classes.main}>
          <Typography
            variant="h5"
            style={{ textAlign: "center", weight: "bolder" }}
          >
            Trip History
          </Typography>
          <Divider></Divider>
          <center>
            <Card className="root" md={6} sm={9} xs={11}>
              <CardMedia
                className={classes.cover1}
                image={acc.photos}
                title="Trip image"
              />
              <div className="details" style={{ textAlign: "left" }}>
                <CardContent className="content">
                  <Typography component="h5" variant="h5">
                    <span style={{ fontWeight: "bold" }}> Trip Request</span>
                    <Divider />
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}> Destination:</span>
                    {dest}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>Origin City:</span>
                    {origin}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}> From:</span>

                    {moment(departure).format("DD/MMM/YYYY")}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}> To:</span>
                    {moment(returning).format("DD/MMM/YYYY")}
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <Card className="root">
              <div className="details" style={{ textAlign: "left" }}>
                <CardContent className="content">
                  <Typography component="h5" variant="h5">
                    <span style={{ fontWeight: "bold" }}>
                      Accomodation Booked
                    </span>
                    <Divider />
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}> Country:</span>
                    {acc.country}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}> Street:</span>
                    {acc.streetAddress}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>Type:</span>
                    {acc.title}
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover1}
                image={acc.photos}
                title="Accommodation image"
              />
            </Card>
          </center>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  acc: state.tripHistory.acc,
});

export { IndividualHistory };
export default connect(mapStateToProps, { getAccommodation })(
  IndividualHistory
);
