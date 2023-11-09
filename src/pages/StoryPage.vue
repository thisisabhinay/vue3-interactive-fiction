<script setup lang="ts">
import { SceneDescription } from "@/components"
import { PatCat, PawUp, CatSpeaking } from "@/interactions"
import { ref } from "vue"

const isCatPatted = ref<boolean>(false)
const lookedUp = ref<boolean>(false)
const translated = ref<boolean>(false)
</script>

<template>
  <main class="grid grid-cols-1 gap-5 max-w-md">
    <SceneDescription>
      You find yourself in a surreal world, surrounded by inexplicable events. There have been
      abrupt explosions, mysterious infrastructure damage, and bizarre natural phenomena, all
      leaving scientists and the public baffled. As you walk home from your late-night shift one
      evening, you notice a peculiar occurrence: a cat walking alongside you, almost as if it's
      attempting to guide you.
    </SceneDescription>
    <PatCat @flag="(value) => (isCatPatted = value)" />
    <SceneDescription v-if="isCatPatted">
      This cat, an enigmatic feline with a striking appearance, appeares beside you as you walking
      through the street. Her fur is a deep midnight black, seemingly iridescent under the peculiar
      lights that filled the sky. With piercing emerald-green eyes that seems to glint mysteriously,
      the cat has an air of intelligence that went beyond the ordinary.
    </SceneDescription>
    <SceneDescription v-else>
      Preoccupied, barely acknowledging the cat's presence, you focus on continuing your walk
      through the town square.
    </SceneDescription>
    <div class="h-px bg-gray-800 w-full" />
    <SceneDescription>
      Just as you're about to dismiss it as a figment of your imagination and continuing your walk
      through the town square, the cat unexpectedly halts your steps. It stands on its hind legs,
      pointing a paw toward the sky.
    </SceneDescription>
    <PawUp @flag="(value) => (lookedUp = value)" />
    <SceneDescription>
      Feeling compelled, you gaze upwards and, to your amazement, see a second moon hanging in the
      sky, a sight that fills you with both wonder and fear.
    </SceneDescription>

    <SceneDescription>
      As you returned your gaze down, the cat is looking directly at you, her mouth moving in what
      seems like speech. Your eyes widen in shock as you realizes you can now hear the cat's voice!
    </SceneDescription>
    <CatSpeaking @flag="(value) => (translated = value)" />
    <div v-if="translated">
      <SceneDescription>
        It delivers a grave message:
        <blockquote>
          The world will come to an end in precisely 365 days from this very moment.
        </blockquote>
        It instructs you that the salvation of humanity hinges on making people aware of the
        existence of this second moon, which affects the world in imperceptible yet crucial ways.
      </SceneDescription>
    </div>
    <div v-else>
      <SceneDescription>
        You choose to keep the knowledge of the second moon and the mysterious cat to yourself,
        feeling uncertain about how to proceed.
      </SceneDescription>
      <SceneDescription>
        Days pass, and the world seems to carry on as usual. However, as time ticks by, you notice
        subtle changes in the environment. People seem to grow more anxious, and unusual occurrences
        become more frequent. You overhear snippets of conversations about unexplained phenomena and
        the sense of impending doom.
      </SceneDescription>
      <SceneDescription>
        The cat, which now frequently appears in unexpected places, continues to communicate with
        you.
      </SceneDescription>
    </div>
    <div class="h-px bg-gray-800 w-full" />
    <SceneDescription> THE END </SceneDescription>
  </main>
</template>

<style>
blockquote {
  border-left: 0.125rem solid #666;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  quotes: "\201C" "\201D" "\2018" "\2019";
  font-style: oblique;
  font-size: 1.15rem;
  font-weight: 500;
}
</style>
