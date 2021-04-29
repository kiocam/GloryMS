<template>
  <div>
    <Header></Header>
    <section class="uk-section uk-container" v-if="isUserAuth">
      <h2 class="user-info" v-if="isUserAuth">
        Hello: {{ getUser.displayName }}
      </h2>
      <div class="uk-text-center" uk-grid>
        <div class="uk-width-1-2@m">
          <div class="uk-card uk-card-default uk-card-body">
            <p>Click the button below to unstuck your character in game</p>
            <button class="uk-button uk-button-danger">Button</button>
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div class="uk-card uk-card-default uk-card-body">
            <p>Click the button below to vote and gain NX</p>
            <button class="uk-button uk-button-default" disabled>Vote</button>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section uk-container" v-else>
      <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <h2>
              You are not a registered user, so you cannot view this page,
              please register or login
            </h2>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { mapGetters } from "vuex";
import Header from "../components/layouts/Header.vue";
import Footer from "../components/layouts/Footer.vue";

export default Vue.extend({
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      username: "",
    };
  },

  methods: {
    resetInput() {
      this.username = "";
    },
  },

  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
});
</script>

<style lang="scss" scoped>
.header-default {
  position: relative !important;
  background-color: #2f3640;
}

.uk-section {
  height: 60vh;
}

.uk-input {
  margin-bottom: 25px;
}
</style>