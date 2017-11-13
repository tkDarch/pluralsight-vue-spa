
<template>
  <div id="app">
    <app-header />
    <section class="main-section section">
      <div class="container content">
        <router-view />
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script lang="js">
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss">
$primary: #287ab1;
@import "~bulma";

.columns {
  flex-wrap: wrap;
}
</style>
