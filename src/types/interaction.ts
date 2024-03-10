export interface Interaction {
  target: string
  [key: `x${string}`]: {
    ifDefault: string
    [key: `if${string}`]: string
  }
}
