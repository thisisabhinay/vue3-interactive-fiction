<script setup lang="ts">
import { Scene1_1 } from "@/scenes"
import { inject, onBeforeMount, watchEffect } from "vue"

const { scene, sceneKey, loadScene } = inject<any>("sceneLoader")

function loadStartScene() {
  loadScene(Scene1_1)
}

onBeforeMount(loadStartScene)

watchEffect(() => {
  console.log("sceneKey", sceneKey.value)
  console.log("scene", scene)
})
</script>

<template>
  <main>
    <component :key="sceneKey" :is="scene?.component" />
  </main>
</template>
