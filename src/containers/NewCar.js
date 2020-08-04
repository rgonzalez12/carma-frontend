import React, { Component } from 'react';
import { addCar } from '../action/Car';
import { connect } from 'react-redux';

class NewCar extends Component {
    state = {
        make: '',
        model: '',
        year: '',
        condition: '',
        trim: '',
        specs_and_features: '',
        price: 0,
        image: '',
        summary: '',
        upvote: 0,
        downvote: 0
    }

    handleChange = e => {
        this.setState({
            [e.target.make]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDfault()
        this.props.addCar(this.state)
        document.getElementById('new-listing-form').reset()
        this.props.history.push('/cars')
    }

    render() {
        return (
            
        )
    }
}

export default connect(null, { addCar })(NewCar)