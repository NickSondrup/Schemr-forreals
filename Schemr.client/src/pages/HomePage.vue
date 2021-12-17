<template>
  <div class="container-fluid">
    <div class="row mx-5">
      <div class="">
        <h1>My Projects</h1>
        <button class="btn btn-primary fw-bold my-2" data-bs-toggle="modal" data-bs-target="#project-form">Add Project</button>
      </div>
    </div>
    <div class="row mx-5">
      <Project v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </div>
  <Modal id="project-form">
    <template #modal-body>
      <ProjectForm />
    </template>
  </Modal>
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
