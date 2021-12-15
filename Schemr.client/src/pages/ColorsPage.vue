<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div>
        <h1>Colors:</h1>
        <button class="btn btn-success">add color</button>
      </div>
    </div>
    <div class="row">
      <Color v-for="c in colors" :key="c.id" :color="c"/>
    </div>

  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { colorsService } from '../services/ColorsService.js'
import { AppState } from '../AppState.js'

export default {
  setup(){
    onMounted( async () => {
      try {
        await colorsService.getColors()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      colors: computed(() => AppState.colors)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>