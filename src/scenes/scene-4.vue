<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene5, Scene4A } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      Suddenly, the shadow darts in front of you, causing you to halt abruptly. You look down to see
      a this cat again, her eyes shimmering with an otherworldly glow, standing on her hind legs in
      an almost human-like manner. She gracefully sweeps her right paw up towards the sky.
    </SceneDescription>

    <SceneLoader label="Look up" :scene="Scene5" />
    <SceneLoader label="Keep Walking" :scene="Scene4A" />
  </section>
</template>

<style scoped></style>
