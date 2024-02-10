<script lang="ts" setup>
import { reactive } from "vue";

const data = reactive({ count: 0 })

function increment() {
  data.count++;
}

function decrement() {
  data.count--;
}
</script>

<template>
  <div class="counter">
    <button @click="increment">Increment</button>
    <p>Count: {{ data.count }}</p>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}
</style>

