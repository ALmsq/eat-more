const initialState = {
    place: [],
    placesArr: []
}

// const placeReducer = (state = initialState, action) => {
//     switch (action.type){
//         case "ADD_PLACE":
//             let spreadedPlace = [...state.place, action.payload]
//             return { 
//             ...state,
//             place: spreadedPlace
//         }
//         default:
//             return state
//     }
// }

// export default placeReducer

//////////////////////////////////////////////////////////////////////////


// export default (state = {search: "", places: []}, { type, payload }) => {
export default (state = [], { type, payload }) => {
    switch (type) {
      case 'GET_PLACE':
        return payload;
      case "ADD_PLACE":
          return [...state, payload]
      default:
        return state;
    }
  };
