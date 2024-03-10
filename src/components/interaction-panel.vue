<script setup lang="ts">
import { inject, watchEffect } from "vue"
import { actions } from "@/constants/player-actions"

const { playerAction, updatePlayerAction } = inject<any>("player-action")
const { allowedActions } = inject<any>("allowed-player-actions")

watchEffect(() => console.log("Player action: ", playerAction.value))
</script>

<template>
  <footer id="InteractionPanel" class="fixed bottom-0 left-0 right-0">
    <div class="flex items-center gap-2 max-w-2xl m-auto justify-between bg-[#181818] p-8">
      <template v-for="action in actions" :key="action.key">
        <div
          v-if="allowedActions ? allowedActions?.includes(action.key) : true"
          class="font-semibold inline-block underline hover:text-white cursor-pointer"
          :class="[
            `decoration-${action.color}`,
            playerAction === action.key ? `bg-${action.color} text-white` : 'dark:text-gray-300 '
          ]"
          @click="() => updatePlayerAction(action.key)"
        >
          {{ action.name }}
        </div>
      </template>
    </div>
  </footer>
</template>

<style></style>
