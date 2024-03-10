<script setup lang="ts">
import GameRoom from "@/components/game-room.vue"
// import playerInteractionsOpeningRoom from "@/components/interactions/opening-room"
import SceneRoom1_0 from "@/scenes/scene-room-1-0.vue"
import SceneRoom1_1 from "@/scenes/scene-room-1-1.vue"
import SceneRoom1_2 from "@/scenes/scene-room-1-2.vue"
import SceneRoom1_3 from "@/scenes/scene-room-1-3.vue"
</script>

<template>
  <section id="SceneIntro">
    <SceneRoom1_0 />
    <figure
      class="grid grid-cols-1 auto-rows-max gap-2 my-4 py-4 border-t border-b border-solid border-gray-800"
    >
      <figcaption class="text-xs tracking-wide uppercase font-semibold text-gray-500">
        Look at: The Blurred World
      </figcaption>
      <p>
        Focusing on the blurring world sends spirals of color twisting at the edges of your vision,
        causing a faint sense of vertigo. The shapes seem to coalesce momentarily, hinting at
        impossible landscapes and distorted figures.
      </p>
    </figure>
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
