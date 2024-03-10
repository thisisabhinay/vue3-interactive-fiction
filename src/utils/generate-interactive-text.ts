import { type Interaction } from "@/types/interaction"
import { type Ref } from "vue"

function generateInteractiveText(
  elementRef: Ref<Element | undefined>,
  interactions: Interaction[]
) {
  if (!interactions || !interactions.length) return

  // Create a temporary element to manipulate the HTML
  const tempContainer = document.createElement("div")
  tempContainer.innerHTML = elementRef.value?.innerHTML as string
  let tempHTMLString = tempContainer.innerHTML

  interactions?.forEach((interaction) => {
    const phrase = interaction.target
    tempHTMLString = tempHTMLString?.replace(phrase, `<span class="underline">${phrase}</span>`)
    tempContainer.innerHTML = tempHTMLString
  })

  return tempContainer.innerHTML
}

export default generateInteractiveText
