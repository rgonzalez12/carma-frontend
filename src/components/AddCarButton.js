import React from 'react'
import { useHistory } from 'react-router-dom'

const AddCarButton = props => {
  const history = useHistory()
  return (
    <button id="add-button" onClick={() => history.push("/cars/new")}>{props.name}</button>
  )
}

export default AddCarButton