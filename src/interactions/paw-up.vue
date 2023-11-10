<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue"
const el = ref(null)

const emit = defineEmits<{
  (e: "flag", value: boolean): void
}>()

function parallax(event) {
  window.requestAnimationFrame(function () {
    var currentElement = el.value
    var scrolled = window.scrollY
    console.log(event, currentElement, scrolled, window)
    // currentElement.style.transform = "translate3d(0," + scrolled * 0.3 + "px, 0)"
    currentElement.style.backgroundPositionY = "-" + (400 - scrolled) + "px"
  })
}

onMounted(() => {
  window.addEventListener("scroll", parallax)
})

onUnmounted(() => {
  window.removeEventListener("scroll", parallax)
})
</script>

<template>
  <div id="InteractionPawUp" @mousemove="mouseMoveHandler" class="parallax-container">
    <div
      class="parallax flex items-center justify-center"
      @click="() => emit('flag', true)"
      ref="el"
    >
      <div>Feeling compelled, you gaze upwards and, to your amazement</div>
    </div>
  </div>
</template>

<style>
.parallax-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.parallax {
  background: url("/images/up-paw-full.png");
  background-size: cover;
  background-position-x: center;
  background-position-y: -400px;
  background-repeat: no-repeat;
  position: absolute;
  height: 200%;
  width: 100%;
  z-index: -1;
}
</style>
