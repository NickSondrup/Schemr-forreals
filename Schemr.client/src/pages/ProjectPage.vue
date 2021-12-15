<template>
  <div class="container-fluid">
    <div class="row mt-3 title-row">
      <div class="col-4">
        <div class=" d-flex justify-content-center">
        <h1 class="fw-bolder">{{project.name}}</h1>
        </div>
        <h2 class="ms-4">Sections:</h2>
        <Section v-for="s in sections" :key="s.id" :section="s"/>
      </div>
      <div class="col-8 text-center">
        <img :src="project.picture" alt="" class="img-fluid rounded-pill project-picture">
      </div>
    </div>

  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { projectsService } from '../services/ProjectsService.js'
import { sectionsService } from '../services/SectionsService.js'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
export default {
  setup(){
    const route = useRoute()

    onMounted( async () => {
      try {
        await projectsService.getProject(route.params.projectId)
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
      try {
        await sectionsService.getSections(route.params.projectId)
      } catch (error) {
        
      }
    })
    return {
      project: computed(()=> AppState.project),
      sections: computed(()=> AppState.sections)
    }
  }
}
</script>


<style lang="scss" scoped>
  .project-picture{
    max-height: 500px;
  }
</style>