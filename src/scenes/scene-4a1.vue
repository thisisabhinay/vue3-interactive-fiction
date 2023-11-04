<script setup lang="ts">
import { SceneLoader, SceneDescription } from "@/components"
import { Scene1_1 } from "@/scenes"
</script>

<template>
  <section id="SceneKeepWalk1">
    <SceneDescription>
      You, now engrossed in your daily routine, fails to recall the peculiar encounter with the cat
      and the warning about the impending doom. As youy goes about your chores, a sudden flash of
      blinding light envelops everything around you. The air ripples, and the town of Arcadia is
      flooded with an overwhelming, blinding white light.
    </SceneDescription>

    <SceneDescription>
      In an instant, an absolute, eerie silence blankets the world. Time seems to stand still.
      There's no movement, no sound, just an unsettling, eternal stillness that engulfs everything.
    </SceneDescription>

    <SceneDescription>
      As the world fades into the blinding white void, it's clear that the end foretold by the cat
      has come to pass.
    </SceneDescription>

    <SceneDescription>
      The impact of the world's end resonates as a chilling reminder of the importance of heeding
      warnings and the consequences of overlooking the signs of impending doom. The screen remains
      silent and dark, leaving an indelible impression of the finality of the decision.
    </SceneDescription>

    <div class="py-3 font-bold uppercase">Game Over</div>

    <SceneLoader label="Play Again" :scene="Scene1_1" />
  </section>
</template>

<style scoped></style>
