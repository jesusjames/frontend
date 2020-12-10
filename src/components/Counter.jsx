import * as React from 'react';
import { connect } from 'react-redux';
import * as CounterStore from '../store/Counter';

export const Counter = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{props.count}</strong></p>

            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { props.increment(); }}>
                Increment
                </button>
            <button type="button"
                className="btn btn-danger btn-lg"
                onClick={() => { props.decrement(); }}>
                Decrement
                </button>
        </React.Fragment>
    );

};

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return state.counter
}

export default connect(
    mapStateToProps,
    CounterStore.actionCreators
)(React.memo(Counter));
