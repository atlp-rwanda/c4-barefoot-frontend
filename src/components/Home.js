import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import '../App.css'
import { increment, decrement } from '../actions/counterAction'
import { connect } from 'react-redux'

class Home extends Component{

    handleIncrement =  () => {
        this.props.increment()
    }

    handleDecrement =  () => {
        this.props.decrement()
    }

    render(){
        return(
            <div className="home" >
                 <Button variant="outlined" color='primary' onClick={this.handleDecrement}>-</Button>
                <div>Counter: {this.props.count}</div>
                 <Button variant="outlined" color='primary' onClick={this.handleIncrement}>+</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

function mapStateToProps(state){
    return({
        count: state.counter
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);