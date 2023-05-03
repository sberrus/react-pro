import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue)

  const addCount = () => {
    setCounter((counter) => counter + 1)
  }
  const substractCount = () => {
    setCounter((counter) => counter - 1)
  }
  const resetCount = () => {
    setCounter(0)
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={addCount}>+1</button>
      <button onClick={resetCount}>reset</button>
      <button onClick={substractCount}>-1</button>
    </div>
  )
}

export default Counter
