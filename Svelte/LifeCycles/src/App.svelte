<script>
  import Counter from "./lib/Counter.svelte";
  let condition = true;
</script>

<main>
  {#if condition}
    <Counter />
  {:else}
    <p>Counter is not rendered</p>
  {/if}

  <button
    on:click={() => {
      condition = !condition;
    }}
  >
    Toggle
  </button>
</main>

<style>
  button {
    margin: 1rem;
  }

  p {
    margin: 0.5rem;
  }
</style>
