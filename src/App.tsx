import Counter from './bases/Counter'
import CounterBy from './bases/CounterBy'
import CounterEffect from './bases/CounterEffect'
import CounterReducer from './counter-reducer/CounterReducer'
// import CounterReducer from './bases/CounterReducer'

const App = () => {
  return (
    <div>
      <h1>Hola mundo desde react</h1>
      <hr />
      <Counter />
      <CounterBy />
      <CounterEffect />
      <CounterReducer />
    </div>
  )
}

export default App
