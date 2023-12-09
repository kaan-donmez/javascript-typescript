<script>
  import Slider from "./lib/Slider.svelte";

  let redColor = 130;
  let greenColor = 200;
  let blueColor = 50;
</script>

<h1>Color Picker</h1>
<Slider colorName="Red" bind:colorValue={redColor} />
<Slider colorName="Green" bind:colorValue={greenColor} />
<Slider colorName="Blue" bind:colorValue={blueColor} />

<div
  id="colorShower"
  style="background-color:rgb({redColor}, {greenColor}, {blueColor} )"
></div>
<div>
  <h3>(RGB: {redColor}, {greenColor}, {blueColor} )</h3>
</div>

<style>
  #colorShower {
    height: 200px;
    border: 1px dashed black;
    margin: 0 3px;
  }

  h3 {
    text-align: center;
  }
</style>
