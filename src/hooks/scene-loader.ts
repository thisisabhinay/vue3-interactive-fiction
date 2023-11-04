import { ref, markRaw } from "vue"
function useSceneLoader() {
  const scene = markRaw<any>({ component: null })
  const sceneKey = ref<string>(crypto.randomUUID())

  function loadScene(comp: any) {
    scene.component = comp
    sceneKey.value = crypto.randomUUID()
  }

  return { scene, sceneKey, loadScene }
}

export default useSceneLoader
