<template>
  <div class="Login-page">
    <Header></Header>
    <section class="register-sec uk-section uk-container-small">
      <form @submit.prevent="pressed">
        <fieldset class="uk-fieldset">
          <legend class="uk-legend">Register for Glory</legend>

          <div class="uk-margin">
            <input
              class="uk-input"
              type="email"
              v-model="email"
              placeholder="@ E-mail"
            />
          </div>
          <div class="uk-margin">
            <input
              class="uk-input"
              type="password"
              v-model="password"
              placeholder="Password"
            />
          </div>
        </fieldset>
        <button class="uk-button uk-button-primary" type="submit">
          Register
        </button>
      </form>
      <WarningAlert v-if="error"></WarningAlert>
    </section>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/layouts/Header.vue";
import Footer from "../components/layouts/Footer.vue";
import WarningAlert from "../components/UI/warning-alert.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default Vue.extend({
  components: {
    Header,
    Footer,
    WarningAlert,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },

  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ path: "dashboard" });
      } catch (err) {
        this.error != this.error;
        console.log(err);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.header-default {
  position: relative !important;
  background-color: #2f3640;
}

.uk-button {
  text-align: center;
  margin: 0 auto;
}
.register-sec {
  margin: 0 auto;
}
</style>
