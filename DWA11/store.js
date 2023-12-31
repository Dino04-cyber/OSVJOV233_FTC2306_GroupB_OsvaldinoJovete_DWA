const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function createStore(reducer) {
  let state = reducer(undefined, {});
  const subscribers = [];

  function dispatch(action) {
    state = reducer(state, action);
    subscribers.forEach(subscriber => subscriber(state));
  }

  function subscribe(subscriber) {
    subscribers.push(subscriber);
  }

  return {
    getState: () => state,
    dispatch,
    subscribe,
  };
}

export const store = createStore(counterReducer);
