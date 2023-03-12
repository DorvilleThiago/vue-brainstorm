<script lang="ts">
import SearchBar from './components/SearchBar.vue';
import Ideia from './components/Ideia.vue';
import { useStore } from 'vuex';

export default {
  components: {
    SearchBar,
    Ideia
  },
  setup() {

    const store = useStore();
    const items = store.state.ideias

    return {
      items
    }
  }
}

</script>

<template>

  <main class="main-container">

  <section class="main-header">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <h1>App de BrainStorm com Vue.js</h1>
  </section>

  <SearchBar class="search-bar"/>
  <div class="idea-container">
    <Ideia v-for="(item, index) in items" :key="index" :message="item"></Ideia>
  </div>

  </main>

</template>

<style scoped>

.main-container {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.main-header {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.idea-container {
  margin-top: 50px;
  width: 60%;
  flex-direction: row;
  gap: 15px;
  display: grid;
}

.search-bar {
  display: inline-flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
}

</style>
