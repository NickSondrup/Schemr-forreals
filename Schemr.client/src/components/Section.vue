<template>
  <div class="">
    <h1 @click="getSectionColors(section.id)" class="selectable">{{section.name}}</h1>

  </div>
</template>


<script>
import { watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { sectionsService } from '../services/SectionsService.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    section: { type: Object, default: () => { return new Object() } }
  },
  setup(props){
    // watchEffect(async() => {
    //   if(AppState.sections)
    //   try {
    //     await sectionsService.getSectionColors(props.section.id)
    //   } catch (error) {
        
    //   }
    // })
    return {
      async getSectionColors(sectionId) {
        try {
          await sectionsService.getSectionColors(sectionId)
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