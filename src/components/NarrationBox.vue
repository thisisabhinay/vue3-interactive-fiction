<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <div
    id="Narration"
    class="grid grid-cols-1 gap-4 border-solid border-t border-b py-4 border-gray-700 italic text-gray-500 text-center"
  >
    <template v-for="(text, index) in data.text" :key="index">
      {{ text }}
    </template>
  </div>
</template>

<style scoped></style>
