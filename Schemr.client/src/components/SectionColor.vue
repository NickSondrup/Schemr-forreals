<template>
  <div class="col-md-3 col-lg-2">
    <div class="d-flex justify-content-evenly">
      <span class="mt-1">{{sectionColor.color.name}}</span>
      <i class="mdi mdi-delete-outline fs-4 text-danger selectable" title="delete" @click="deleteSectionColor(sectionColor.id)"></i>
    </div>
    <div :style="{backgroundColor: sectionColor.color.hexcode}" class="color-block rounded-circle"></div>
  </div>
</template>


<script>
import { sectionsService } from '../services/SectionsService.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    sectionColor: { type: Object, default: () => { return new Object() } }
  },
  setup(){
    return {
      async deleteSectionColor(id) {
        try {
          if(await Pop.confirm()) {
            await sectionsService.deleteSectionColor(id)
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
.color-block{
  height: 5rem;
  box-shadow: 10px 10px 10px black;
}
.delete-button{
  color: #6a0001;
}
</style>