<script>
  export let option;
  export let disabled;
</script>

<style>
  button {
    background-color: #39455a;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 1.2rem;
  }
  button:disabled {
    background-color: grey;
  }
  button:disabled.correct {
    background-color: hsl(141, 47%, 38%);
  }
  button:disabled.incorrect {
    background-color: hsl(348, 100%, 61%);
  }
</style>

<button
  on:click
  {disabled}
  class:correct={disabled && ('correct' in option)}
  class:incorrect={option.selected && !('correct' in option)}
>
	{option.name}
</button>
