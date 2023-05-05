import { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [counter, setCounter] = useState(5)

  const MAXIMUM_COUNT = 10

  const handleClick = () => {
    if (counter < MAXIMUM_COUNT) {
      setCounter((prev) => prev + 1)
    }
  }

  useEffect(() => {
    return () => {
      if (counter < 10) return

      console.log('Se llego al valor máximo')
    }
  }, [counter])

  return (
    <div>
      <h2>Counter Effect: {counter}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default CounterEffect
