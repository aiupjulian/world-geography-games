<script>
  import Option from './Option.svelte';
  import {getOptionsWithCorrect, FLAG} from '../utils/game.js';
  export let countryProperty;
  let options = getOptionsWithCorrect(countryProperty);
  let disabled = false;
  const handleSelected = (index) => {
    disabled = true;
    options[index].selected = true;
  }
  const handleNext = () => {
    disabled = false;
    options = getOptionsWithCorrect(countryProperty);
  }
  $: correct = options.find(option => option.correct);
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
  .next {
    width: 60%;
    max-width: 200px;
    margin: 20px auto 0;
    font-size: 24px;
    font-weight: 600;
    background-color: #39455a;
    color: white;
  }
</style>

<div class="game">
  <div class="correct" class:flag={countryProperty === FLAG}>{correct[countryProperty]}</div>
  {#each options as option, index}
    <Option
      {option}
      {disabled}
      on:click={() => handleSelected(index)}
    />
  {/each}
  {#if disabled}
    <button class="next" on:click={handleNext}>Next!</button>
  {/if}
</div>
