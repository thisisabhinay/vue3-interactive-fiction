import { type Interaction } from "@/types/interaction"

const playerInteractionsOpeningRoom: Interaction[] = [
  {
    "target": "The world is a blur",
    "action-look-at": {
      ifDefault:
        "Focusing on the blurring world sends spirals of color twisting at the edges of your vision, causing a faint sense of vertigo. The shapes seem to coalesce momentarily, hinting at impossible landscapes and distorted figures."
    },
    "action-touch": {
      ifDefault:
        "Reaching out feels disorienting. Your hand seems to pass through shifting mists and swirling hues. A cold tingle lingers on your fingers."
    }
  },
  {
    "target": "croaking whisper",
    "action-use": {
      ifDefault:
        "Your attempt at speech comes out as a tortured rasp, echoing strangely within the amorphous space. The sound distorts and warps as it leaves you."
    }
  }
]

export default playerInteractionsOpeningRoom
