// app.js

import { store } from './store.js';
import { increment, decrement, reset } from './actions.js';

const MAX_NUMBER = 10;
const MIN_NUMBER = 0;

const html = {
  keys: {
    add: document.querySelector('[data-key="add"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    number: document.querySelector('[data-key="number"]'),
    reset: document.querySelector('[data-key="reset"]'),
  },
};

const subtractHandler = () => {
  store.dispatch(decrement());
};

const addHandler = () => {
  store.dispatch(increment());
};

const resetHandler = () => {
  store.dispatch(reset());
};

// Subscribe to store updates and update the UI
store.subscribe(state => {
  html.keys.number.value = state.count;

  if (state.count <= MIN_NUMBER) {
    html.keys.subtract.disabled = true;
  } else {
    html.keys.subtract.disabled = false;
  }

  if (state.count >= MAX_NUMBER) {
    html.keys.add.disabled = true;
  } else {
    html.keys.add.disabled = false;
  }

  // Log the state for the user stories
  console.log('Current state:', state.count);
});

// Scenario 1: Log initial state
console.log('Scenario 1: Initial state:', store.getState().count);

html.keys.subtract.addEventListener('click', subtractHandler);
html.keys.add.addEventListener('click', addHandler);
html.keys.reset.addEventListener('click', resetHandler);
