<script setup lang="ts">
import OpeningRoom from "@/rooms/opening-room.vue"
import InteractionPanel from "@/components/interaction-panel.vue"
import { inject, onBeforeMount, provide, ref } from "vue"

const { scene, sceneKey, loadScene } = inject<any>("sceneLoader")
const playerAction = ref<string>("")
const allowedActions = ref<string[]>()

function updatePlayerAction(name: string) {
  playerAction.value = playerAction.value !== name ? name : ""
}

function updateAllowedAction(actions: string[]) {
  allowedActions.value = actions ?? null
}

function loadStartScene() {
  loadScene(OpeningRoom)
}

provide("player-action", {
  playerAction,
  updatePlayerAction
})

provide("allowed-player-actions", {
  allowedActions,
  updateAllowedAction
})

onBeforeMount(loadStartScene)
</script>

<template>
  <main class="grid grid-cols-1 auto-rows-max justify-between pb-64 relative h-[100vh]">
    <component :key="sceneKey" :is="scene?.component" />
    <InteractionPanel />
  </main>
</template>
