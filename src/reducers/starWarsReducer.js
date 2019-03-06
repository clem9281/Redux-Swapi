import { SWAPI_FETCH, SWAPI_SUCCESS, SWAPI_FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case SWAPI_FETCH:
      return {
        ...state,
        fetching: true
      };
    case SWAPI_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      };
    case SWAPI_FAILURE:
      return {
        ...state,
        fetching: false,
        error: "Whoops, something went wrong"
      };
    default:
      return state;
  }
};
