<script setup lang="ts">
import OpeningRoom from "@/rooms/opening-room.vue"
import InteractionPanel from "@/components/interaction-panel.vue"
import { inject, onBeforeMount, watchEffect, provide, ref } from "vue"

const { scene, sceneKey, loadScene } = inject<any>("sceneLoader")
const playerAction = ref<string>("")

function updatePlayerAction(name: string) {
  playerAction.value = name
}

function loadStartScene() {
  loadScene(OpeningRoom)
}

provide("player-action", {
  playerAction,
  updatePlayerAction
})

onBeforeMount(loadStartScene)

watchEffect(() => {
  console.log("sceneKey", sceneKey.value)
  console.log("scene", scene)
})
</script>

<template>
  <main class="grid grid-cols-1 auto-rows-max justify-between pb-64 relative h-[100vh]">
    <component :key="sceneKey" :is="scene?.component" />
    <InteractionPanel />
  </main>
</template>
