<template>
  <div class="inforContent">
      <span>infor</span>
      <div>{{ movie }}</div>
      <!-- <div>{{ $store.state.inforMovie }}</div> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            movie: this.$store.state.inforMovie
        }
    },

}
</script>

<style>
.inforContent > * {
    color: white
}
</style>