import { CounterAction } from '../actions/actions'
import { CounterState } from '../interfaces/interfaces'

export const counterReducerFunc = (state: CounterState, action: CounterAction): CounterState => {
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
