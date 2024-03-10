<script setup lang="ts">
import InteractionLabel from "./interaction-label.vue"

defineProps<{
  text: string
  isStoryChoice?: boolean
}>()
</script>

<template>
  <div
    class="grid grid-cols-1 auto-rows-max gap-2 my-4 py-4"
    :class="!isStoryChoice ? 'border-t border-b border-solid border-gray-700' : ''"
  >
    <InteractionLabel :text="text" :isStoryChoice="isStoryChoice" />
    <p class="text-base">
      <slot />
    </p>
  </div>
</template>

<style scoped></style>
