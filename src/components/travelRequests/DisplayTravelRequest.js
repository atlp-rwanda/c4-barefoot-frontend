import React, { useState } from 'react';
import colors from '../colors';
import { Button, Grid, makeStyles, Typography, Box, Card, useTheme, Container, Paper, CardContent } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab'
import RequestCard from './RequestCard';
import RequestModal from './RequestModal';

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: colors.neutralWhite,
        width: '90%',
        margin: 'auto',
        justifyContent: 'space-evenly',
        padding: theme.spacing(3),
        flexDirection: 'column'
    },
    container: {
        minHeight: '78vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0%',
        marginTop: '20px',
        flexDirection: 'column',
        paddingBottom: '20px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '75vh',
        position: 'relative',
        justifyContent: 'space-between',
    },
    root: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
        marginTop: '20px',
        position: 'relative',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    content: {
        flex: '1 0 auto',
    },

    image: {
        width: '100%',
        height: '300px'
    },
    name: {
        marginLeft: '10px',
        marginTop: "-5px"
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        justifyContent: 'space-between'
    },

    requesterProfi: {
        display: 'flex',
        width: '350px',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    imageContainer: {
        width: '300px',
        height: '200px',
        marginLeft: '0%',
        overflow: 'hidden'
    },

    paganete: {
        marginTop: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
    buttons: {
        float: 'inline-end',
        marginRight: '20px',
        justifyContent: 'space-evenly',
        display: 'inline-block',

    }
}))

const DisplayTravelRequest = (props) => {
    const classes = useStyles()
    const theme = useTheme();
    const pendingTravelRequests = [];
    props.listTravelRequest.travelRequests.map(travel => {
        if (travel.status === 'pending') {
            pendingTravelRequests.push(travel)
        }
    });
    const [openModal, setOpenModal] = useState(false)
    const category = props.category;
    const [modalUsage, setModalUsage] = useState('view');
    const [page, setPage] = useState(1);
    const page_size = 5;

    const handlePage = (e, value) => {
        setPage(value);
    };
    //updatting travel request
    const handleUpdateTravel = (id, action) => {
        props.updateSingleTravelRequest(id, action)
    }
    //formating dsate

    // openning modal
    const handleModalOpen = () => {
        setOpenModal(true)
    }
    //getting single travel
    const handleSingleTravel = (id, usage) => {

        handleModalOpen()
        props.getSingleTravelRequest(id);
        setModalUsage(usage);
    }

    // closing modal
    const handleModalClose = () => {
        setOpenModal(false);
    };
    const paginate = (array, page_number) => {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }
    return (
        <Grid container className={classes.main} >
            {props.listTravelRequest.fetchLoading ?
                <>
                    <Card className={classes.root} style={{ boxShadow: 'none' }}>
                        <Paper className={classes.imageContainer}>
                            <Skeleton variant='rect' animation="wave" height='300px' width='320px' />
                        </Paper>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <div className={classes.requesterProfi}>
                                    <Skeleton variant='circle' width={40} height={40} />
                                    <Skeleton variant='text' width='190px' height='20' className={classes.name} />
                                    <Skeleton variant='text' height='20' width='100px' style={{ float: 'right' }} />
                                </div>
                                <Skeleton variant='text' width='300px' height='40px' style={{ marginLeft: '30px' }} />
                                <Skeleton variant='text' width='100px' height='40px' style={{ marginLeft: '30px' }} />
                                <div className={classes.controls}>
                                    <Skeleton variant='text' width='100px' height='40px' style={{ marginLeft: '23px' }} />
                                    <div className={classes.buttons}>
                                        <Skeleton variant='text' width='150px' height='40px' />
                                    </div>
                                </div>
                            </CardContent>
                        </div>

                    </Card>
                </>
                :
                <Container maxWidth="md" className={classes.cardContainer}>
                    <Box>
                        {props.listTravelRequest.travelRequests.length !== 0 ? props.listTravelRequest.travelRequests.map((travel) => (

                            <Card className={classes.root} key={travel.travelRequestInfo.travelId}>

                                <RequestCard
                                    travel={travel.travelRequestInfo}
                                    userInfo={travel.userInfo}
                                    accommodationInfo={travel.accommodationInfo}
                                />
                            </Card>
                        ))
                            :
                            <center>
                                <Box style={{ paddingTop: '50px' }}>
                                    <Typography variant="subtitle1" component="h6">No {category} travel request found</Typography>
                                </Box>
                            </center>

                        }
                    </Box>
                </Container>
            }
        </Grid>
    );
}

export default DisplayTravelRequest;