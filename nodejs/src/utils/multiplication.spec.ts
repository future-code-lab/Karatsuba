import { expect } from 'chai'
import { performance } from 'perf_hooks'
import { getFastMultiplication, computeMultiplication } from './multiplication'

describe('multiplication', () => {
  const DEFAULT_PERFORMANCE_TRACK_COUNT = 10

  const trackPerformance = (
    callback: () => void,
    logPostfix: string,
    count = DEFAULT_PERFORMANCE_TRACK_COUNT
  ): number => {
    const start = performance.now()

    for (let i = 0; i < count; i++) {
      callback()
    }

    const end = performance.now()
    const metric = (end - start) / 10

    console.log(
      'Took',
      metric.toFixed(4),
      'milliseconds to calculate',
      logPostfix
    )

    return metric
  }

  const getSpeedMultiplication =
    (left: string, right: string, n: number, expectedTimeout: number) => () => {
      // Actual

      const fastMultiplication = getFastMultiplication(n)

      const defaultActual = trackPerformance(() => {
        computeMultiplication(left, right)
      }, 'default')

      const fastActual = trackPerformance(() => {
        fastMultiplication(left, right)
      }, 'fast')

      // Side-by-side multiplication
      const bothActual = trackPerformance(() => {
        computeMultiplication(left, right)
        fastMultiplication(left, right)
      }, 'both')

      // Assert
      expect(expectedTimeout).greaterThan(defaultActual)
      expect(expectedTimeout).greaterThan(fastActual)
      expect(expectedTimeout).greaterThan(bothActual)
    }

  it('simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '56'
    const right = '12'
    const expected = '672'
    const fastMultiplication = getFastMultiplication(n)

    // Actual
    const defaultActual = computeMultiplication(left, right)
    const fastActual = fastMultiplication(left, right)

    // Assert
    expect(expected).equal(fastActual)
    expect(expected).equal(defaultActual)
  })

  it('simple multiplication (4 digits)', () => {
    // Arrange
    const n = 4
    const left = '5678'
    const right = '1234'
    const expected = '7006652'
    const fastMultiplication = getFastMultiplication(n)

    // Actual
    const defaultActual = computeMultiplication(left, right)
    const fastActual = fastMultiplication(left, right)

    // Assert
    expect(expected).equal(fastActual)
    expect(expected).equal(defaultActual)
  })

  it('simple self-multiplication', () => {
    // Arrange
    const n = 2
    const input = '20'
    const expected = '400'
    const fastMultiplication = getFastMultiplication(n)

    // Actual
    const defaultActual = computeMultiplication(input, input)
    const fastActual = fastMultiplication(input, input)

    // Assert
    expect(expected).equal(fastActual)
    expect(expected).equal(defaultActual)
  })

  it('big simple self-multiplication', () => {
    // Arrange
    const n = 6
    const input = '100000'
    const expected = '10000000000'
    const fastMultiplication = getFastMultiplication(n)

    // Actual
    const defaultActual = computeMultiplication(input, input)
    const fastActual = fastMultiplication(input, input)

    // Assert
    expect(expected).equal(fastActual)
    expect(expected).equal(defaultActual)
  })

  it('large simple self-multiplication', () => {
    // Arrange
    const n = 10
    const input = '1000000000'
    const expected = '1000000000000000000'
    const fastMultiplication = getFastMultiplication(n)

    // Actual
    const defaultActual = computeMultiplication(input, input)
    const fastActual = fastMultiplication(input, input)

    // Assert
    expect(expected).equal(fastActual)
    expect(expected).equal(defaultActual)
  })

  it('zero multiplications', () => {
    // Arrange
    const n = 1
    const expected = 0
    const input = '0'
    const negative = '-1'
    const fastMultiplication = getFastMultiplication(n)

    // Actual
    const defaultZeroActual = computeMultiplication(input, input)
    const defaultLeftNegativeActual = computeMultiplication(negative, input)
    const defaultRightNegativeActual = computeMultiplication(input, negative)

    const fastLeftNegativeActual = fastMultiplication(negative, input)
    const fastRightNegativeActual = fastMultiplication(input, negative)
    const fastZeroActual = fastMultiplication(input, input)

    // Assert
    expect(expected).equal(defaultZeroActual)
    expect(expected).equal(defaultLeftNegativeActual)
    expect(expected).equal(defaultRightNegativeActual)
    expect(expected).equal(fastZeroActual)
    expect(expected).equal(fastLeftNegativeActual)
    expect(expected).equal(fastRightNegativeActual)
  })

  it(
    'speed of tin multiplication (2 digits)',
    getSpeedMultiplication('10', '30', 2, 2)
  )

  it(
    'speed of small multiplication (4 digits)',
    getSpeedMultiplication('1000', '3000', 4, 20)
  )

  it(
    'speed of medium multiplication (8 digits)',
    getSpeedMultiplication('11188833', '66655544', 8, 20000)
  )

  it(
    'speed of large multiplication (12 digits)',
    getSpeedMultiplication('111122223333', '999988887777', 12, 200000)
  )
})
