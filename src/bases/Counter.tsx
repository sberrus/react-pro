import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter((counter) => counter + 1)
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Counter
