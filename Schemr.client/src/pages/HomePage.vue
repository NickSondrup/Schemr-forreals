<template>
  <div class="container-fluid">
    <div class="row">
    <h1>My Projects</h1>
    </div>
    <div class="row">
        <Project v-for="p in projects" :key="p.id" :project="p" />

    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { projectsService } from '../services/ProjectsService.js'
import { AppState } from '../AppState.js'

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
    return {
      projects: computed(() => AppState.projects)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
