import { Token, TokenType } from './types'

class Lexer {
  private source = ''
  private position = { row: 0, column: 0 }
  private cursor = 0

  private Spec: [RegExp, (typeof TokenType)[keyof typeof TokenType]][] = [
    [/^\s+/, TokenType.Whitespace],
    [/^[^\s]+/, TokenType.Word],
  ]

  private getPosition(): typeof this.position {
    return { ...this.position }
  }
  private hasRemaining(): boolean {
    return this.cursor < this.source.length
  }

  public tokenize(source: string): Token[] {
    const tokens: Token[] = []
    this.source = source

    while (this.hasRemaining()) {
      tokens.push(this.match())
    }

    tokens.push({ type: TokenType.EndOfFile })

    return tokens
  }

  private match(): Token {
    for (const [regex, type] of this.Spec) {
      const match = regex.exec(this.source.slice(this.cursor))

      if (!match) continue

      const value = match[0]
      const start = this.getPosition()

      this.cursor += value.length
      this.position.column += value.length

      if (value.includes('\n')) {
        this.position.row++
        this.position.column = 0
      }

      return {
        type,
        value,
        range: {
          start,
          end: this.getPosition(),
        },
      }
    }

    const pos = this.getPosition()
    throw new Error(`Unexpected token "${this.source[this.cursor]}" at ${pos.row}:${pos.column}`)
  }
}

export function tokenize(source: string): Token[] {
  return new Lexer().tokenize(source)
}
