import { gsap } from 'gsap'
import { useState, useRef } from 'react'

interface CounterHookProps {
  maxCount: number
}

export const useCounter = ({ maxCount }: CounterHookProps) => {
  const [counter, setCounter] = useState(5)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elementToAnimate = useRef<any>(null)

  const handleClick = () => {
    if (counter < maxCount) {
      setCounter((prev) => prev + 1)
      return
    }
    console.log('Se llego al valor máximo')

    // this is a bad practice but is only for
    // showing pourpose

    const tl = gsap.timeline()

    tl.to(elementToAnimate.current, {
      y: -10,
      duration: 0.2,
      ease: 'ease.out'
    })
    tl.to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: 'bounce.out'
    })
  }

  return { handleClick, counter, elementToAnimate }
}
