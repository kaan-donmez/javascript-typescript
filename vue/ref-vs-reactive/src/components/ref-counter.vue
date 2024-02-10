<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}
</script>

<template>
  <div class="counter">
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p>
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

