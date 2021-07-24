import { MultiplicationSignature, NumberPairs } from './multiplication.types'

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
