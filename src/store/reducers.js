import {combineReducers} from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  REMOVE_TODO,
  CREATE_POLL,
  VisibilityFilters
} from './actions'
const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}

let initialState = {
  todos: [],
  polls: []
};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          text: action.text,
          completed: false
        }]
      };
    case REMOVE_TODO: {
      return state.todos.filter((todo, index) => {
        if (index === action.index) {
          return;
        }
        return todo
      });
    }
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      });
    case CREATE_POLL:
      return {
        ...state,
        polls: [...state.polls, action.poll]
      };
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp