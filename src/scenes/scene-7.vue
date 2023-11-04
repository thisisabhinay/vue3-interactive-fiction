<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene8 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      The cat is looking directly at you, her mouth moving in what seems like speech. Your eyes
      widen in shock as you realizes you can now hear the cat's voice! Cat: "Listen carefully. The
      world as we know will end in 365 days exactly from this moment onwards. You hold the key to
      humanity's salvation. But it all starts with making them aware of the second moon's presence.
      They can't see it, but its influence is profound."
    </SceneDescription>
    <SceneLoader label="Next" :scene="Scene8" />
  </section>
</template>

<style scoped></style>
