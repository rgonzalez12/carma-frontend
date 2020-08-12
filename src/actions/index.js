export const fetchCarListings = () => {
    return dispatch => {
      return fetch(`http://localhost:3000/cars`)
        .then(res => res.json())
        .then(cars => {
          dispatch({type: "GET_LISTINGS", payload: cars})
        })
    }
  }

  export const addCar = car => {
    return dispatch => {
      return fetch(`http://localhost:3000/cars`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({car: car})
      })
        .then(res => res.json())
        .then(car => {
  
          dispatch({type: "ADD_LISTING", payload: car})
        })
    }
  }

  export const deleteListing = carId => {
    return dispatch => {
      return fetch(`http://localhost:3000/cars/${carId}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(carId => {
          dispatch({type: "REMOVE_LISTING", payload: carId})
        })
    }
  }