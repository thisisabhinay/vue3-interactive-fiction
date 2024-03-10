export interface Interaction {
  target: string
  [key: `action-${string}`]: {
    ifDefault: string
    [key: `if${string}`]: string
  }
}

export interface PlayerInteraction {
  label: string
  description?: string
}
