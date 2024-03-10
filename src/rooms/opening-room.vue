<script setup lang="ts">
import GameRoom from "@/components/game-room.vue"
// import playerInteractionsOpeningRoom from "@/components/interactions/opening-room"
import InteractionDescription from "@/components/interaction-description.vue"
import SceneRoom1_0 from "@/scenes/scene-room-1-0.vue"
import SceneRoom1_1 from "@/scenes/scene-room-1-1.vue"
import SceneRoom1_2 from "@/scenes/scene-room-1-2.vue"
import SceneRoom1_3 from "@/scenes/scene-room-1-3.vue"
</script>

<template>
  <section id="SceneIntro">
    <SceneRoom1_0 />
    <InteractionDescription text="Look at: The Blurred World" isStoryChoice>
      Focusing on the blurring world sends spirals of color twisting at the edges of your vision,
      causing a faint sense of vertigo. The shapes seem to coalesce momentarily, hinting at
      impossible landscapes and distorted figures.
    </InteractionDescription>

    <GameRoom
      label="Attempt to move: (Test the physical constraints of this world)"
      :scene="SceneRoom1_1"
    />
    <GameRoom
      label="'Who are you?'': (Seek information on the voice and this place)"
      :scene="SceneRoom1_2"
    />
    <GameRoom
      label="Focus on the voice: (Try to discern a location or source)"
      :scene="SceneRoom1_3"
    />
  </section>
</template>

<style scoped></style>
