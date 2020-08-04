import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        return (
            <div id="home-page">
               <h2>Welcome to Carma! Get enlightened and find your next vehicle!</h2> 
                 <a className="home-page-nav-link" href="/cars">View Current Listings</a> <br />
                 <a className="home-page-nav-link" href="/cars/new">List your Car with Carma!</a> <br />
            </div>
        )
    }

}

export default HomePage;