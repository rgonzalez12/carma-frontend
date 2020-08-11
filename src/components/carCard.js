import React from 'react'
import { connect } from 'react-redux'
import { deleteListing } from '../actions'
import DeleteCarButton from './DeleteCarButton'

const CarCard = ({car, deleteListing}) => {
  return (
    <div className="car-card">
      <span id="car-make">{car.make}</span> 
      <span id="car-model">{car.model}</span> <br />
      <span id="car-year">{car.year}</span> <br />
      <span id="car-condition">{car.condition}</span> <br />
      <span id="car-trim">{car.trim}</span> <br />
      <span id="car-specs">{car.specs_and_feature}</span> <br />
      <span id="car-image">{car.image}</span> <br />
      <span id="car-summary">{car.summary}</span> <br />
      <span id="car-price">{car.price}</span> <br />


      < DeleteCarButton name="Delete Listing" car_id={car.id} deleteListing={deleteListing}/>
      <br /><br />
    </div>
  )
}

export default connect(null, { deleteListing })(CarCard)