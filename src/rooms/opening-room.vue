<script setup lang="ts">
import GameRoom from "@/components/game-room.vue"
import SceneRoom1_0 from "@/scenes/scene-room-1-0.vue"
import playerInteractionsOpeningRoom from "@/interactions/opening-room"
import { inject, onBeforeMount } from "vue"

const { updateAllowedAction } = inject<any>("allowed-player-actions")

function setAllowedPlayerActions() {
  const gameRoomActions = playerInteractionsOpeningRoom // Need to dynamically add player rooms
    ?.map((intercation) => Object.keys(intercation).filter((key) => key !== "target"))
    .flat()

  const uniqueActionsList = [...new Set(gameRoomActions)]

  updateAllowedAction(uniqueActionsList)
}

onBeforeMount(setAllowedPlayerActions)
</script>

<template>
  <GameRoom name="Opening Scene" :interactions="playerInteractionsOpeningRoom">
    <SceneRoom1_0 />
  </GameRoom>
</template>

<style scoped></style>
