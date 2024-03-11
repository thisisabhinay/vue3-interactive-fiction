<script setup lang="ts">
import { type ListChoice } from "@/types/story"
import { type PlayerInteraction } from "@/types/interaction"
import SpeechText from "@/components/speech-text.vue"
import SceneDescription from "@/components/scene-description.vue"
import playerInteractionsOpeningRoom from "@/interactions/opening-room"
import InteractionDescription from "@/components/interaction-description.vue"
import ListChoices from "@/components/list-choices.vue"
import SceneRoom1_1 from "@/scenes/scene-room-1-1.vue"
import SceneRoom1_2 from "@/scenes/scene-room-1-2.vue"
import SceneRoom1_3 from "@/scenes/scene-room-1-3.vue"
import { INTERACTIVE_SELECTOR } from "@/constants/selectors"
import { actions } from "@/constants/player-actions"
import { watch, inject, ref, watchEffect, toRaw } from "vue"

const storyChoices: ListChoice[] = [
  { text: "Attempt to move: (Test the physical constraints of this world)", scene: SceneRoom1_1 },
  { text: "'Who are you?'': (Seek information on the voice and this place)", scene: SceneRoom1_2 },
  { text: "Focus on the voice: (Try to discern a location or source)", scene: SceneRoom1_3 }
]

const { playerAction } = inject<any>("player-action")

const actionName = ref<string>()
const actionDescription = ref<string>()

const playerInteractions = ref<PlayerInteraction[]>([])

function updatePlayerInteractions(data: PlayerInteraction) {
  console.log(data)

  const existingInteraction = playerInteractions.value?.find(
    (intercation) => intercation.label === data.label
  )

  if (existingInteraction) return

  playerInteractions.value = [...toRaw(playerInteractions.value), data]
}

function triggerInteraction(event: Event) {
  if (!playerAction.value) return

  const el = event.target as HTMLElement
  const targetName = el.innerText
  const interaction = playerInteractionsOpeningRoom?.find(
    (interaction) => interaction.target === targetName
  )

  const actionTable = interaction ? interaction[playerAction.value] : null
  const action = actions.find((action) => action.key === playerAction.value)

  updatePlayerInteractions({
    label: `${action?.name}: ${interaction?.target}`,
    description: actionTable?.ifDefault
  })
}

function attachEventListeners() {
  if (!playerInteractionsOpeningRoom || !playerInteractionsOpeningRoom?.length) return

  const interactiveItems = document.querySelectorAll(INTERACTIVE_SELECTOR)
  Array.from(interactiveItems, (item) => {
    item.addEventListener("click", triggerInteraction)
  })
}

watch(playerAction, attachEventListeners)

watchEffect(() => {
  console.log("playerInteractions: ", playerInteractions.value)
})
</script>

<template>
  <SceneDescription
    :interactions="playerInteractionsOpeningRoom"
    @DOMUpdated="attachEventListeners"
  >
    <p class="first-letter:text-4xl first-letter:font-bold">
      The world is a blur. Colors swirl and drip like melting wax over your vision. You try to speak
      but only a croaking whisper escapes. A prickling tingle fills your limbs. Are you asleep?
      Awake? Somewhere in between?
    </p>
    <p>A disembodied voice, smooth yet tinged with an unsettling distortion, echoes around you.</p>

    <SpeechText>
      Welcome, wanderer. You are in the Dream Tapestry, a realm spun from the threads of the
      subconscious. Reality here is… malleable. Your will is your tool and your mind, the clay.
    </SpeechText>
  </SceneDescription>

  <template v-for="(interaction, index) in playerInteractions" :key="index">
    <InteractionDescription :text="interaction.label">
      <div>{{ interaction.description }}</div>
    </InteractionDescription>
  </template>
  <ListChoices :choices="storyChoices" />
</template>

<style scoped></style>
