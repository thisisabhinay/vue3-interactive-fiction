<script setup lang="ts">
import { type ListChoice } from "@/types/story"
import StoryChoice from "@/components/story-choice.vue"
import { ref } from "vue"

defineProps<{
  choices: ListChoice[]
}>()

const showChoice = ref<number | "all">("all")

function clickHandler(index: number) {
  showChoice.value = index
}
</script>

<template>
  <div id="ListChoices" class="my-4">
    <template v-for="(choice, index) in choices" :key="index">
      <StoryChoice
        v-if="showChoice === 'all' || showChoice === index"
        :label="choice.text"
        :scene="choice.scene"
        @click="() => clickHandler(index)"
      />
    </template>
  </div>
</template>

<style scoped></style>
