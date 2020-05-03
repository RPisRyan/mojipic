export interface Stack {
  lines: StackLine[]
}

export interface StackLine {
  characters: string[]
}

export interface CharacterEvent {
  value: string
  position: number[]
}
