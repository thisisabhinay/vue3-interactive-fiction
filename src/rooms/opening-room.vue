<script setup lang="ts">
import { type ListChoice } from "@/types/story"
import GameRoom from "@/components/game-room.vue"
import playerInteractionsOpeningRoom from "@/interactions/opening-room"
import ListChoices from "@/components/list-choices.vue"
import SceneRoom1_0 from "@/scenes/scene-room-1-0.vue"
import SceneRoom1_1 from "@/scenes/scene-room-1-1.vue"
import SceneRoom1_2 from "@/scenes/scene-room-1-2.vue"
import SceneRoom1_3 from "@/scenes/scene-room-1-3.vue"
import { inject, onBeforeMount } from "vue"

const { updateAllowedAction } = inject<any>("allowed-player-actions")

const storyChoices: ListChoice[] = [
  { text: "Attempt to move: (Test the physical constraints of this world)", scene: SceneRoom1_1 },
  { text: "'Who are you?'': (Seek information on the voice and this place)", scene: SceneRoom1_2 },
  { text: "Focus on the voice: (Try to discern a location or source)", scene: SceneRoom1_3 }
]

function setAllowedPlayerActions() {
  const gameRoomActions = Object.keys(playerInteractionsOpeningRoom)?.filter(
    (key) => key !== "target"
  )

  updateAllowedAction(gameRoomActions)
}

onBeforeMount(setAllowedPlayerActions)
</script>

<template>
  <GameRoom name="Opening Scene">
    <SceneRoom1_0 />
    <ListChoices :choices="storyChoices" />
  </GameRoom>
</template>

<style scoped></style>
