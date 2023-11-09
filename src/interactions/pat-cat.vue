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
  parallaxCat(event)
  parallaxBg(event)
}

function parallaxCat(e) {
  var amountMovedX = (e.clientX * 0.15) / 8
  var amountMovedY = (e.clientY * -0.15) / 8
  var cat = document.querySelector(".parallax-cat")
  cat.style.transform = "translate(" + amountMovedX + "px," + amountMovedY + "px)"
}

function parallaxBg(e) {
  var amountMovedX = (e.clientX * 0.05) / 4
  var amountMovedY = (e.clientY * 0.05) / 4
  var cat = document.querySelector(".parallax-bg")
  cat.style.transform = "translate(" + amountMovedX + "px," + amountMovedY + "px)"
}
</script>

<template>
  <div
    id="InteractionPatCat"
    @mousemove="mouseMoveHandler"
    ref="el"
    class="relative h-[11.25rem] cursor-pointer"
  >
    <img
      src="/images/pat-cat-1.png"
      alt="A cat walking alongside you, almost as if it's attempting to guide you."
      class="h-auto mx-auto absolute z-10 top-12 left-0 w-[88%] parallax-cat"
      @click="() => emit('flag', true)"
    />
    <img
      src="/images/pat-cat-0.png"
      alt="A cat walking alongside you, almost as if it's attempting to guide you."
      class="w-full h-auto mx-auto absolute z-0 parallax-bg"
      @click="() => emit('flag', true)"
    />
  </div>
</template>
