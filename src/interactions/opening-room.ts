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
  },
  {
    "target": "A prickling tingle",
    "action-look-at": {
      ifDefault:
        "There is no visible source for the prickling, but as you focus, it seems to intensify. The tingling begins to resemble tiny figures crawling just beneath the surface of your skin."
    }
  },
  {
    "target": "disembodied voice",
    "action-look-at": {
      ifDefault:
        "Concentrating on the voice reveals a hazy form emerging from the mist. It's a tall, thin silhouette with swirling shadow in place of features."
    }
  }
]

export default playerInteractionsOpeningRoom
