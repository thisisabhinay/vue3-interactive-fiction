<script setup lang="ts">
import { RouterView } from "vue-router"
import { useSceneLoader } from "@/hooks"
import { provide } from "vue"

const sceneLoader = useSceneLoader()
provide("sceneLoader", sceneLoader)
</script>

<template>
  <RouterView />
</template>
