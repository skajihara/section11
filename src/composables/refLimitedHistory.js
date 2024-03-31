import { watchEffect } from 'vue'
import { refHistory } from './refHistory'

export function refLimitedHistory(source, capacity) {
  const { history, undo } = refHistory(source)
  watchEffect(() => {
    if (history.value.length > capacity) {
      history.value.shift()
    }
  })
  return {
    history,
    undo
  }
}
