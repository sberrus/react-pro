import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

interface CounterState {
  count: number
  clicks: number
}

const CounterBy = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState<CounterState>({ count: initialValue, clicks: 0 })

  const addCount = (count: number) => {
    setCounter((prev) => ({
      count: prev.count + count,
      clicks: prev.clicks + 1
    }))
  }

  return (
    <div>
      <h2>Counter By: {counter.count}</h2>
      <small>total clicks: {counter.clicks}</small>
      <br />
      <button
        onClick={() => {
          addCount(1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          addCount(5)
        }}
      >
        +5
      </button>
    </div>
  )
}

export default CounterBy
