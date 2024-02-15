<script setup>
import { useCounterStore } from "../stores/store.js";

const counter = useCounterStore();
</script>

<template>
  <div class="card">Count is: {{ counter.count }}</div>
  <div class="buttons">
    <button @click="counter.increaseCounter">Increase</button
    ><button @click="counter.decreaseCounter">Decrease</button>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
}
.buttons button {
  margin: 0 10px;
}
</style>
