expect.extend({
  toBeNullOrString (received) {
    if (received === null || typeof received === 'string') {
      return {
        message: () => `expected ${received} to be null or string`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${received} to be null or string`,
        pass: false
      }
    }
  },
  toBeNullOrNumber (received) {
    if (received === null || typeof received === 'number') {
      return {
        message: () => `expected ${received} to be null or string`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${received} to be null or string`,
        pass: false
      }
    }
  },
  toBeNullOrArray (received) {
    if (received === null || Array.isArray(received)) {
      return {
        message: () => `expected ${received} to be null or array`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${received} to be null or array`,
        pass: false
      }
    }
  },
  toBeNullOrAnything (received) {
    return {
      message: () => `expected ${received} to be null or object`,
      pass: true
    }
  }
})
