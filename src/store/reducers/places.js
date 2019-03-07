import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from "../actions/actionTypes.js";

const initialState = {
  places: [],
  selectedPlace: null
};
const reducer = (state = initialState , action) => {
     switch(action.type){
       //Case for adding a place.
         case ADD_PLACE:
         //Using inmutibility sto create a new instance of that state insteadof adding to it.
             return {
              //this syntax ...state calls old state.
              ...state,
              places: state.places.concat({
                key: Math.floor(Math.random() * (100 -1)) + 1,
                name: action.placeName,
                image: {
                  uri:
                    "https://c1.staticflickr.com/9/8002/7645571426_6391c3b369_b.jpg"
                }
              })
            };
        //Case for deleting a place.
         case  DELETE_PLACE:
             return {
              ...state,
                places: state.places.filter(place => {
                return place.key !== state.selectedPlace.key;
              }),
              selectedPlace: null
            };
         //Case for deleting a place.
         case SELECT_PLACE:
             return {
              ...state,
              selectedPlace: state.places.find(place => {
                return place.key === key;
              })
            };
         //Case for deleting a place.
         case DESELECT_PLACE:
             return {
                ...state,
                selectedPlace: null
              };
        //If none of those places return default stare meaning original state
         default:
         return state;
     }
};

export default reducer;
