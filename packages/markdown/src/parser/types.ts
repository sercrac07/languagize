export const NodeType = {
  Program: 'PROGRAM',
}

export type Node = ProgramNode

export interface ProgramNode {
  type: typeof NodeType.Program
  children: Node[]
}
