<script setup lang="ts">
import { inject, watchEffect } from "vue"
import actions from "@/constants/player-actions"

const { playerAction, updatePlayerAction } = inject<any>("player-action")

watchEffect(() => console.log("Player action: ", playerAction.value))
</script>
<template>
  <footer id="InteractionPanel" class="fixed bottom-0 left-0 right-0">
    <div class="flex items-center gap-2 max-w-2xl m-auto justify-between bg-[#181818] p-8">
      <template v-for="action in actions" :key="action.key">
        <span
          class="font-semibold inline-block text-gray-900 underline dark:text-gray-300 hover:text-white cursor-pointer"
          :class="`decoration-${action.color}`"
          @click="() => updatePlayerAction(action.key)"
        >
          {{ action.name }}
        </span>
      </template>
    </div>
  </footer>
</template>

<style></style>
