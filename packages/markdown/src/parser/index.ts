import { tokenize } from '../lexer'
import { Token } from '../lexer/types'
import { Node, NodeType } from './types'

class Parser {
  private tokens: Token[] = []

  public parse(source: string): Node {
    const program: Node = { type: NodeType.Program, children: [] }
    this.tokens = tokenize(source)

    return program
  }
}

export function parse(source: string): Node {
  return new Parser().parse(source)
}
