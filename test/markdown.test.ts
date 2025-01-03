// Ignore errors in this file as it is used for testing
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { describe, expect, it } from 'vitest'
import { tokenize } from '../packages/markdown/src'

describe('Markdown', () => {
  it('should tokenize', () => {
    expect(tokenize).toBeDefined()
  })
})
