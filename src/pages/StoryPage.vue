<script setup lang="ts">
import { NarrationBox, DialogueMC, DialogueOC } from "@/components"
import { sampleStory } from "@/data/story"
import { ref } from "vue"
</script>

<template>
  <main class="grid grid-cols-1 gap-10 max-w-md">
    <template v-for="(item, index) in sampleStory" :key="index">
      <DialogueMC v-if="item.name === 'LENA'" :data="item" />
      <DialogueOC v-if="item.name === 'BUZZ'" :data="item" />
      <NarrationBox v-if="item.type === 'narration'" :data="item" />
    </template>
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
