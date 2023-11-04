<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene1_1 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      You, overwhelmed by the revelation, tries to comprehend the situation.
    </SceneDescription>

    <SceneDescription italic>
      And so, Your journey to save humanity begins, in a town teeming with mystery and the imminent
      threat of an unknown apocalypse.
    </SceneDescription>

    <div class="py-3 font-bold uppercase">Demo End</div>

    <SceneLoader label="Play Again" :scene="Scene1_1" />
  </section>
</template>

<style scoped></style>
