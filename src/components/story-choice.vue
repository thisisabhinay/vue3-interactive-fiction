<script setup lang="ts">
import InteractionDescription from "@/components/interaction-description.vue"
import { ref } from "vue"

defineProps<{
  label: string
  scene: any
}>()

const emit = defineEmits<{
  (e: "click"): void
}>()

const loadScene = ref<boolean>(false)

function clickHandler() {
  loadScene.value = true
  emit("click")
}
</script>

<template>
  <InteractionDescription v-if="loadScene" :text="label" isStoryChoice>
    <component :is="scene" />
  </InteractionDescription>
  <div
    v-else
    class="text-blue-400 text-base font-medium cursor-pointer ease-in hover:text-blue-600 py-3 w-max"
    @click="clickHandler"
  >
    {{ label }}
  </div>
</template>

<style scoped></style>
