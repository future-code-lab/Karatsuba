import {
  Multiplications,
  MultiplicationSignature,
  NumberPairs
} from './multiplication.types'
import {
  isFastMultiplicative,
  getNumberPairs,
  getPairSum,
  calculateSimpleMultiplication,
  getSignedValue,
  removePairSign
} from './multiplication.utils'

// It should be O(N^2)
export const computeMultiplication: MultiplicationSignature<string> = (
  left: string,
  right: string
): string => {
  const lefts = left.split('').reverse()
  const rights = right.split('').reverse()

  const stack: string | number[] = []

  for (let i = 0; i < lefts.length; i++) {
    for (let j = 0; j < rights.length; j++) {
      const m = calculateSimpleMultiplication(lefts[i], rights[j])
      stack[i + j] = stack[i + j] ? stack[i + j] + m : m
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const num = stack[i] % 10
    const move = Math.floor(stack[i] / 10)

    stack[i] = num

    if (stack[i + 1]) {
      stack[i + 1] += move
    } else if (move != 0) {
      stack[i + 1] = move
    }
  }

  const answer = stack.reverse().join('')

  // Write a sign
  return getSignedValue(left, right, answer)
}

export const getMultiplication = (
  multiplication: Multiplications,
  n: number,
  pair: NumberPairs
): string => {
  const { left, right } = removePairSign(pair)

  const sign = (answer: string) => getSignedValue(pair.left, pair.right, answer)

  switch (multiplication) {
    case Multiplications.FAST:
      return sign(getFastMultiplication(n)(left, right))

    case Multiplications.SIMPLE:
    default:
      return sign(computeMultiplication(left, right))
  }
}

// It should be O(N^~1.59..)
export const getFastMultiplication = (
  n: number
): MultiplicationSignature<string> => {
  const nFull = 10 ** n
  const nPart = 10 ** (n / 2)

  const computeFastMultiplication = (left: string, right: string): string => {
    if (isFastMultiplicative(left, right, n)) {
      return calculateSimpleMultiplication(left, right).toString()
    }

    const leftPairs = getNumberPairs(left)
    const rightPairs = getNumberPairs(right)

    // Step 1
    const ac = Number(
      computeFastMultiplication(leftPairs.left, rightPairs.left)
    )

    // Step 2
    const bd = Number(
      computeFastMultiplication(leftPairs.right, rightPairs.right)
    )

    // Step 3
    const p = getPairSum(leftPairs)
    const q = getPairSum(rightPairs)
    const pq = Number(computeFastMultiplication(p, q))
    const adbc = pq - ac - bd

    // Step 4
    const acFull = nFull * ac
    const adbcPart = nPart * adbc
    const answer = acFull + adbcPart + bd

    return answer.toString()
  }

  return computeFastMultiplication
}
