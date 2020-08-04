import React, { Component } from 'react'
import CarCard from '../components/CarCard'
import { connect } from 'react-redux'
import AddCarButton from '../components/AddCarButton'
import { fetchCarListings, addCar} from '../actions/Car'

class Cars extends Component {

    componentDidMount() {
        this.props.fetchCarListings()
    }

    render() {
        return(
          <div className="cars-container">
            < AddCarButton name="List Your Car" addPodcast={this.props.addCar}/>
            {this.props.cars.map((c, id) => < CarCard key={id} car={c} />)}
          </div>
        )
      }
}

const mapStateToProps = state => {
    return {
      cars: state.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCarListings: () => dispatch(fetchCarListings()),
      addCar: car => dispatch(addCar(car))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars)