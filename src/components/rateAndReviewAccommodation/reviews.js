import React, { useEffect, useState } from "react";
import { Card, CardContent, CardActionArea, CardActions, CardMedia, Typography, Grid, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { getSingleAccommodation } from "../../redux/actions/fetchAccommodation";
import image from '../../../image.png';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../colors';
import { useParams, Link } from "react-router-dom";
import { Skeleton } from '@material-ui/lab';
import { getRatings } from "../../redux/actions/ratingsAction"
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '110px',
        maxWidth: '80%',
        height: 360,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    media: {
        height: 440
    },
    username: {
        background: '#257AAA',
        color: 'white',
        fontSize: '14px',
        padding: '5px',
        fontWeight: '30px'
    },
    checkbox: {
        display: 'block',
        position: 'absolute',
        color: 'secondary',
        right: 0,
        fontSize: '25px'
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    btncontainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    reviewHeader: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: '5px',
        marginRight: '5px',
        padding:'5px'
    },
    
    addreview: {
        textDecoration: 'none',
        background: '#257AAA',
        color: 'white',
        borderRadius: '2px',
        padding: '4px',
    },
    separate: {
        // marginBottom:theme.spacing(3),
        marginLeft: theme.spacing(3)
    },
    divider: {
        // marginBottom:theme.spacing(3),
        marginTop: theme.spacing(4)
    },
    separator: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(2)
    },
    reviews: {
        fontSize: '14px',
        color: colors.primary100,
    },
    review: {
        marginTop: '3px',
        marginBottom: '13px',
        marginLeft: '110px',
        maxWidth: '80%',
        height: 360,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    reviewContent: {
        marginLeft: '40px',
        marginRight: '20px',
        width: '80%',
        padding: '6px',
        color: 'black'
    },
    cardContent: {
        overflow: 'hidden'
    },
    container: {
        marginLeft: theme.spacing(9),
        // width:'80%'
    },
    titleText: {
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '10px',
        // }
    },
    btnReview: {
       marginTop:'5px'  
    },
    item: {
        display: 'block'
    },
    user: {
        display: "flex",
    },
    theName: {
        margin:'6px'
    }
}));
function Home({  datas, reviews, accommodation, getReviews }) {

    const classes = useStyles();
    const [direction, setDirection] = useState('back');
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        getReviews(id)
        accommodation(id)

        console.log(reviews)
        console.log(datas)
    }, [])

    // const handleClicked = (id) => {
    //     //   props.history.push(`/review/${id}`)
    //   }
    return (
        <React.Fragment>
            <Card >
                <CardContent className={classes.root}>
                    <Formik
                    >
                        <Form>
                            <div className={classes.divider} >
                                <Card className={classes.root} >
                                    {(!datas.accommodation ?
                                        <CardActionArea>
                                            <Skeleton animation="wave" variant="rect" className={classes.media} />
                                            <CardContent className={classes.cardContent} >
                                                <Skeleton animation="wave" height={30} width="60%" />
                                                <Skeleton animation="wave" height={10} width="80%" />
                                            </CardContent>
                                            <CardActions className={classes.cardActions}>
                                                <Skeleton animation="wave" height={30} width="60%" />
                                            </CardActions>
                                        </CardActionArea>
                                        :
                                        <>
                                            <CardActionArea>

                                                <CardMedia
                                                    className={classes.media}
                                                    image={datas.accommodation.photos}
                                                    title={datas.accommodation.title}
                                                />
                                            </CardActionArea>
                                            <CardContent className={classes.cardContent} >
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
                                                    {datas.accommodation.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" noWrap >
                                                    {datas.accommodation.description}
                                                </Typography>
                                                <div className={classes.divider}>
                                                    <Grid container spacing={1} direction='row' >
                                                        <Grid container item xs={3} spacing={3} >

                                                            <Grid container item xs={12} sm={12} direction='column'>
                                                                <Grid item>
                                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
                                                                        Location
                                                    </Typography>
                                                                    <Typography gutterBottom variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                                        {datas.accommodation.country}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography gutterBottom variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                                        {datas.accommodation.city}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography gutterBottom variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                                        {datas.accommodation.state}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography gutterBottom variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                                        {datas.accommodation.streetAddress}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container item xs={3}>

                                                            <Grid container item xs={12} direction='column'>
                                                                <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
                                                                    Capacity
                                                    </Typography>
                                                                <Grid item>
                                                                    <Typography variant="subtitle1" className={classes.titleText} color="textSecondary">
                                                                        {datas.accommodation.propertyType}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography gutterBottom variant="subtitle1" component="p" color="textSecondary" className={classes.titleText}>
                                                                        {datas.accommodation.numberOfRooms != null ? (`${datas.accommodation.numberOfRooms} bedrooms`) : (null)}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                                        {datas.accommodation.typeOfBed ? (`Type of: ${datas.accommodation.typeOfBed} bedrooms`) : (null)}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                </div>
                                            </CardContent>
                                        </>
                                    )}
                                </Card>
                            </div>
                            <div>
                                <Card item className={classes.root}>
                                    <div className={classes.reviewHeader}>
                                        <div>
                                            <Typography variant="h5">
                                                Reviews
                                    </Typography>
                                        </div>
                                        <div className={classes.btnReview}>
                                            <Link to={'/review/' + datas.accommodation.id} style={{ textDecoration: 'none' }} className={classes.addreview}>
                                                Add your review
                                        </Link>
                                        </div>
                                    </div>

                                </Card>

                            </div>

                            <div>
                                {reviews.reviewAndRates.map(element => {
                                    if (element.review != null) {
                                        return (
                                            <Card className={classes.review} key={element._id}>
                                                  
                                                <Grid item >
                                                
                                                    <Typography className={classes.username} variant="body1" component="p" noWrap>
                                                        <div className={classes.user}>
                                                            <div><Avatar src={element ? element.user.profile_picture : ""}  /></div>
                                                            <div className={classes.theName}>{element.user.first_name + " " + element.user.last_name}</div>
                                                    </div>
                                                        
                                                    </Typography>
                                                </Grid>
                                                <Grid item className={classes.reviewContent}>
                                                    <Typography variant="body2" component="p">
                                                        {element.review}
                                                    </Typography>
                                                </Grid>
                                            </Card>
                                        )
                                    }
                                })
                                }
                            </div>

                            <div className={classes.divider}>
                                <div className={classes.btncontainer}>
                                    <div className={classes.root}>
                                        {/* <Button
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            className={classes.button}
                                            
                                        >
                                                    Add Review
                                    </Button> */}

                                    </div>

                                </div>
                            </div>
                        </Form>
                    </Formik>
                </CardContent>
            </Card>

        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    datas: state.fetchAccommodation,
    reviews: state.fetchReviews
})
const mapDispatchToProps = dispatch => {
    return {
        accommodation: (id) => dispatch(getSingleAccommodation(id)),
        getReviews: (id) => dispatch(getRatings(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
