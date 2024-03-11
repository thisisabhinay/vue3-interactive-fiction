<script setup lang="ts">
import generateInteractiveDOMText from "@/utils/generate-interactive-dom-text"
import { type Interaction } from "@/types/interaction"
import { SCENE_OG_HTML_ATTR } from "@/constants/selectors"
import { ref, onMounted, inject, watch } from "vue"

const { playerAction } = inject<any>("player-action")

const props = defineProps<{
  interactions?: Interaction[]
}>()

const emit = defineEmits<{
  (e: "DOMUpdated"): void
}>()

const container = ref<Element>()

function updateMarkup(action: string) {
  if (!props.interactions) return

  const result = generateInteractiveDOMText(container, props.interactions, action)
  container.value ? (container.value.innerHTML = result as string) : null

  emit("DOMUpdated")
}

onMounted(() => {
  // Persisting the original content as DOM state
  container.value?.setAttribute(SCENE_OG_HTML_ATTR, container.value?.innerHTML)
  updateMarkup(playerAction.value)
})

watch(playerAction, (action: string) => updateMarkup(action))
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
