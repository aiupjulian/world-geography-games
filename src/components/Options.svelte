<script>
  import Option from './Option.svelte';
  import {getOptionsWithCorrect, FLAG} from '../utils/game';
  import {getStreak, setStreak} from '../utils/localStorage';
  export let countryProperty;
  $: correct = options.find(option => option.correct);
  let options = getOptionsWithCorrect(countryProperty);
  let disabled = false;
  let streak = getStreak(countryProperty);
  const handleSelected = (index) => {
    disabled = true;
    options[index].selected = true;
    if (options[index].correct) {
      streak++;
    } else {
      streak = 0;
    }
    setStreak(countryProperty, streak);
  }
  const handleNext = () => {
    disabled = false;
    options = getOptionsWithCorrect(countryProperty);
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
    margin: 0 auto 0.5rem;
    line-height: 4.5rem;
  }
  .flag {
    font-size: 4.5rem;
  }
  .action-container {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-top: 0.5rem;
  }
  .next {
    width: 50%;
    max-width: 200px;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 auto;
  }
  .streak {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.6rem;
    padding-top: 0.5em;
  }
  .streak-quantity {
    margin-left: 8px;
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
  <div class="action-container">
    {#if disabled}
      <button class="next button" on:click={handleNext}>Next!</button>
    {/if}
    <div class="streak">🎯<span class="streak-quantity">{streak}</span></div>
  </div>
</div>
