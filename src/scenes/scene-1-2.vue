<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene2 } from "@/scenes"
import { h } from "vue"

const moreScene = h("SceneDescription", { id: "SceneIntro-2" }, "More scene here")
</script>
<template>
  <section id="SceneIntroMore">
    <SceneDescription>
      Welcome to the enigmatic town of Arcadia, where the inexplicable is becoming the new normal.
      Amongst this chaos, You are a young boy who wanders through these surreal streets, unaware of
      the destiny about to unfold.
    </SceneDescription>
    <SceneLoader label="Keep walking" :scene="Scene2" />
  </section>
</template>

<style scoped></style>
