<template>
  <div class="d-flex">
    <ul @click="getSectionColors(section.id), getSection(section.id)" class="selectable fw-bold fs-2" data-bs-toggle="modal" data-bs-target="#section-colors">
      {{section.name}}
    </ul>
    <i class="mdi mdi-delete-outline fs-4 delete-button selectable ms-3 mt-2" title="delete" @click="deleteSection(section.id)"></i>
  </div>
  <Modal id="section-colors">
    <template #modal-body>
      <SectionColorsModal :section="section" />
    </template>
  </Modal>
</template>


<script>
import { watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { sectionsService } from '../services/SectionsService.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
export default {
  props: {
    section: { type: Object, default: () => { return new Object() } }
  },
  setup(){
    return {
      async getSectionColors(sectionId) {
        try {
          await sectionsService.getSectionColors(sectionId)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      async getSection(sectionId) {
        try {
          await sectionsService.getSection(sectionId)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      async deleteSection(sectionId) {
        try {
          if(await Pop.confirm()) {
            await sectionsService.deleteSection(sectionId)
            Pop.toast("Section Deleted!", 'success')
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
.delete-button{
  color: #6a0001;
}
</style>