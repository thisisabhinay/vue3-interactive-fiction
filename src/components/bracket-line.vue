<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  top?: boolean
  bottom?: boolean
}>()

const border = computed(() => {
  if (props?.top) return "border-t"
  if (props?.bottom) return "border-b"

  return ""
})
</script>

<template>
  <div class="w-full h-2 border-l border-r border-gray-600" :class="border" />
</template>

<style scoped></style>
