import React from 'react'
import { connect } from 'react-redux'
import { deleteListing } from '../actions'

const DeleteCarButton = ({car, deleteListing}) => {
  return (
    <button id="delete-button" onClick={() => deleteListing(car.id)}>Delete Listing</button>
  )
}

export default connect(null, { deleteListing })(DeleteCarButton)