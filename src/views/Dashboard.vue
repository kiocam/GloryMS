<template>
  <div>
    <Header></Header>
    <section class="uk-section uk-container">dashboard</section>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/layouts/Header.vue";
import Footer from "../components/layouts/Footer.vue";

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss" scoped>
.header-default {
  position: relative !important;
  background-color: #2f3640;
}
</style>