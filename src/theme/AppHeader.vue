<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="navbar-item is-tab" to="/category/front-end">Front-end</router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }">Mobile</router-link>
      <router-link class="navbar-item is-tab" to="/login">
        <span v-if="isAuthenticated">Logout</span>
        <span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="js">
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'isAuthenticated'
      ])
    }
  }
</script>
