import { expect } from 'chai'
import { performance } from 'perf_hooks'
import { getMultiplication } from './multiplication'
import { Multiplications } from './multiplication.types'

describe('multiplication', () => {
  const perf = {
    start: 0,
    end: 0
  }

  beforeEach(() => {
    perf.start = performance.now()
  })

  afterEach(() => {
    const metric = (performance.now() - perf.start) / 10

    console.log('Took', metric.toFixed(4), 'milliseconds to calculate')
  })

  it('Simple: positive x positive - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '56'
    const right = '12'
    const expected = '672'

    // Actual
    const actual = getMultiplication(Multiplications.SIMPLE, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Simple: negative x positive - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '-56'
    const right = '12'
    const expected = '-672'

    // Actual
    const actual = getMultiplication(Multiplications.SIMPLE, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Simple: positive x negative - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '56'
    const right = '-12'
    const expected = '-672'

    // Actual
    const actual = getMultiplication(Multiplications.SIMPLE, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Simple: negative x negative - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '-56'
    const right = '-12'
    const expected = '672'

    // Actual
    const actual = getMultiplication(Multiplications.SIMPLE, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Fast: positive x positive - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '56'
    const right = '12'
    const expected = '672'

    // Actual
    const actual = getMultiplication(Multiplications.FAST, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Fast: negative x positive - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '-56'
    const right = '12'
    const expected = '-672'

    // Actual
    const actual = getMultiplication(Multiplications.FAST, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Fast: positive x negative - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '56'
    const right = '-12'
    const expected = '-672'

    // Actual
    const actual = getMultiplication(Multiplications.FAST, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Fast: negative x negative - simple multiplication (2 digits)', () => {
    // Arrange
    const n = 2
    const left = '-56'
    const right = '-12'
    const expected = '672'

    // Actual
    const actual = getMultiplication(Multiplications.FAST, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Simple: simple multiplication (4 digits)', () => {
    // Arrange
    const n = 4
    const left = '5678'
    const right = '1234'
    const expected = '7006652'

    // Actual
    const actual = getMultiplication(Multiplications.SIMPLE, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Fast: simple multiplication (4 digits)', () => {
    // Arrange
    const n = 4
    const left = '5678'
    const right = '1234'
    const expected = '7006652'

    // Actual
    const actual = getMultiplication(Multiplications.FAST, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Simple: simple multiplication (8 digits)', () => {
    // Arrange
    const n = 8
    const left = '56785678'
    const right = '12341234'
    const expected = '700805340046652'

    // Actual
    const actual = getMultiplication(Multiplications.SIMPLE, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Fast: simple multiplication (8 digits)', () => {
    // Arrange
    const n = 8
    const left = '56785678'
    const right = '12341234'
    const expected = '700805340046652'

    // Actual
    const actual = getMultiplication(Multiplications.FAST, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Simple: large multiplication (128 digits)', () => {
    // Arrange
    const n = 128
    const left =
      '56785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678'
    const right =
      '12341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234'
    const expected =
      '700805354062759011174644817216995226875422815808933628636390991834456973050040277555108246098137166451918719224657739301282863545867233988125285175782304703117576484121059370663539001164842956942959022374884753201792826547381210768341560628710135740046652'

    // Actual
    const actual = getMultiplication(Multiplications.SIMPLE, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })

  it('Fast: large multiplication (128 digits)', () => {
    // Arrange
    const n = 128
    const left =
      '56785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678'
    const right =
      '1234123412341234123412341234123412341234123412341234123412341234'
    const expected = '7.008053540627591e+190'

    // Actual
    const actual = getMultiplication(Multiplications.FAST, n, {
      left,
      right
    })

    // Assert
    expect(expected).equal(actual)
  })
})
