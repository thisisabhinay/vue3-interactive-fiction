<script setup lang="ts">
import { SceneDescription } from "@/components"

defineProps<{
  data: any
}>()

function getImageURL(fileName: string) {
  return `/images/${fileName}`
}
</script>

<template>
  <div id="DialogueOC" class="grid grid-cols-[64px_1fr] gap-4">
    <img :src="getImageURL(data.avatar)" class="w-full h-auto rounded-full" />
    <div class="flex flex-col gap-3 bg-gray-800 rounded-xl p-4 text-sm">
      <p v-for="(text, index) in data.text" :key="index">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
