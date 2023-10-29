// const MAX_NUMBER = 10;
// const MIN_NUMBER = 0;

// import { initialState, reducer, store  } from "./reducer-store.js";

// const html = {
//   keys: {
//     add: document.querySelector('[data-key="add"]'),
//     subtract: document.querySelector('[data-key="subtract"]'),
//     number: document.querySelector('[data-key="number"]'),
//     reset: document.querySelector('[data-key="reset"]'),
//   },
// };

// const subtractHandler = () => {
//   let newValue = parseInt(html.keys.number.value) - 1;
//   if (newValue <= MIN_NUMBER) {
//     newValue = MIN_NUMBER;
//     html.keys.subtract.disabled = true;
//   } else {
//     html.keys.add.disabled = false;
//   }
//   html.keys.number.value = newValue;

//   store.dispatch({type: 'DECREMENT'});
// };

// const addHandler = () => {
//   let newValue = parseInt(html.keys.number.value) + 1;
//   if (newValue >= MAX_NUMBER) {
//     newValue = MAX_NUMBER;
//     html.keys.add.disabled = true;
//   } else {
//     html.keys.subtract.disabled = false;
//   }
//   html.keys.number.value = newValue;

//   store.dispatch({type: 'INCREMENT'});
// };


// html.keys.subtract.addEventListener('click', subtractHandler)


// html.keys.add.addEventListener('click', addHandler)


// html.keys.reset.addEventListener('click', () => {
//   store.dispatch({type: 'RESET'});
//   alert('you have reset the counter to 0');
//   html.keys.number.value = 0;
// });

import './components/tally-app.js';






