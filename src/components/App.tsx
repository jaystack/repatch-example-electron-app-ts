import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../types';
import { increment, changeName, setToZero, turnDirection } from '../actions';

class App extends React.PureComponent<{
  direction: number;
  counter: number;
  name: string;
  increment: Function;
  changeName: Function;
  setToZero: Function;
  turnDirection: Function;
}> {
  render() {
    const { counter, name, increment, changeName, setToZero, turnDirection, direction } = this.props;
    return (
      <div>
        <div><button onClick={() => increment()} style={{ fontSize: '30px' }}>{counter} {name}</button></div>
        <div>
          <button onClick={() => setToZero()}>Zero</button>
          <button onClick={() => turnDirection()}>Change direction: {direction}</button>
          <input value={name} onChange={(evt) => changeName(evt.target.value)} />
        </div>
      </div>
    );
  }
}

export default connect((state: State) => ({ counter: state.counter, name: state.name, direction: state.direction }), {
  increment,
  changeName,
  setToZero,
  turnDirection
})(App);
