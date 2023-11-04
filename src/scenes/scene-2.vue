<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene2A, Scene3 } from "@/scenes"
import { h } from "vue"

const moreScene = h("SceneDescription", { id: "SceneIntro-2" }, "More scene here")
</script>
<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      You continue walking, visibly troubled, as you navigates through the peculiar occurrences.
      Suddenly, a cat appears, trotting alongside you.
    </SceneDescription>
    <SceneLoader label="Pay attention to the cat" :scene="Scene2A" />
    <SceneLoader label="Keep walking" :scene="Scene3" />
  </section>
</template>

<style scoped></style>
