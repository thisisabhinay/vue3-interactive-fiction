export interface Interaction {
  target: string
  [key: `action-${string}`]: {
    ifDefault: string
    [key: `if${string}`]: string
  }
}
