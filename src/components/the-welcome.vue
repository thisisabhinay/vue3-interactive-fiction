<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <section id="TheWelcome" class="flex flex-col items-center justify-center gap-10 py-20">
    <h1 class="text-7xl font-bold text-center">The Second Moon</h1>
    <RouterLink
      to="/game"
      class="px-6 py-3 border border-solid border-gray-300 font-medium text-lg"
    >
      Start
    </RouterLink>
  </section>
</template>
