export default (state = [], action) => {
    switch(action.type) {
        case "GET_LISTINGS":
          return [...action.payload]

        case "ADD_LISTING":
            return [...state, action.payload]

        case "DELETE_LISTING":
            return state.filter(car => car.id !== action.id)

        default:
            return state        
    }
}