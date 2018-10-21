const initialState = {
  todos: [
    {
      text: 'do something'
    },
    {
      text: 'exercise'
    }
  ]
};

// action type
const ADD_TODO = 'ADD_TODO';

// action creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

// reducers, to create from the old state a new state by merging the action payload to it
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state.todos, {
        text: action.payload
      }];
    default:
      return state;
  }
}

console.log('Initial State:', initialState);

// make changes to initial state
const action = addTodo('Make it work');
const newState = todoReducer(initialState, action);

console.log('New State:', newState);