import React,{useEffect,useState} from 'react';
import { Grid } from '@material-ui/core';
import {getRatings} from "../redux/actions/ratingsAction"
import { Rating } from '@material-ui/lab';
import {connect} from 'react-redux'



const RatingStars = (props) => {
    const [state,setstate] = useState({rate:null})
    useEffect(() => {
            props.getReviews(props.id)
        // console.log(props.reviews)
        //     console.log(props.id)
            setstate({
                ...state,
            })
    }, [])
    return (
        <Grid container>
            <Rating name="read-only" value={props.reviews.rates} readOnly />
        </Grid>
    )
}

const mapStateToProps = state => ({
  reviews: state.fetchReviews
})
const mapDispatchToProps = dispatch => {
  return {
      getReviews: (id)=>dispatch(getRatings(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RatingStars)
