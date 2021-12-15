<template>
  <div class="col-md-4 col-lg-3">
<router-link :to="{ name: 'Project', params:{projectId: project.id} }">
    <h1>{{project.name}}</h1>
    <img :src="project.picture" alt="" class="project-picture rounded-circle img-fluid">
  </router-link>
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