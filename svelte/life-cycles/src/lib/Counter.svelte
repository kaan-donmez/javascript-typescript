<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
  let count = 0;
  onMount(() => {
    console.log("onMount!");
  });
  beforeUpdate(() => {
    console.log("beforeUpdate!");
  });
  afterUpdate(() => {
    console.log("afterUpdate!");
  });
  onDestroy(() => {
    console.log("onDestroy!");
  });
</script>

<main>
  <button
    on:click={() => {
      count++;
    }}
  >
    Counter: {count}
  </button>
</main>

<style>
</style>