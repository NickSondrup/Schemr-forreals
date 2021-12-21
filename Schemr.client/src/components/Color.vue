<template>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
    <div class="d-flex ms-3 justify-content-between">
      <span class="fw-bold fs-4">{{color.type}}</span>
      <i class="mdi mdi-delete-outline fs-4 delete-button selectable me-2" title="delete" @click="deleteColor(color.id)"></i>
    </div>
    <div class="d-flex ">
      <span class="fw-bold fs-4 ms-3">{{color.name}}</span>
    </div>
    <div :style="{backgroundColor: color.hexcode }" class="color-block rounded-circle"></div>
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
  box-shadow: 10px 10px 10px;
}

.delete-button{
  color: #6a0001;
}
</style>