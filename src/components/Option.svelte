<script>
  export let option;
  export let disabled;
</script>

<button
  on:click
  {disabled}
  class="button"
  class:correct={disabled && 'correct' in option}
  class:incorrect={option.selected && !('correct' in option)}
>
  {option.name}
</button>

<style>
  button {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 1.2rem;
  }
  button:disabled.correct {
    background-color: hsl(141, 47%, 38%);
  }
  button:disabled.incorrect {
    background-color: hsl(348, 100%, 61%);
  }
</style>
