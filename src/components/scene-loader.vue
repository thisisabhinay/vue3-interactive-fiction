<script setup lang="ts">
import { ref, inject } from "vue"

const { loadScene } = inject<any>("sceneLoader")

const props = defineProps<{
  label: string
  scene: any
  inline?: boolean
}>()

const loaded = ref<boolean>(false)

function loadProvidedScene() {
  loaded.value = true
  loadScene(props.scene)
}
</script>

<template>
  <component v-if="loaded" :is="scene" />
  <div
    v-else
    class="text-blue-400 text-base font-medium cursor-pointer ease-in hover:text-blue-600 w-max"
    :class="inline ? ' inline-flex' : 'py-3'"
    @click="loadProvidedScene"
  >
    {{ label }}
  </div>
</template>

<style scoped></style>
