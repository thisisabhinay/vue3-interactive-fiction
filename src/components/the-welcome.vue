<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <section id="TheWelcome" class="flex flex-col items-center justify-center gap-5 py-3">
    <img
      src="/images/cover.jpeg"
      alt="The Second Moon cover image showing a night time city skyline with two moons in pixel art style"
      class="w-full h-auto"
    />
    <h1 class="text-7xl font-bold text-center">The Second Moon</h1>
    <RouterLink
      to="/game"
      class="px-6 py-3 border border-solid border-gray-300 font-medium text-lg"
    >
      Start
    </RouterLink>
  </section>
</template>
