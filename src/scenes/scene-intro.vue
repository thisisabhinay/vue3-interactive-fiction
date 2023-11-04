<script setup lang="ts">
import { SceneExpander, SceneDescription } from "@/components"
import { SceneIntroMore } from "@/scenes"
import { h } from "vue"
</script>
<template>
  <section id="SceneIntro">
    <SceneDescription narration>
      In a quaint yet surreal town, with quirky buildings and a sky filled with unexplainable
      phenomena. Our protagonist, a young boy, is seen walking through the town square. Unexplained
      events are happening all around - sudden explosions, strange disruptions to the environment,
      and odd, unexplained natural occurrences. He seems perturbed by the chaos as he keeps moving.
    </SceneDescription>
    <SceneExpander label="Continue" :scene="SceneIntroMore" />
  </section>
</template>

<style scoped></style>
