import { MultiplicationSignature, NumberPairs } from './multiplication.types'

export const NEGATIVE_SIGN = '-'

export const getNumberPairs = (input: string): NumberPairs => {
  const middle = input.length / 2
  const left = input.substring(0, middle)
  const right = input.substring(middle, input.length)

  return {
    left,
    right
  }
}

export const calculateSimpleMultiplication: MultiplicationSignature<number> = (
  left: string,
  right: string
): number => parseInt(left) * parseInt(right)

export const getPairSum = (pair: NumberPairs): string =>
  (parseInt(pair.left) + parseInt(pair.right)).toString()

export const isFastMultiplicative = (
  left: string,
  right: string,
  limit: number
): boolean => left.length < limit || right.length < limit

export const isNegativeInput = (value: string): boolean => {
  if (value.length) {
    return value[0] === NEGATIVE_SIGN
  }

  return false
}

export const getSignedValue = (
  left: string,
  right: string,
  multiplication: string
): string => {
  const isLeftUnsigned = isNegativeInput(left)
  const isRightUnsigned = isNegativeInput(right)
  const isSignedValue = isLeftUnsigned && isRightUnsigned
  if (!isSignedValue && (isLeftUnsigned || isRightUnsigned)) {
    return `${NEGATIVE_SIGN}${multiplication}`
  }

  return multiplication
}

export const extractSignedValue = (input: string): string => {
  if (isNegativeInput(input)) {
    return input.replace(NEGATIVE_SIGN, '')
  }

  return input
}

export const removePairSign = (pair: NumberPairs): NumberPairs => {
  const { left, right } = pair

  return {
    left: extractSignedValue(left),
    right: extractSignedValue(right)
  }
}
