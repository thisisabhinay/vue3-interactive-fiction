<script setup lang="ts">
import { SceneExpander, SceneDescription } from "@/components"
import { h } from "vue"

const moreScene = h("SceneDescription", { id: "SceneIntro-2" }, "")
</script>
<template>
  <section id="SceneIntroMore">
    <SceneDescription>
      Welcome to the enigmatic town of Arcadia, where the inexplicable is becoming the new normal.
      Amongst this chaos, You are a young boy who wanders through these surreal streets, unaware of
      the destiny about to unfold.
    </SceneDescription>
    <SceneExpander label="Keep Walking" :scene="moreScene" />
  </section>
</template>

<style scoped></style>
