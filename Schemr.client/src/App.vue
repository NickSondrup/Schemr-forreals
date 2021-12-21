<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-light-grey">
    <router-view />
  </main>
  <footer>
    <div class="bg-dark-grey text-light text-center p-4">
      <a href="https://github.com/NickSondrup" target="_blank">
      Made with 💖 by Nick Sondrup
      </a>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.bg-light-grey{
  background-image: linear-gradient(to bottom right, #7a7b7e, #2b2b2b);
}
.bg-dark-grey{
  background: #2a2a2b;
}
</style>
