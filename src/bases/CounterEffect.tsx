import { useCounter } from '../hooks/useCounter'

const CounterEffect = () => {
  const { counter, handleClick, elementToAnimate } = useCounter({ maxCount: 10 })

  return (
    <div>
      <h2>Counter Effect:</h2>
      <h3 ref={elementToAnimate}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default CounterEffect
