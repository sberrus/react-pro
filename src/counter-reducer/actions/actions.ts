// types
export type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' } | { type: 'back' }

// actions creators
export const doReset = (): CounterAction => ({ type: 'reset' })

export const doIncreaseBy = (value: number): CounterAction => ({ type: 'increaseBy', payload: { value } })

export const doBack = (): CounterAction => ({ type: 'back' })
