export default (state = [], action) => {
    switch(action.type) {
        case "GET_LISTINGS":
          return [...action.payload]

        case "ADD_LISTING":
            return [...state, action.payload]

        case "MARK_LISTING_AS_SOLD":
            return state.map(car => car.id === action.car.id ? action.car : car)

        case "DELETE_LISTING":
            return state.filter(car => car.id !== action.id)

        default:
            return state        
    }
}