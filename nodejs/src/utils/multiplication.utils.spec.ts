import { expect } from 'chai'
import {
  extractSignedValue,
  getSignedValue,
  isNegativeInput
} from './multiplication.utils'

describe('multiplication.utils', () => {
  describe('isNegativeInput', () => {
    it('return true when input value is negative number', () => {
      // Arrange
      const input = '-42'
      const expected = true

      // Actual
      const actual = isNegativeInput(input)

      // Assert
      expect(expected).equal(actual)
    })

    it('return false when input value is non-negative number', () => {
      // Arrange
      const input = '42'
      const expected = false

      // Actual
      const actual = isNegativeInput(input)

      // Assert
      expect(expected).equal(actual)
    })

    it('return false when input value is empty string', () => {
      // Arrange
      const input = ''
      const expected = false

      // Actual
      const actual = isNegativeInput(input)

      // Assert
      expect(expected).equal(actual)
    })

    it('return false when input value is zero', () => {
      // Arrange
      const input = '0'
      const expected = false

      // Actual
      const actual = isNegativeInput(input)

      // Assert
      expect(expected).equal(actual)
    })
  })

  describe('getSignedValue', () => {
    it('return negative value when left input value is negative number', () => {
      // Arrange
      const left = '-56'
      const right = '12'
      const multiplication = '672'
      const expected = '-672'

      // Actual
      const actual = getSignedValue(left, right, multiplication)

      // Assert
      expect(expected).equal(actual)
    })

    it('return negative value when right input value is negative number', () => {
      // Arrange
      const left = '56'
      const right = '-12'
      const multiplication = '672'
      const expected = '-672'

      // Actual
      const actual = getSignedValue(left, right, multiplication)

      // Assert
      expect(expected).equal(actual)
    })

    it('return positive value when right and left input values are negative numbers', () => {
      // Arrange
      const left = '-56'
      const right = '-12'
      const multiplication = '672'
      const expected = '672'

      // Actual
      const actual = getSignedValue(left, right, multiplication)

      // Assert
      expect(expected).equal(actual)
    })

    it('return positive value when right and left input values are positive numbers', () => {
      // Arrange
      const left = '56'
      const right = '12'
      const multiplication = '672'
      const expected = '672'

      // Actual
      const actual = getSignedValue(left, right, multiplication)

      // Assert
      expect(expected).equal(actual)
    })
  })

  describe('extractSignedValue', () => {
    it('return positive value when input is negative number', () => {
      // Arrange
      const input = '-56'
      const expected = '56'

      // Actual
      const actual = extractSignedValue(input)

      // Assert
      expect(expected).equal(actual)
    })

    it('return positive value when input is positive number', () => {
      // Arrange
      const input = '56'
      const expected = '56'

      // Actual
      const actual = extractSignedValue(input)

      // Assert
      expect(expected).equal(actual)
    })

    it('return empty string when input is empty string', () => {
      // Arrange
      const input = ''
      const expected = ''

      // Actual
      const actual = extractSignedValue(input)

      // Assert
      expect(expected).equal(actual)
    })

    it('return zero when input is zero', () => {
      // Arrange
      const input = '0'
      const expected = '0'

      // Actual
      const actual = extractSignedValue(input)

      // Assert
      expect(expected).equal(actual)
    })
  })
})
