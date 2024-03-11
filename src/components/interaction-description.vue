<script setup lang="ts">
import InteractionLabel from "./interaction-label.vue"

defineProps<{
  text: string
  isStoryChoice?: boolean
}>()
</script>

<template>
  <div
    class="grid grid-cols-1 auto-rows-max gap-2 py-4"
    :class="!isStoryChoice ? 'border-t border-b border-solid border-gray-800 shadow-2xl' : ''"
  >
    <InteractionLabel :text="text" :isStoryChoice="isStoryChoice" />
    <p class="text-base !text-gray-500">
      <slot />
    </p>
  </div>
</template>

<style scoped></style>
