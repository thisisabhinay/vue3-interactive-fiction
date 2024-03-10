<script setup lang="ts">
import generateInteractiveText from "@/utils/generate-interactive-text"
import { type Interaction } from "@/types/interaction"
import { ref, onMounted } from "vue"

const props = defineProps<{
  interactions?: Interaction[]
}>()

const container = ref<Element>()

function updateMarkup() {
  if (!props.interactions) return

  const result = generateInteractiveText(container, props.interactions)
  container.value ? (container.value.innerHTML = result as string) : null
}

onMounted(updateMarkup)
</script>

<template>
  <p
    ref="container"
    class="scene-description text-base leading-6 grid grid-cols-1 auto-rows-max gap-4"
  >
    <slot />
  </p>
</template>

<style scoped></style>
