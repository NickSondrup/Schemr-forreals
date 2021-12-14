<template>
  <div class="">
    <h1>testing is fun</h1>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { projectsService } from '../services/ProjectsService.js'

export default {
  name: 'Home',
  setup() {
    onMounted( async()=>{
      try {
        await projectsService.getProjects()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
  }
}
</script>

<style scoped lang="scss">

</style>
