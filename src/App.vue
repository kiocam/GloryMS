<template>
  <div class="" id="app">
    <router-view />

    <!--  -->
    <AuthModal></AuthModal>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AuthModal from "./components/auth-modal.vue";
export default Vue.extend({
  components: {
    AuthModal,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
