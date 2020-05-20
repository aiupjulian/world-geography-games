<script>
  import Option from './Option.svelte';
  import {getOptionsWithCorrect, FLAG} from '../utils/game.js';
  export let countryProperty;
  const [options, correctIndex] = getOptionsWithCorrect(countryProperty);
  let disabled = false;
  let selectedIndex;
  const handleSelected = (index) => {
    disabled = true;
    selectedIndex = index;
  }
</script>

<style>
  .game {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    margin: 0 auto;
  }
  .correct {
    font-size: 2rem;
    justify-content: center;
    margin: 2rem auto;
  }
  .flag {
    font-size: 6rem;
    line-height: 6rem;
    margin: 0 auto;
  }
</style>

<div class="game">
  <div class="correct" class:flag={countryProperty === FLAG}>{options[correctIndex][countryProperty]}</div>
  {#each options as option, index}
    <Option
      {option}
      {disabled}
      correct={index === correctIndex}
      selected={index === selectedIndex}
      on:click={() => handleSelected(index)}
    />
  {/each}
</div>
