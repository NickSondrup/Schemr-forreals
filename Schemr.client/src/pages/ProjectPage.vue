<template>
  <div v-if="project">
    <div class="container-fluid">
      <div class="row mt-3 title-row">
        <div class="col-md-4">
          <div class=" d-flex justify-content-evenly mb-4">
            <h1 class="fw-bolder">{{project.name}}</h1>
          </div>
          <button @click="deleteProject(project.id)" class="btn btn-outline-secondary ms-4">Remove Project</button>
          <h2 class="ms-4">Sections:</h2>
          <button class="ms-4 fw-bold btn btn-primary" data-bs-toggle="modal" data-bs-target="#section-form">Add Section</button>
          <Section v-for="s in sections" :key="s.id" :section="s"/>
        </div>
        <div class="col-md-8 text-center">
          <img :src="project.picture" alt="" class="img-fluid rounded-pill project-picture mb-4">
          <p class="fs-4 fw-bold">{{project.description}}</p>
          <p class="fs-4 fw-bold">Model Count: {{project.modelCount}}</p>
          <p class="fs-4 fw-bold">Model Size: {{project.modelSize}}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    .....loading.....
  </div>
  <Modal id="section-form">
    <template #modal-body>
      <SectionForm />
    </template>
  </Modal>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { projectsService } from '../services/ProjectsService.js'
import { sectionsService } from '../services/SectionsService.js'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { colorsService } from '../services/ColorsService.js'
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
        Pop.toast(error.message, 'error')
      }
      try {
        await colorsService.getColors()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      project: computed(()=> AppState.project),
      sections: computed(()=> AppState.sections),
      async deleteProject(projectId) {
        try {
          if(await Pop.confirm()){
            await projectsService.deleteProject(projectId)
            Pop.toast("Project has been deleted!", 'success')
          }
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .project-picture{
    max-height: 500px;
  }
  .delete-button{
  color: #6a0001;
  }
</style>