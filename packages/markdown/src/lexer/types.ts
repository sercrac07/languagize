interface Range {
  start: Position
  end: Position
}

interface Position {
  row: number
  column: number
}

export const TokenType = {
  Word: 'WORD',
  Whitespace: 'WHITESPACE',
  EndOfFile: 'END_OF_FILE',
} as const

/**
 *
 */
export type Token = WordToken | EndOfFileToken | WhitespaceToken

export interface WordToken {
  type: typeof TokenType.Word
  value: string
  range: Range
}

export interface WhitespaceToken {
  type: typeof TokenType.Whitespace
  value: string
  range: Range
}

export interface EndOfFileToken {
  type: typeof TokenType.EndOfFile
}
