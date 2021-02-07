<template>
  <header class="header-default uk-position-top">
    <nav
      class="uk-navbar-container uk-navbar-transparent uk-padding-large"
      uk-navbar
    >
      <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">
          <div>
            <ul class="uk-navbar-nav">
              <li class=""><router-link to="/">Home</router-link></li>
              <li><router-link to="/register">Register</router-link></li>
              <li>
                <a class="" href="#auth_modal" uk-toggle>Login</a>
              </li>
            </ul>
          </div>
        </div>
        <img class="image" src="../../assets/maple-leaf.png" alt="logo img" />
        <a class="uk-navbar-item uk-logo" href="">GloryMS</a>
        <div class="uk-navbar-center-right">
          <div>
            <ul class="uk-navbar-nav">
              <li><a href="#downloads" uk-scroll>Downloads</a></li>
              <li><router-link to="/">Rankings</router-link></li>
              <li><router-link to="/">Vote</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="scss" scoped>
header {
  z-index: 10;
}

.uk-navbar-nav li a {
  font-size: 1.5em;
  margin: 0 10px;
  font-weight: bold;
}
.image {
  width: 55px;
}
</style>