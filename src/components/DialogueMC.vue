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
  <div id="DialogueMC" class="grid grid-cols-[1fr_64px] gap-4">
    <div class="flex flex-col gap-3 bg-slate-700 rounded-xl p-4 text-sm">
      <template v-for="(text, index) in data.text" :key="index">
        {{ text }}
      </template>
    </div>
    <img :src="getImageURL(data.avatar)" class="w-full h-auto rounded-full" />
  </div>
</template>

<style scoped></style>
