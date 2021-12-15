<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Colors:</h1>
      <SectionColor v-for="s in sectionColors" :key="s.id" :sectionColor="s" />
    </div>

  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  setup(){
    return {
      sectionColors: computed(() => AppState.sectionColors)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>