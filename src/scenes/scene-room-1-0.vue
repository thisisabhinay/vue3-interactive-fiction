<script setup lang="ts">
import { type ListChoice } from "@/types/story"
import SpeechText from "@/components/speech-text.vue"
import SceneDescription from "@/components/scene-description.vue"
import InteractionDescription from "@/components/interaction-description.vue"
import ListChoices from "@/components/list-choices.vue"
import SceneRoom1_1 from "@/scenes/scene-room-1-1.vue"
import SceneRoom1_2 from "@/scenes/scene-room-1-2.vue"
import SceneRoom1_3 from "@/scenes/scene-room-1-3.vue"
import { actions, gameAction } from "@/constants/player-actions"
import { inject, ref, computed, toRaw } from "vue"

const storyChoices: ListChoice[] = [
  { text: "Attempt to move: (Test the physical constraints of this world)", scene: SceneRoom1_1 },
  { text: "'Who are you?'': (Seek information on the voice and this place)", scene: SceneRoom1_2 },
  { text: "Focus on the voice: (Try to discern a location or source)", scene: SceneRoom1_3 }
]

const defaultTheWorld = {
  [gameAction.LOOK_AT]: false,
  [gameAction.TOUCH]: false
}

const { playerAction } = inject<any>("player-action")

const theWorld = ref<any>(defaultTheWorld)

const interactionSpanClass = computed(() => {
  const sceneAllowedActions = [Object.keys(defaultTheWorld)]?.flat()

  if (!sceneAllowedActions?.includes(playerAction.value)) return ""

  const action = actions.find((action) => action.key === playerAction.value)
  return action ? `pointer-cursor underline decoration-${action.color}` : ""
})

function interactWithTheWorld() {
  if (!playerAction.value) return

  const temp = { ...toRaw(theWorld.value) }
  temp[playerAction.value] = true
  theWorld.value = temp

  console.log(theWorld.value)
}
</script>

<template>
  <SceneDescription>
    <p class="first-letter:text-4xl first-letter:font-bold">
      <span :class="interactionSpanClass" @click="interactWithTheWorld"> The world is a blur.</span>
      Colors swirl and drip like melting wax over your vision. You try to speak but only a croaking
      whisper escapes. A prickling tingle fills your limbs. Are you asleep? Awake? Somewhere in
      between?
    </p>
    <InteractionDescription v-if="theWorld[gameAction.LOOK_AT]" text="Look at: The Blurred World">
      <SceneDescription>
        Focusing on the blurring world sends spirals of color twisting at the edges of your vision,
        causing a faint sense of vertigo. The shapes seem to coalesce momentarily, hinting at
        impossible landscapes and distorted figures.
      </SceneDescription>
    </InteractionDescription>
    <InteractionDescription v-if="theWorld[gameAction.TOUCH]" text="Touch: The Blurred World">
      <SceneDescription>
        Reaching out feels disorienting. Your hand seems to pass through shifting mists and swirling
        hues. A cold tingle lingers on your fingers.
      </SceneDescription>
    </InteractionDescription>

    <p>A disembodied voice, smooth yet tinged with an unsettling distortion, echoes around you.</p>

    <SpeechText>
      Welcome, wanderer. You are in the Dream Tapestry, a realm spun from the threads of the
      subconscious. Reality here is… malleable. Your will is your tool and your mind, the clay.
    </SpeechText>
  </SceneDescription>

  <ListChoices :choices="storyChoices" />
</template>

<style scoped></style>
