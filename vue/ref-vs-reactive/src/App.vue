<script lang="ts" setup>
import SecondCounter from "./components/reactive-counter.vue";
import FirstCounter from "./components/ref-counter.vue";
</script>

<template>
  <div>
    <h1>Ref</h1>
    <FirstCounter />
    <br>
    <h1>Reactive</h1>
    <SecondCounter />
  </div>
</template>

<style scoped></style>
