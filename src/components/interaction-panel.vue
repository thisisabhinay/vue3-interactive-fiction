<script setup lang="ts">
const actions = [
  {
    name: "Give",
    key: "action-give",
    color: "lime-500"
  },
  {
    name: "Open",
    key: "action-open",
    color: "yellow-500"
  },
  {
    name: "Close",
    key: "action-close",
    color: "pink-500"
  },
  {
    name: "Pick up",
    key: "action-pick-up",
    color: "teal-500"
  },
  {
    name: "Look at",
    key: "action-look-at",
    color: "blue-500"
  },
  {
    name: "Talk to",
    key: "action-talk-to",
    color: "amber-500"
  },
  {
    name: "Use",
    key: "action-use",
    color: "indigo-500"
  },
  {
    name: "Push",
    key: "action-push",
    color: "red-500"
  },
  {
    name: "Pull",
    key: "action-pull",
    color: "purple-500"
  }
]
</script>
<template>
  <footer id="InteractionPanel" class="fixed bottom-0 left-0 right-0">
    <div class="flex items-center gap-2 max-w-2xl m-auto justify-between bg-[#181818] p-8">
      <template v-for="action in actions" :key="action.key">
        <span
          class="font-semibold inline-block text-gray-900 underline dark:text-gray-300 hover:text-white cursor-pointer"
          :class="`decoration-${action.color}`"
        >
          {{ action.name }}
        </span>
      </template>
    </div>
  </footer>
</template>

<style></style>
