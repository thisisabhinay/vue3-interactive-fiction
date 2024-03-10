<script setup lang="ts">
defineProps<{
  text: string
  isStoryChoice?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-2" :class="isStoryChoice ? 'relative -left-4' : ''">
    <div v-if="isStoryChoice" class="rounded-full bg-blue-500 h-2 w-2"></div>
    <span
      class="text-xs tracking-wide"
      :class="isStoryChoice ? 'text-blue-500' : 'text-gray-500 uppercase font-semibold'"
      >{{ text }}</span
    >
  </div>
</template>

<style scoped></style>
