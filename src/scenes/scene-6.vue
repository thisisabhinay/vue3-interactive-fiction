<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene7 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      A second moon, visible only to those called upon by destiny, unveils itself to you.Shaken and
      bewildered, you <SceneLoader label="look down" :scene="Scene7" inline />
    </SceneDescription>
  </section>
</template>

<style scoped></style>
