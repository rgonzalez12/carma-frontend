import React, { Component } from 'react';
import { addCar } from '../actions';
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
        listing_owner: '',
        contact_info: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
            <form id="new-car-form" onSubmit={this.handleSubmit}>
            <br /> <br />
            <h3>List Your Car</h3>
            <label>Make</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.make} name="make"/>
            <br /> <br />
    
            <label>Model</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.model} name="model"/>
            <br /> <br />
    
            <label>Year</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.year} name="year"/>
            <br /> <br />
    
            <label>Condition</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.condition} name="condition"/>
            <br /> <br />

            <label>Trim</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.trim} name="trim"/>
            <br /> <br />

            <label>Specs and Features</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.specs_and_features} name="specs_and_features"/>
            <br /> <br />

            <label>Summary</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.summary} name="summary"/>
            <br /> <br />

            <label>Image</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.image} name="image"/>
            <br /> <br />

            <label>Price</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.price} name="price"/>
            <br /> <br />

            <label>Listing Owner</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.listing_owner} name="listing_owner"/>
            <br /> <br />

            <label>Contact Info</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.contact_info} name="contact_info"/>
            <br /> <br />
    
            <input type="submit" value="Publish Listing" />
          </form>
        )
    }
}

export default connect(null, { addCar })(NewCar)