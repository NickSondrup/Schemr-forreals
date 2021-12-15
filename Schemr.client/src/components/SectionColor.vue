<template>
  <div class="col-md-3 col-lg-2">
    <span>{{sectionColor.color.name}}</span>
    <div :style="{backgroundColor: sectionColor.color.hexcode}" class="color-block rounded-circle"></div>
  </div>
</template>


<script>
export default {
  props: {
    sectionColor: { type: Object, default: () => { return new Object() } }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.color-block{
  height: 5rem;
}
</style>