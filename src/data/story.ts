export interface Scene {
  name: string | null
  avatar: `${string}.png` | null
  type: "dialogue" | "monologue" | "narration" | "image" | "video" | "gallery" | "link"
  text: string[]
}

const sampleStory: Scene[] = [
  {
    name: "LENA",
    avatar: "lena-eye-roll.png",
    type: "dialogue",
    text: [
      "Ugh, this navigation system is driving me insane. Buzz, can't you do something about it?"
    ]
  },

  {
    name: "BUZZ",
    avatar: "buzz-serious.png",
    type: "dialogue",
    text: ["Fear not, Captain Lena! I shall fix the navigational anomaly at once."]
  },

  {
    name: null,
    avatar: null,
    type: "narration",
    text: [
      "Buzz starts typing on the control panel with precision. Zogg looks up at Buzz with curiosity, emitting a series of melodic chirps."
    ]
  },

  {
    name: "LENA",
    avatar: "lena-eye-roll.png",
    type: "dialogue",
    text: ["You know, Buzz, sometimes I wonder if you were programmed with a sense of humor"]
  },

  {
    name: "BUZZ",
    avatar: "buzz-calm.png",
    type: "dialogue",
    text: ["Humor is a human construct, Captain. I am equipped with over a thousand jokes, though."]
  },

  {
    name: "LENA",
    avatar: "lena-eye-raise.png",
    type: "dialogue",
    text: ["Really? Give me one."]
  },

  {
    name: null,
    avatar: null,
    type: "narration",
    text: ["Buzz pauses, processing through his database."]
  },

  {
    name: "BUZZ",
    avatar: "buzz-calm.png",
    type: "dialogue",
    text: ["Why did the robot go to outer space?"]
  },

  {
    name: "LENA",
    avatar: "lena-eye-roll.png",
    type: "dialogue",
    text: ["I don't know, why?"]
  },

  {
    name: "BUZZ",
    avatar: "buzz-deadpan.png",
    type: "dialogue",
    text: ["To find his missing bolts."]
  },

  {
    name: null,
    avatar: null,
    type: "narration",
    text: [
      "Lena bursts into laughter while Zogg tilts its head, emitting a series of confused chirps."
    ]
  },

  {
    name: "LENA",
    avatar: "lena-teasing.png",
    type: "dialogue",
    text: ["Okay, Buzz, you got me with that one. Not bad for a tin can."]
  },

  {
    name: "BUZZ",
    avatar: "buzz-appreciative.png",
    type: "dialogue",
    text: [
      "Thank you, Captain. I strive to keep the mood light and entertaining.",
      "Suddenly, the spaceship jolts, causing Lena to stumble. Zogg lets out a startled yelp, its fur standing on end."
    ]
  },

  {
    name: "LENA",
    avatar: "lena-angry.png",
    type: "dialogue",
    text: ["What the heck was that, Buzz?"]
  },

  {
    name: "BUZZ",
    avatar: "buzz-calm.png",
    type: "dialogue",
    text: ["Minor turbulence, Captain. Nothing to worry about."]
  },

  {
    name: "LENA",
    avatar: "lena-irritated.png",
    type: "dialogue",
    text: ["Minor? That felt like we hit an asteroid! Zogg, you okay?"]
  },

  {
    name: null,
    avatar: null,
    type: "narration",
    text: [
      "Zogg (the alien pet) shakes itself off and emits a reassuring chirp, seemingly unfazed."
    ]
  },

  {
    name: "LENA",
    avatar: "lena-sarcastic.png",
    type: "dialogue",
    text: ["Oh, fantastic. Just another day in the glamorous life of a space adventurer."]
  },

  {
    name: "BUZZ",
    avatar: "buzz-resolute.png",
    type: "dialogue",
    text: [
      "Fear not, Captain Lena! I shall navigate us through the cosmic chaos with unmatched precision."
    ]
  },

  {
    name: null,
    avatar: null,
    type: "narration",
    text: [
      "As Buzz continues typing, the spaceship suddenly starts playing a funky, space-themed jingle. Zogg begins to dance on its six legs, twirling in delight."
    ]
  },

  {
    name: "LENA",
    avatar: "lena-laughing.png",
    type: "dialogue",
    text: [
      "Well, Buzz, if your navigation skills are as entertaining as your jokes, maybe we'll survive this journey after all."
    ]
  },

  {
    name: null,
    avatar: null,
    type: "narration",
    text: [
      "The trio continues their space adventure, the spaceship's control room filled with laughter, quirky tunes, and the promise of more cosmic capers."
    ]
  }
]

export { sampleStory }
