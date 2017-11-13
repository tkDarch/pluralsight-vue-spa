<template>
  <div class="card">
    <div class="card-content">
      <slot name="title" />
      <slot name="content" />
    </div>
    <footer class="card-footer">
      <a :href="link" class="card-footer-item" target="_blank">Read More</a>
    </footer>
  </div>
</template>

<script lang="js">
  export default {
    props: ['link']
  }
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: 40px;
  height: 100%;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
