<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  name: string
}>()

const roomNameIdentifier = computed(() => props.name?.toLowerCase()?.split(" ").join("-"))
</script>
<template>
  <section
    id="GameRoom"
    :data-name="roomNameIdentifier"
    class="grid grid-cols-1 auto-rows-max gap-0"
  >
    <div class="inline-flex items-center justify-center w-full mb-4">
      <hr class="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      <span
        class="absolute px-3 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900 text-xs tracking-wide uppercase font-semibold dark:text-gray-500"
      >
        {{ name }}
      </span>
    </div>
    <div class="game-room-content" :data-room="roomNameIdentifier">
      <slot />
    </div>
  </section>
</template>

<style scoped></style>
