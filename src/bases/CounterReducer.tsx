import { useReducer } from 'react'

const CounterReducer = () => {
  /**
   * Use reducer se suele utilizar para cuando
   * sabemos que vamos a trabajar con un estado que
   * va a ser más complejo de lo usual.
   */

  /**
   * El hook consta de 3 argumentos, uno para el reducer
   * (Misma filosofia de redux siendo esta una funcion
   * pura que va a manejar el estado),
   * el segundo va a ser el estado inicial; y el tercero
   * es una función que podemos usar para disparar un
   * primer dispatch programaticamente si tenemos algún
   * proceso que sea ejecutado luego de algún proceso pesado.
   */
  interface CounterState {
    counter: number
    previous: number | null
    changes: number
  }

  type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' } | { type: 'back' }

  const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: null,
    changes: 0
  }

  const counterReducerFunc = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
      case 'increaseBy':
        return {
          counter: state.counter + action.payload.value,
          previous: state.counter,
          changes: state.changes + 1
        }

      case 'back':
        return {
          counter: state.previous ? state.previous : 0,
          previous: state.counter,
          changes: state.changes + 1
        }

      case 'reset':
        return {
          counter: 0,
          previous: null,
          changes: 0
        }

      default:
        return state
    }
  }

  const [{ counter, previous, changes }, dispatch] = useReducer(counterReducerFunc, INITIAL_STATE)

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } })
  }

  const backToPreviousCount = () => {
    dispatch({ type: 'back' })
  }

  return (
    <div>
      <h2>Counter Reducer: {counter}</h2>
      <small>Changes {changes}</small>
      <br />
      <h5>Previous Value: {previous}</h5>
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
