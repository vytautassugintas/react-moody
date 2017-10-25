export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const CREATE_POLL = 'CREATE_POLL';

export const SET_USER = 'SET_USER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export function removeTodo(index) {
  return {type: REMOVE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}

export function createPoll(poll) {
  return {type: CREATE_POLL, poll}
}

export function setUser(user) {
  return {type: SET_USER, user}
}