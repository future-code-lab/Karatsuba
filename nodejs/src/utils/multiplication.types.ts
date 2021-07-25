export type NumberPairs = {
  left: string
  right: string
}

export type MultiplicationSignature<T> = (left: string, right: string) => T

export enum Multiplications {
  FAST,
  SIMPLE
}
