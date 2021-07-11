export const computeMultiplication = (left: number, right: number): number =>
  left * right

// TODO: Add validation for: negative x positive
// TODO: Add validation for: positive x negative
// TODO: Refactor code with splitting to small functions
// TODO: Remove Math.pow
// TODO: Remove Math.abs
export const computeKaratsubaMultiplication = (
  left: number | string,
  right: number | string
): number => {
  const leftString = String(Math.abs(Number(left)))
  const rightString = String(Math.abs(Number(right)))
  const n = Number(leftString.length)
  if (n === Number(1) || n % 2 === 1) {
    return Number(left) * Number(right)
  }

  const a = Number(leftString.substring(0, leftString.length / 2))
  const b = Number(
    leftString.substring(leftString.length / 2, leftString.length)
  )
  const c = Number(rightString.substring(0, rightString.length / 2))
  const d = Number(
    rightString.substring(rightString.length / 2, rightString.length)
  )

  const p = a + b
  const q = c + d

  // Step 1
  const ac = computeKaratsubaMultiplication(a, c)

  // Step 2
  const bd = computeKaratsubaMultiplication(b, d)

  // Step 3
  const pq = computeKaratsubaMultiplication(p, q)
  const adbc = pq - ac - bd

  // Step 4
  const firstAnswerPart = Math.pow(10, n) * ac
  const secondAnswerPart = Math.pow(10, n / 2) * adbc
  const answer = firstAnswerPart + secondAnswerPart + bd

  return answer
}
