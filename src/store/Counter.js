// -----------------
// INITIAL STATE
export const CounterState = {
    count: 0
}

// -----------------
// ACTIONS TYPES
export const ACTIONS_TYPES = {
    INCREMENT_COUNT: 'Counter/INCREMENT_COUNT',
    DECREMENT_COUNT: 'Counter/DECREMENT_COUNT'
}


// ----------------
// ACTION CREATORS
export const actionCreators = {
    increment: () => (dispatch, getState) => {
        const appState = getState();
        console.debug(appState);
        const count = appState.counter.count + 1; 
        dispatch({ type: ACTIONS_TYPES.INCREMENT_COUNT, count })
    },
    decrement: () => (dispatch, getState) => {
        const appState = getState();
        console.debug(appState);
        const count = appState.counter.count - 1;
        dispatch({ type: ACTIONS_TYPES.DECREMENT_COUNT, count });
    }
};

// ----------------
// REDUCER 
export const reducer = (state = CounterState, incomingAction) => {
    const action = incomingAction;
    switch (action.type) {
        case ACTIONS_TYPES.INCREMENT_COUNT:
            return { ...state, count: action.count };
        case ACTIONS_TYPES.DECREMENT_COUNT:
            return { ...state, count: action.count };
        default:
            return state;
    }
};
