import { type Interaction } from "@/types/interaction"
import { INTERACTIVE_SELECTOR_NAME, SCENE_OG_HTML_ATTR } from "@/constants/selectors"
import { actions } from "@/constants/player-actions"
import { type Ref } from "vue"

function generateInteractiveDOMText(
  elementRef: Ref<Element | undefined>,
  interactions: Interaction[],
  activePlayerAction: string
) {
  if (!interactions || !interactions.length) return

  const action = actions.find((action) => action.key === activePlayerAction)

  // Create a temporary element to manipulate the HTML
  const tempContainer = document.createElement("div")
  tempContainer.innerHTML =
    elementRef.value?.getAttribute(SCENE_OG_HTML_ATTR) ?? (elementRef.value?.innerHTML as string)
  let tempHTMLString = tempContainer.innerHTML

  interactions?.forEach((interaction) => {
    const phrase = interaction.target
    const allActions = Object.keys(interaction)
    const decoration = allActions?.includes(action?.key as string)
      ? `underline decoration-${action?.color}`
      : ""
    tempHTMLString = tempHTMLString?.replace(
      phrase,
      `<span class="${decoration}" data-js="${INTERACTIVE_SELECTOR_NAME}">${phrase}</span>`
    )
    tempContainer.innerHTML = tempHTMLString
  })

  return tempContainer.innerHTML
}

export default generateInteractiveDOMText
