<template>
  <div class="Login-page">
    <Header></Header>
    <section class="uk-section">
      <div class="uk-child-width-1-2@s uk-grid-collapse uk-text-center" uk-grid>
        <div>
          <div class="uk-tile uk-tile-default"></div>
        </div>
        <div>
          <div class="uk-tile uk-tile-muted">
            <p class="uk-h4">Muted</p>
          </div>
        </div>
      </div>
    </section>
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
