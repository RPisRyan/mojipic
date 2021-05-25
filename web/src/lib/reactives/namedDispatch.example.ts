import { useReducer } from 'react'
import { makeNamedDispatch } from './namedDispatch'

type CalculatorState = {
  value: number
}

type CalculatorAction = { type: 'add'; amount: number } | { type: 'clear' }

function calculatorReduce(state: CalculatorState, action: CalculatorAction) {
  switch (action.type) {
    case 'add':
      return { value: state.value + action.amount }
    case 'clear':
      return { value: 0 }
  }
}

function useDiscriminatedCalc() {
  const [state, dispatch] = useReducer(calculatorReduce, { value: 0 })
  const dispatchNamed = makeNamedDispatch(dispatch)
  dispatchNamed('add', { amount: 1 })
}
