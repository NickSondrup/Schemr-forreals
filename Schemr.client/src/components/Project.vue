<template>
  <div class="col-md-4 col-lg-3 col-xxl-2 text-center">
    <router-link :to="{ name: 'Project', params:{projectId: project.id} }">
      <h2>{{project.name}}</h2>
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
.project-picture{
  max-height: 160px;
}
</style>