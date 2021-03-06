import React from 'react'
import DeleteCarButton from './DeleteCarButton'
import Likes from './Likes'

const CarCard = ({car}) => {
  return (
    <div className="car-card">
      <span id="car-make">
        <h3>Make</h3>{car.make}</span> 
      <span id="car-model">
        <h3>Model</h3>{car.model}</span> <br />
      <span id="car-year">
        <h3>Year</h3>{car.year}</span> <br />
      <span id="car-mileage">
        <h3>Mileage</h3>{car.mileage}</span> <br />
      <span id="car-condition">
        <h3>Condition</h3>{car.condition}</span> <br />
      <span id="car-trim">
        <h3>Trim</h3>{car.trim}</span> <br />
      <span id="car-specs">
        <h3>Specs and Features</h3>{car.specs_and_features}</span> <br />
      <span id="car-image">
        <h3>Image</h3><img src={car.image} alt="car"></img></span> <br />
      <span id="car-summary">
        <h3>Summary</h3>{car.summary}</span> <br />
      <span id="car-price">
        <h3>Price</h3>{car.price}</span> <br />
      <span id="car-owner">
        <h3>Listing Owner</h3>{car.listing_owner}</span> <br />
      <span id="car-contact-info">
        <h3>Contact Info</h3>{car.contact_info}</span> <br />
        <br></br>

      < Likes />
      < DeleteCarButton name="Delete Listing" car={car} />
      <br /><br />
    </div>
  )
}

export default CarCard