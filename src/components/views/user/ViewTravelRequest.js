import React, { useEffect } from 'react';
import { Grid, makeStyles, Typography, Container, GridListTileBar, Button } from '@material-ui/core';
import colors from '../../colors'
import { connect } from 'react-redux';
import { GetTravelRequestsAction, changeStatusFilter } from '../../../redux/actions/ViewTravelRequestAction';
import DisplayTravelRequest from '../../travelRequests/DisplayTravelRequest';
import SnackBarMessage from '../../SnackBarMessage';
import Loader from '../../Loader';
import { Pagination } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1, 0),
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(7, 0, 0, 0)
        }
    },
    title: {
        padding: theme.spacing(1),

    },
    content: {
        width: '100%',
        height: 'auto'
    },
    filter: {
        width: '150px',
        fontSize: '20px',
        height: '40px',
        textAlign: 'center'
    }
}))


const ViewTravelRequest = (props) => {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    let status = props.match.params.status;
    useEffect(() => {
        props.GetTravelRequestsAction();
        props.changeStatusFilter(status);
    }, [status])
    console.log()
    const getNextPage = (event, value) => {
        const userToken = localStorage.getItem('barefootUserToken');
        if (userToken) {
            return props.GetTravelRequestsAction({ userToken, page: value });
        }
        return 0;
    }

    return (
        <Grid container direction="column" className={classes.main}>
            <Loader open={false} />
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{ color: colors.primary100 }}>
                    {t("View Travel Requests")}
                </Typography>
            </Grid>
            {/* <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{ color: colors.primary100, fontSize: '25px' }}>
                    Filter
                </Typography>
                <select onChange={handleFilterChange} className={classes.filter}>
                    <option value="pending">pending</option>
                    <option value="approved" selected="selected">approved</option>
                    <option value="rejected">rejected</option>
                    <option value="canceled">canceled</option>
                </select>
            </Grid> */}
            <Grid item xs={12} className={classes.content}>
                <DisplayTravelRequest {...props} />
            </Grid>
            {/* <Grid container item justify="center" style={{ marginTop: '50px' }}>
                <Pagination count={10} variant="outlined" color="primary" onChange={getNextPage} />
            </Grid> */}

        </Grid>
    );
}

const mapStateToProps = state => ({
    listTravelRequest: state.viewTravelRequest
});

export { ViewTravelRequest };
export default connect(mapStateToProps, { GetTravelRequestsAction, changeStatusFilter })(ViewTravelRequest);