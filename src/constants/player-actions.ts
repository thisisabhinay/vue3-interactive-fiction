export enum gameAction {
  GIVE = "action-give",
  OPEN = "action-open",
  CLOSE = "action-close",
  PICK_UP = "action-pick-up",
  LOOK_AT = "action-look-at",
  TALK_TO = "action-talk-to",
  USE = "action-use",
  PUSH = "action-push",
  PULL = "action-pull",
  TOUCH = "action-touch"
}

export const actions = [
  {
    name: "Give",
    key: gameAction.GIVE,
    color: "lime-500"
  },
  {
    name: "Open",
    key: gameAction.OPEN,
    color: "yellow-500"
  },
  {
    name: "Close",
    key: gameAction.CLOSE,
    color: "pink-500"
  },
  {
    name: "Pick up",
    key: gameAction.PICK_UP,
    color: "teal-500"
  },
  {
    name: "Look at",
    key: gameAction.LOOK_AT,
    color: "blue-500"
  },
  {
    name: "Talk to",
    key: gameAction.TALK_TO,
    color: "amber-500"
  },
  {
    name: "Use",
    key: gameAction.USE,
    color: "indigo-500"
  },
  {
    name: "Push",
    key: gameAction.PUSH,
    color: "red-500"
  },
  {
    name: "Pull",
    key: gameAction.PULL,
    color: "purple-500"
  },
  {
    name: "Touch",
    key: gameAction.TOUCH,
    color: "rose-400"
  }
]
