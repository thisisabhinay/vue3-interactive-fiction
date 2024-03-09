<script setup lang="ts">
import { GameRoom, SceneDescription } from "@/components"
import { Scene1_2 } from "@/scenes"
</script>

<template>
  <section id="SceneIntro">
    <SceneDescription narration>
      In a quaint yet surreal town, with quirky buildings and a sky filled with unexplainable
      phenomena. Our protagonist, a young boy, is seen walking through the town square. Unexplained
      events are happening all around - sudden explosions, strange disruptions to the environment,
      and odd, unexplained natural occurrences. He seems perturbed by the chaos as he keeps moving.
    </SceneDescription>
    <GameRoom label="Continue" :scene="Scene1_2" />
  </section>
</template>

<style scoped></style>
