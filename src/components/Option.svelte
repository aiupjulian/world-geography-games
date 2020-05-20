<script>
  export let option;
  export let disabled;
  export let selected;
  export let correct;
</script>

<style>
  button {
    background-color: #39455a;
    color: white;
    font-weight: bold;
    padding: 20px;
    margin-bottom: 20px;
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
  class:correct={disabled && correct}
  class:incorrect={selected && !correct}
>
	{option.name}
</button>
