import { expect } from 'chai'
import {
  computeKaratsubaMultiplication,
  computeMultiplication
} from './multiplication'

describe('multiplication', () => {
  it('simple multiplication', () => {
    // Arrange
    const left = 5678
    const right = 1234
    const expected = 7006652

    // Actual
    const defaultActual = computeMultiplication(left, right)
    const karatsubaActual = Number(computeKaratsubaMultiplication(left, right))

    // Assert
    expect(expected).equal(karatsubaActual)
    expect(expected).equal(defaultActual)
  })

  it('simple self-multiplication', () => {
    // Arrange
    const downBound = 20
    const upBound = 20

    for (let index = downBound; index < upBound; index++) {
      const expected = index * index

      // Actual
      const defaultActual = computeMultiplication(index, index)
      const karatsubaActual = computeKaratsubaMultiplication(
        index.toString(),
        index.toString()
      )

      // Assert
      expect(expected).equal(defaultActual)
      expect(expected).equal(karatsubaActual)
    }
  })

  it('big simple self-multiplication', () => {
    // Arrange
    const downBound = -1000
    const upBound = 1000

    for (let index = downBound; index < upBound; index++) {
      const expected = index * index

      // Actual
      const defaultActual = computeMultiplication(index, index)
      const karatsubaActual = computeKaratsubaMultiplication(
        index.toString(),
        index.toString()
      )

      // Assert
      expect(expected).equal(defaultActual)
      expect(expected).equal(karatsubaActual)
    }
  })

  it('large simple self-multiplication', () => {
    // Arrange
    const downBound = -10000
    const upBound = 10000

    for (let index = downBound; index < upBound; index++) {
      const expected = index * index

      // Actual
      const defaultActual = computeMultiplication(index, index)
      const karatsubaActual = computeKaratsubaMultiplication(
        index.toString(),
        index.toString()
      )

      // Assert
      expect(expected).equal(defaultActual)
      expect(expected).equal(karatsubaActual)
    }
  })

  it('zero multiplications', () => {
    // Arrange
    const expected = 0

    // Actual
    const defaultZeroActual = computeMultiplication(0, 0)
    const defaultLeftNegativeActual = computeMultiplication(-1, 0)
    const defaultRightNegativeActual = computeMultiplication(0, -1)

    const karatsubaLeftNegativeActual = computeMultiplication(-1, 0)
    const karatsubaRightNegativeActual = computeMultiplication(0, -1)
    const karatsubaZeroActual = computeKaratsubaMultiplication('0', '0')

    // Assert
    expect(expected).equal(defaultZeroActual)
    expect(expected).equal(defaultLeftNegativeActual)
    expect(expected).equal(defaultRightNegativeActual)
    expect(expected).equal(karatsubaZeroActual)
    expect(expected).equal(karatsubaLeftNegativeActual)
    expect(expected).equal(karatsubaRightNegativeActual)
  })
})
