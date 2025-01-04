// Ignore errors in this file as it is used for testing
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { describe, expect, it } from 'vitest'
import { parse, Token, tokenize, TokenType } from '../packages/markdown/src'

describe('Markdown', () => {
  it('should tokenize', () => {
    expect(tokenize).toBeDefined()

    const paragraphTokens = tokenize('This is a paragraph.\nWith multiple lines.')
    const expectedParagraphTokens: Token[] = [
      { type: TokenType.Word, value: 'This', range: { start: { row: 0, column: 0 }, end: { row: 0, column: 4 } } },
      { type: TokenType.Whitespace, value: ' ', range: { start: { row: 0, column: 4 }, end: { row: 0, column: 5 } } },
      { type: TokenType.Word, value: 'is', range: { start: { row: 0, column: 5 }, end: { row: 0, column: 7 } } },
      { type: TokenType.Whitespace, value: ' ', range: { start: { row: 0, column: 7 }, end: { row: 0, column: 8 } } },
      { type: TokenType.Word, value: 'a', range: { start: { row: 0, column: 8 }, end: { row: 0, column: 9 } } },
      { type: TokenType.Whitespace, value: ' ', range: { start: { row: 0, column: 9 }, end: { row: 0, column: 10 } } },
      { type: TokenType.Word, value: 'paragraph.', range: { start: { row: 0, column: 10 }, end: { row: 0, column: 20 } } },
      { type: TokenType.NewLine, value: '\n', range: { start: { row: 0, column: 20 }, end: { row: 1, column: 0 } } },
      { type: TokenType.Word, value: 'With', range: { start: { row: 1, column: 0 }, end: { row: 1, column: 4 } } },
      { type: TokenType.Whitespace, value: ' ', range: { start: { row: 1, column: 4 }, end: { row: 1, column: 5 } } },
      { type: TokenType.Word, value: 'multiple', range: { start: { row: 1, column: 5 }, end: { row: 1, column: 13 } } },
      { type: TokenType.Whitespace, value: ' ', range: { start: { row: 1, column: 13 }, end: { row: 1, column: 14 } } },
      { type: TokenType.Word, value: 'lines.', range: { start: { row: 1, column: 14 }, end: { row: 1, column: 20 } } },
      { type: TokenType.EndOfFile, value: '', range: { start: { row: 1, column: 20 }, end: { row: 1, column: 20 } } },
    ]
    expect(paragraphTokens).toEqual(expectedParagraphTokens)

    const symbolsTokens = tokenize('*_`~^!#()[]|-\\')
    const expectedSymbolsTokens: Token[] = [
      { type: TokenType.Asterisk, value: '*', range: { start: { row: 0, column: 0 }, end: { row: 0, column: 1 } } },
      { type: TokenType.Underscore, value: '_', range: { start: { row: 0, column: 1 }, end: { row: 0, column: 2 } } },
      { type: TokenType.Backtick, value: '`', range: { start: { row: 0, column: 2 }, end: { row: 0, column: 3 } } },
      { type: TokenType.Tilde, value: '~', range: { start: { row: 0, column: 3 }, end: { row: 0, column: 4 } } },
      { type: TokenType.Caret, value: '^', range: { start: { row: 0, column: 4 }, end: { row: 0, column: 5 } } },
      { type: TokenType.Exclamation, value: '!', range: { start: { row: 0, column: 5 }, end: { row: 0, column: 6 } } },
      { type: TokenType.Hash, value: '#', range: { start: { row: 0, column: 6 }, end: { row: 0, column: 7 } } },
      { type: TokenType.ParenthesisOpen, value: '(', range: { start: { row: 0, column: 7 }, end: { row: 0, column: 8 } } },
      { type: TokenType.ParenthesisClose, value: ')', range: { start: { row: 0, column: 8 }, end: { row: 0, column: 9 } } },
      { type: TokenType.BracketOpen, value: '[', range: { start: { row: 0, column: 9 }, end: { row: 0, column: 10 } } },
      { type: TokenType.BracketClose, value: ']', range: { start: { row: 0, column: 10 }, end: { row: 0, column: 11 } } },
      { type: TokenType.Pipe, value: '|', range: { start: { row: 0, column: 11 }, end: { row: 0, column: 12 } } },
      { type: TokenType.Dash, value: '-', range: { start: { row: 0, column: 12 }, end: { row: 0, column: 13 } } },
      { type: TokenType.Backslash, value: '\\', range: { start: { row: 0, column: 13 }, end: { row: 0, column: 14 } } },
      { type: TokenType.EndOfFile, value: '', range: { start: { row: 0, column: 14 }, end: { row: 0, column: 14 } } },
    ]
    expect(symbolsTokens).toEqual(expectedSymbolsTokens)
  })

  it('should parse', () => {
    expect(parse).toBeDefined()
  })
})
