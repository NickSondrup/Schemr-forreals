<template>
 <div class="modal fade m-0" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl rounded-3 border border-primary border-3">
      <div class="modal-content bg-dark-grey text-light border-0">
        <div class="modal-body rounded">
          <div class="d-flex justify-content-end">
           <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <slot name="modal-body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.text-turq-dark {
  color: #020c0e;
}

</style>