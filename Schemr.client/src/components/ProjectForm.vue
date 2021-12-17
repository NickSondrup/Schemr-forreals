<template>
  <form @submit.prevent="createProject()">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text"
            v-model="editable.name"
            id="name"
            class="form-control"
            placeholder="Name..."
      >
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text"
            v-model="editable.description"
            id="description"
            class="form-control"
            placeholder="Description..."
      >
    </div>
    <div class="form-group">
      <label for="picture">Picture Url</label>
      <input type="text"
            v-model="editable.picture"
            id="picture"
            class="form-control"
            placeholder="Url..."
      >
    </div>
    <div class="form-group">
      <label for="modelCount">Model Count</label>
      <input type="number"
            v-model="editable.modelCount"
            id="modelCount"
            class="form-control"
            placeholder="Model Count..."
      >
    </div>
    <div class="form-group">
      <label for="modelSize">Model Size</label>
      <select type="text"
            v-model="editable.modelSize"
            id="modelSize"
            class="form-control"
            placeholder="Model Size..."
      >
      <option value="Small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Large">Large</option>
      <option value="X-Large">X-Large</option>
      </select>
    </div>
    <div class="btn-group">
      <button type="submit" class="btn btn-success selectable mt-4">
        <b>Submit</b>
      </button>
    </div>
</form>
</template>


<script>
import { ref } from '@vue/reactivity'
import { colorsService } from '../services/ColorsService.js'
import Pop from '../utils/Pop.js'
import { Modal } from 'bootstrap'
import { projectsService } from '../services/ProjectsService.js'
export default {
  setup(){
    const editable = ref({})
    return {
      editable,

      async createProject() {
        try {
          await projectsService.createProject(editable.value)
          editable.value = {}
          Pop.toast("New Project Added!", 'success')
          const modal = Modal.getOrCreateInstance(document.getElementById('project-form'))
          modal.hide()
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>