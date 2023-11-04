<script setup lang="ts">
defineProps<{
  narration?: boolean
}>()
</script>

<template>
  <p class="py-3 text-base leading-6" :class="narration ? 'italic' : ''">
    <slot />
  </p>
</template>

<style scoped></style>
