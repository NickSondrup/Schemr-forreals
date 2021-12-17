<template>
  <div class="container-fluid">
    <div class="row">
      <h1>{{section.description}}</h1>
      <SectionColor v-for="s in sectionColors" :key="s.id" :sectionColor="s" />
    </div>
    <div class="row">
      <div class="col-12">
        <label class="me-2 fw-bold" for="createSectionColor">Add Color:</label>
        <select name="createSectionColor"
         id="createSectionColor" 
         class="mt-3 rounded border border-dark" 
         v-model="editable.colorId" 
         @change="createSectionColor(section.id)"
         >
          <option v-for="color in colors" :key="color.id" :value="color.id">
            {{color.name}}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { sectionsService } from '../services/SectionsService.js'
export default {
  setup(){
    const editable = ref({})
    return {
      editable,
      sectionColors: computed(() => AppState.sectionColors),
      colors: computed(() => AppState.colors),
      section: computed(() => AppState.section),

      async createSectionColor(sectionId) {
        editable.value.sectionId = sectionId
        try {
          await sectionsService.createSectionColor(editable.value)
          editable.value = {}
          Pop.toast("Color Added to Section!", 'success')
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