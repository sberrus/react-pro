// imports
import { useReducer } from 'react'
// reducer
import { counterReducerFunc } from './reducer/counterReducer'
// types
import { CounterState } from './interfaces/interfaces'
import { doBack, doIncreaseBy, doReset } from './actions/actions'

const CounterReducer = () => {
  const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: null,
    changes: 0
  }

  const [{ counter, previous, changes }, dispatch] = useReducer(counterReducerFunc, INITIAL_STATE)

  const handleReset = () => {
    dispatch(doReset())
  }

  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value))
  }

  const backToPreviousCount = () => {
    dispatch(doBack())
  }

  return (
    <div>
      <h2>Counter Reducer Segmentado: {counter}</h2>
      <small>Changes {changes}</small>
      <br />
      <h5>Previous Value: {previous ? previous : 0}</h5>
      <button onClick={handleReset}>reset</button>
      <button
        onClick={() => {
          increaseBy(1)
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          increaseBy(5)
        }}
      >
        + 5
      </button>
      <button
        onClick={() => {
          increaseBy(10)
        }}
      >
        + 10
      </button>

      {previous != null && <button onClick={backToPreviousCount}>Back</button>}
    </div>
  )
}

export default CounterReducer
