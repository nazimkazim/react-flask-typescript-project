import {
  GET_TO_DOS
} from "../actions/types";

const initialState = {
  todos: [],
  loading: false
};

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TO_DOS:
      return {
        ...state,
        todos: payload,
        loading: true
      };
    default:
      return state;
  }
}
