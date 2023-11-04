<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene4 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      This cat, an enigmatic feline with a striking appearance, appeares beside you as you walking
      through the street. Her fur is a deep midnight black, seemingly iridescent under the peculiar
      lights that filled the sky. With piercing emerald-green eyes that seems to glint mysteriously,
      the cat has an air of intelligence that went beyond the ordinary.
    </SceneDescription>
    <SceneDescription> Cat: "Meow..." </SceneDescription>
    <SceneLoader label="Move on" :scene="Scene4" />
  </section>
</template>

<style scoped></style>
