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
  <div id="InteractionPawUp" @mousemove="mouseMoveHandler" ref="el">
    <img
      src="/images/up-paw.png"
      alt="A cat walking alongside you, almost as if it's attempting to guide you."
      class="w-full h-auto mx-auto"
      @click="() => emit('flag', true)"
    />
  </div>
</template>
