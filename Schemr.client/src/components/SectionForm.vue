<template>
  <form @submit.prevent="createSection()">
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
import { useRoute } from 'vue-router'
import { sectionsService } from '../services/SectionsService.js'
export default {
  setup(){
    const route = useRoute()
    const editable = ref({})
    return {
      editable,

      async createSection() {
        try {
          editable.value.projectId = route.params.projectId
          await sectionsService.createSection(editable.value)
          editable.value = {}
          Pop.toast("New Section Added!", 'success')
          const modal = Modal.getOrCreateInstance(document.getElementById('section-form'))
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