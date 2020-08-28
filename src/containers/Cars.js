import React, { Component } from 'react'
import CarCard from '../components/CarCard'
import { connect } from 'react-redux'
import { fetchCarListings, addCar } from '../actions'

class Cars extends Component {

    componentDidMount() {
        this.props.fetchCarListings()
    }

    render() {
      const carsList = this.props.cars.map((c, id) => < CarCard key={id} car={c} />)
        return(
          
          <div className="cars-container">
            <br></br>
            <a className="home-page-nav-link" href="/">Home</a><br></br>
            <a className="home-page-nav-link" href="/cars/new">List Your Car</a><br></br>
            <br></br>
            
            { carsList }
          </div>
        )
      }
}

const mapStateToProps = state => {
    return {
      cars: state.cars
    }
}

export default connect(mapStateToProps, { fetchCarListings, addCar })(Cars)