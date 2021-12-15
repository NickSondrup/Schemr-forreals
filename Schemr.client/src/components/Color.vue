<template>
  <div class="col-md-2 my-3 text-center">
    <div>
      <span class="fw-bold fs-4">{{color.type}}</span>
    </div>
    <div>
      <span class="fw-bold fs-4">{{color.name}}</span>
    </div>
    <div :style="{backgroundColor: color.hexcode}" class="color-block rounded-circle border border-5 border-dark"></div>
  </div>
</template>


<script>
export default {
  props: {
    color: { type: Object, default: () => { return new Object() } }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.color-block{
  height: 10rem;
}
</style>