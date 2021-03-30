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
import "./style.css";

function IndividualHistory(props) {
  React.useEffect(() => {
    props.getAccommodation();
  }, []);
  const acc = props.acc;
  const dest = localStorage.getItem("destination");
  const origin = localStorage.getItem("origin");
  const reason = localStorage.getItem("reason");
  const departure = localStorage.getItem("departure");
  const returning = localStorage.getItem("returning");
  return (
    <div>
      {acc && (
        <div>
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
                className="cover1"
                image={acc.photos}
                title="Trip image"
              />
              <div className="details">
                <CardContent className="content">
                  <Typography component="h5" variant="h5">
                    Trip Request
                    <Divider />
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Destination: {dest}
                  </Typography>
                  <Typography>Origin City: {origin}</Typography>
                  <Typography>Reason: {reason}</Typography>
                  <Typography>
                    From: {moment(departure).format("DD/MMM/YYYY")}
                  </Typography>
                  <Typography>
                    To: {moment(returning).format("DD/MMM/YYYY")}
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <Card className="root">
              <div className="details">
                <CardContent className="content">
                  <Typography component="h5" variant="h5">
                    Accomodation Booked
                    <Divider />
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Country: {acc.country}
                  </Typography>
                  <Typography>Street: {acc.streetAddress}</Typography>
                  <Typography>Type: {acc.title}</Typography>
                </CardContent>
              </div>
              <CardMedia
                className="cover"
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
