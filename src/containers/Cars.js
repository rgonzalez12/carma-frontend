import React, { Component } from 'react'
import CarCard from '../components/CarCard'
import { connect } from 'react-redux'
import AddCarButton from '../components/AddCarButton'
import { fetchCarListings, addCar } from '../actions'

class Cars extends Component {

    componentDidMount() {
        this.props.fetchCarListings()
    }

    render() {
      const carsList = this.props.cars.map((c, id) => < CarCard key={id} car={c} />)
        return(
          <div className="cars-container">
            < AddCarButton name="List Your Car" addCar={this.props.addCar}/>
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