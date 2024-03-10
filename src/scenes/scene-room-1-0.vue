<script setup lang="ts">
import { type ListChoice } from "@/types/story"
import SpeechText from "@/components/speech-text.vue"
import SceneDescription from "@/components/scene-description.vue"
import playerInteractionsOpeningRoom from "@/interactions/opening-room"
import ListChoices from "@/components/list-choices.vue"
import SceneRoom1_1 from "@/scenes/scene-room-1-1.vue"
import SceneRoom1_2 from "@/scenes/scene-room-1-2.vue"
import SceneRoom1_3 from "@/scenes/scene-room-1-3.vue"
import { INTERACTIVE_SELECTOR } from "@/constants/selectors"
import { watch, inject } from "vue"

const storyChoices: ListChoice[] = [
  { text: "Attempt to move: (Test the physical constraints of this world)", scene: SceneRoom1_1 },
  { text: "'Who are you?'': (Seek information on the voice and this place)", scene: SceneRoom1_2 },
  { text: "Focus on the voice: (Try to discern a location or source)", scene: SceneRoom1_3 }
]

const { playerAction } = inject<any>("player-action")

function triggerInteraction(event: Event) {
  console.log(event)
  const el = event.target as HTMLElement
  const targetName = el.innerText
  const interaction = playerInteractionsOpeningRoom?.find(
    (interaction) => interaction.target === targetName
  )

  console.log(targetName, interaction[playerAction.value])
}

function attachEventListeners() {
  if (!playerInteractionsOpeningRoom || !playerInteractionsOpeningRoom?.length) return

  const interactiveItems = document.querySelectorAll(INTERACTIVE_SELECTOR)
  Array.from(interactiveItems, (item) => {
    item.addEventListener("click", triggerInteraction)
  })
}

watch(playerAction, attachEventListeners)
</script>

<template>
  <SceneDescription
    :interactions="playerInteractionsOpeningRoom"
    @DOMUpdated="attachEventListeners"
  >
    <p class="first-letter:text-4xl first-letter:font-bold">
      The world is a blur. Colors swirl and drip like melting wax over your vision. You try to speak
      but only a croaking whisper escapes. A prickling tingle fills your limbs. Are you asleep?
      Awake? Somewhere in between?
    </p>
    <p>A disembodied voice, smooth yet tinged with an unsettling distortion, echoes around you.</p>

    <SpeechText>
      Welcome, wanderer. You are in the Dream Tapestry, a realm spun from the threads of the
      subconscious. Reality here is… malleable. Your will is your tool and your mind, the clay.
    </SpeechText>
  </SceneDescription>
  <ListChoices :choices="storyChoices" />
</template>

<style scoped></style>
