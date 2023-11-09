<script setup lang="ts">
import { ref } from "vue"
const el = ref(null)

const emit = defineEmits<{
  (e: "flag", value: boolean): void
}>()

function mouseMoveHandler(event: any) {
  // const e = el.value
  // console.log(e, e.firstElementChild)
  // console.log(event)
}
</script>

<template>
  <div
    id="InteractionCatSpeaking"
    @mousemove="mouseMoveHandler"
    ref="el"
    class="grid grid-cols-1 gap-2"
  >
    <img
      src="/images/cat-speaking.png"
      alt="A cat walking alongside you, almost as if it's attempting to guide you."
      class="w-full h-auto mx-auto"
    />
    <button
      class="border border-solid border-gray-600 hover:bg-black py-1 px-2 w-fit justify-self-center"
      @click="() => emit('flag', true)"
    >
      Translate
    </button>
  </div>
</template>
