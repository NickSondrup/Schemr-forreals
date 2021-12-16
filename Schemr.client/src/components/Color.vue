<template>
  <div class="col-md-2 my-3">
    <div class="d-flex justify-content-evenly">
      <span class="fw-bold fs-4">{{color.type}}</span>
      <i class="mdi mdi-delete-outline fs-4 delete-button selectable" title="delete" @click="deleteColor(color.id)"></i>
    </div>
    <div class="d-flex justify-content-center">
      <span class="fw-bold fs-4">{{color.name}}</span>
    </div>
    <div :style="{backgroundColor: color.hexcode}" class="color-block rounded-circle border border-5 border-dark"></div>
  </div>
</template>


<script>
import { colorsService } from '../services/ColorsService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    color: { type: Object, default: () => { return new Object() } }
  },
  setup(){
    return {
      async deleteColor(colorId) {
        try {
          if(await Pop.confirm()) {
            await colorsService.deleteColor(colorId)
            Pop.toast("Color Deleted!", 'success')
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
  height: 10rem;
}

.delete-button{
  color: #6a0001;
}
</style>