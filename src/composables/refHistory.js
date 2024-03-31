import { onMounted, ref, watchEffect } from 'vue'

export function refHistory(source) {
  const history = ref([])
  onMounted(() => {
    console.log('onMounted')
  })
  watchEffect(() => {
    history.value.push(source.value)
  })
  function undo() {
    if (history.value.length === 1) return
    history.value.pop()
    source.value = history.value.pop()
  }
  return {
    history,
    undo
  }
}
