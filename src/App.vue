<script setup>
import { ref } from 'vue'
import { refHistory } from './composables/refHistory'

const count = ref(0)

const { history, undo } = refHistory(count)
const userInput = ref('')
const { history: history2, undo: undo2 } = refHistory(userInput)
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <p>history: {{ history }}</p>
  <button @click="undo">undo</button>
  <p>userInput: {{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <p>history2: {{ history2 }}</p>
  <button @click="undo2">undo2</button>
</template>
