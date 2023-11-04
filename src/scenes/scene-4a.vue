<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene4A1 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      The town of Arcadia continues in its state of unexplained chaos and bizarre occurrences, and
      You, despite the indication from the cat, proceeds on your path, dismissing the encounter as
      an oddity.
    </SceneDescription>

    <SceneLoader label="A year later..." :scene="Scene4A1" />
  </section>
</template>

<style scoped></style>
