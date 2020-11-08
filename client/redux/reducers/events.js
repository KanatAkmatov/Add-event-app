const initialState = {
  events: []
}

const ADD_EVENT = 'ADD_EVENT'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return { ...state, events: [...state.events, action.event] }
    default:
      return state
  }
}

export function addEvent(event) {
  return { type: ADD_EVENT, event }
}
