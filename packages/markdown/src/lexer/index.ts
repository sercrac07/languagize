import { Token } from './types'

class Lexer {
  private chars: string[] = []

  public tokenize(source: string): Token[] {
    const tokens: Token[] = []
    this.chars = source.split('')

    return tokens
  }
}

export function tokenize(source: string): Token[] {
  return new Lexer().tokenize(source)
}
