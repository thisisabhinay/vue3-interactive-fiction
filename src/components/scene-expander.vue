<script setup lang="ts">
import { ref } from "vue"

defineProps<{
  label: string
  scene: any
}>()

const loadScene = ref<boolean>(false)
</script>

<template>
  <div v-if="loadScene" class="py-3">{{ label }}</div>
  <component v-if="loadScene" :is="scene" />
  <div
    v-else
    class="text-blue-400 text-base font-medium cursor-pointer ease-in hover:text-blue-600 py-3"
    @click="loadScene = true"
  >
    {{ label }}
  </div>
</template>

<style scoped></style>
