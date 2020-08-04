export const fetchCarListings = () => {
    return dispatch => {
      return fetch(`http://localhost:3001/cars`)
        .then(res => res.json())
        .then(cars => {
          dispatch({type: "GET_LISTINGS", payload: cars})
        })
    }
  }

  