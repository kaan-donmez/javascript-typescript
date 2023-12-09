<script lang="ts">
  export let colorName: string = "Green";
  export let colorValue: number = 0;
</script>

<label for={colorName}>{colorName} ({colorValue})</label>
<input
  type="range"
  id={colorName}
  bind:value={colorValue}
  min="0"
  max="255"
  style:accent-color={colorName}
/>

<style>
  input {
    width: 100%;
  }
  label {
    margin: 3px;
  }
</style>
