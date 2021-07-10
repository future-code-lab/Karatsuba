import {
  computeKaratsubaMultiplication,
  computeMultiplication
} from './multiplication'
import { expect } from 'chai'

describe('multiplication', () => {
  it('test simple self-multiplication', () => {
    // Arrange
    const downBound = -100
    const upBound = 100

    for (let index = downBound; index < upBound; index++) {
      const expected = index * index

      // Actual
      const defaultActual = computeMultiplication(index, index)
      const karatsubaActual = computeKaratsubaMultiplication(index, index)

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
      const karatsubaActual = computeKaratsubaMultiplication(index, index)

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
      const karatsubaActual = computeKaratsubaMultiplication(index, index)

      // Assert
      expect(expected).equal(defaultActual)
      expect(expected).equal(karatsubaActual)
    }
  })
})
