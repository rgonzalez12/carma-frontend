import React from 'react'

const DeleteCarButton = props => {
  return (
    <button id="delete-button" onClick={() => props.deleteListing(props.car_id)}>{props.name}</button>
  )
}

export default DeleteCarButton