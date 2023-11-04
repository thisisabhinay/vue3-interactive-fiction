<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene4 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      Preoccupied, barely acknowledging the cat's presence, you focus on continuing your walk
      through the town square.
    </SceneDescription>
    <SceneDescription>
      The cat, frustrated, is not siting back and watching you leave.
    </SceneDescription>
    <SceneLoader label="Take a step" :scene="Scene4" />
  </section>
</template>

<style scoped></style>
