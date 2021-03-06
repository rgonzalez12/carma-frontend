import React, { Component } from 'react';
import { addCar } from '../actions';
import { connect } from 'react-redux';

class NewCar extends Component {
    state = {
        make: '',
        model: '',
        year: '',
        mileage: 0,
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
        e.preventDefault()
        this.props.addCar(this.state)
        document.getElementById('new-listing-form')
        this.props.history.push('/cars')
    }

    render() {
        return (
            <div id="new-listing-form">
            <form id="new-listing-form" onSubmit={this.handleSubmit}>
            <br></br>
            <a className="home-page-nav-link" href="/">Home</a><br></br>
            <a className="home-page-nav-link" href="/cars">View Current Listings</a>
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

            <label>Mileage</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.mileage} name="mileage"/>
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
            <input type="text" onChange={this.handleChange} value={this.state.price} name="price" placeholder="$"/>
            <br /> <br />

            <label>Listing Owner</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.listing_owner} name="listing_owner"/>
            <br /> <br />

            <label>Contact Info</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.contact_info} name="contact_info"/>
            <br /> <br />
    
            <input type="submit" value="Publish Listing" />
            <br></br>
          </form>
          </div>
        )
    }
}

export default connect(null, { addCar })(NewCar)