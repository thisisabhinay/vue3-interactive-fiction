<script setup lang="ts">
import OpeningRoom from "@/rooms/opening-room.vue"
import { inject, onBeforeMount, watchEffect } from "vue"

const { scene, sceneKey, loadScene } = inject<any>("sceneLoader")

function loadStartScene() {
  loadScene(OpeningRoom)
}

onBeforeMount(loadStartScene)

watchEffect(() => {
  console.log("sceneKey", sceneKey.value)
  console.log("scene", scene)
})
</script>

<template>
  <main class="grid grid-cols-1 auto-rows-max justify-between">
    <component :key="sceneKey" :is="scene?.component" />
  </main>
</template>
