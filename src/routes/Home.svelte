<script>
  import routes from '../routes';
  import { getStreak } from '../utils/localStorage';
  import { CAPITAL, FLAG } from '../utils/game';
  const capitalsStreak = getStreak(CAPITAL);
  const flagsStreak = getStreak(FLAG);
</script>

<p>Welcome to Geography Games, where you can practice to improve your knowledge in geography.</p>
<a href="#{routes.Flags.path}">
  <div class="game button">
    <div class="streak">🎯<span class="streak-quantity">{flagsStreak}</span></div>
    <div class="title">🏳️ Flags</div>
    <div>Match the flag with the corresponding country</div>
  </div>
</a>
<a href="#{routes.Capitals.path}">
  <div class="game button">
    <div class="streak">🎯<span class="streak-quantity">{capitalsStreak}</span></div>
    <div class="title">🏙️ Capitals</div>
    <div>Match the capital with the corresponding country</div>
  </div>
</a>

<style>
  .game {
    position: relative;
    background-color: #39455a;
    border-radius: 0.2rem;
    padding: 1.2rem;
    text-align: center;
    margin-bottom: 1rem;
    color: white;
    font-size: 1rem;
  }
  .title {
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  .streak {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
  }
  .streak-quantity {
    margin-left: 4px;
  }
</style>
