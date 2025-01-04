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
  NewLine: 'NEW_LINE',
  Asterisk: 'ASTERISK',
  Underscore: 'UNDERSCORE',
  Backtick: 'BACKTICK',
  Tilde: 'TILDE',
  Caret: 'CARET',
  Exclamation: 'EXCLAMATION',
  Hash: 'HASH',
  ParenthesisOpen: 'PARENTHESIS_OPEN',
  ParenthesisClose: 'PARENTHESIS_CLOSE',
  BracketOpen: 'BRACKET_OPEN',
  BracketClose: 'BRACKET_CLOSE',
  Pipe: 'PIPE',
  Dash: 'DASH',
  Backslash: 'BACKSLASH',
} as const

/**
 *
 */
export type Token =
  | WordToken
  | EndOfFileToken
  | WhitespaceToken
  | NewLineToken
  | AsteriskToken
  | UnderscoreToken
  | BacktickToken
  | TildeToken
  | CaretToken
  | ExclamationToken
  | HashToken
  | ParenthesisOpenToken
  | ParenthesisCloseToken
  | BracketOpenToken
  | BracketCloseToken
  | PipeToken
  | DashToken
  | BackslashToken

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
  value: string
  range: Range
}

export interface NewLineToken {
  type: typeof TokenType.NewLine
  value: string
  range: Range
}

export interface AsteriskToken {
  type: typeof TokenType.Asterisk
  value: string
  range: Range
}

export interface UnderscoreToken {
  type: typeof TokenType.Underscore
  value: string
  range: Range
}

export interface BacktickToken {
  type: typeof TokenType.Backtick
  value: string
  range: Range
}

export interface TildeToken {
  type: typeof TokenType.Tilde
  value: string
  range: Range
}

export interface CaretToken {
  type: typeof TokenType.Caret
  value: string
  range: Range
}

export interface ExclamationToken {
  type: typeof TokenType.Exclamation
  value: string
  range: Range
}

export interface HashToken {
  type: typeof TokenType.Hash
  value: string
  range: Range
}

export interface ParenthesisOpenToken {
  type: typeof TokenType.ParenthesisOpen
  value: string
  range: Range
}

export interface ParenthesisCloseToken {
  type: typeof TokenType.ParenthesisClose
  value: string
  range: Range
}

export interface BracketOpenToken {
  type: typeof TokenType.BracketOpen
  value: string
  range: Range
}

export interface BracketCloseToken {
  type: typeof TokenType.BracketClose
  value: string
  range: Range
}

export interface PipeToken {
  type: typeof TokenType.Pipe
  value: string
  range: Range
}

export interface DashToken {
  type: typeof TokenType.Dash
  value: string
  range: Range
}

export interface BackslashToken {
  type: typeof TokenType.Backslash
  value: string
  range: Range
}
