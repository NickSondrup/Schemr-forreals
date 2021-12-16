<template>
  <form @submit.prevent="createColor()">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text"
            v-model="editable.name"
            id="name"
            class="form-control"
            placeholder="Title..."
      >
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <input type="text"
            v-model="editable.type"
            id="type"
            class="form-control"
            placeholder="URL..."
      >
    </div>
    <div class="form-group">
      <label for="hexcode">Hexcode</label>
      <input type="text"
            v-model="editable.hexcode"
            id="hexcode"
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
export default {
  setup(){
    const editable = ref({})
    return {
      editable,

      async createColor() {
        try {
          await colorsService.createColor(editable.value)
          editable.value = {}
          Pop.toast("New Color Added!", 'success')
          const modal = Modal.getOrCreateInstance(document.getElementById('color-form'))
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