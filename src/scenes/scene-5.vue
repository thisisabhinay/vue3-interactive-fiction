<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene6 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      Following the cat's gesture, you look towards the sky, and there, among the clouds, to your
      disbelief, a second moon slowly comes into view. Blood red, its presence a revelation amidst
      the surreal sky. A moment of profound awe and shock spreads across your face as you beholds
      this astonishing sight.
    </SceneDescription>

    <SceneLoader label="Continue" :scene="Scene6" />
  </section>
</template>

<style scoped></style>
