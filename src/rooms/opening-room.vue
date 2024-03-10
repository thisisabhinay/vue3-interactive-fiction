<script setup lang="ts">
import { type ListChoice } from "@/types/story"
// import playerInteractionsOpeningRoom from "@/components/interactions/opening-room"
import ListChoices from "@/components/list-choices.vue"
import SceneRoom1_0 from "@/scenes/scene-room-1-0.vue"
import SceneRoom1_1 from "@/scenes/scene-room-1-1.vue"
import SceneRoom1_2 from "@/scenes/scene-room-1-2.vue"
import SceneRoom1_3 from "@/scenes/scene-room-1-3.vue"

const storyChoices: ListChoice[] = [
  { text: "Attempt to move: (Test the physical constraints of this world)", scene: SceneRoom1_1 },
  { text: "'Who are you?'': (Seek information on the voice and this place)", scene: SceneRoom1_2 },
  { text: "Focus on the voice: (Try to discern a location or source)", scene: SceneRoom1_3 }
]
</script>

<template>
  <section id="SceneIntro">
    <SceneRoom1_0 />
    <ListChoices :choices="storyChoices" />
  </section>
</template>

<style scoped></style>
