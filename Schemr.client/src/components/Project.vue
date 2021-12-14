<template>
  <div class="component">
    <h1>{{project.name}}</h1>
    <img :src="project.picture" alt="" class="rounded-circle" width="400">
  </div>
</template>


<script>
export default {
  props: {
    project: { type: Object, default: () => {return new Object()}}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>