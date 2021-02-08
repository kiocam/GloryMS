<template>
  <div id="auth_modal" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-header">
        <h2 class="uk-modal-title">Welcome Back</h2>
      </div>
      <div class="uk-modal-body">
        <form
          @submit.prevent="logIn"
          class="uk-form-horizontal uk-margin-large"
        >
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text"
              >email</label
            >
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="form-horizontal-text"
                type="email"
                v-model="email"
                placeholder="@ E-mail"
              />
            </div>
          </div>
          <!--  -->
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text"
              >Password</label
            >
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="form-horizontal-text"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </div>
          </div>
          <!--  -->
          <button
            class="uk-button uk-button-primary uk-width-1-1"
            type="submit"
          >
            Login
          </button>
        </form>
        <WarningAlert v-if="error"></WarningAlert>
      </div>
      <div class="uk-modal-footer">For Glory!</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WarningAlert from "../components/UI/warning-alert.vue";
import uikit from "uikit";
import firebase from "firebase/app";
import "firebase/auth";

export default Vue.extend({
  components: {
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
    async logIn() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        uikit.modal("#auth_modal").hide();
        this.$router.replace({ path: "dashboard" });
      } catch (err) {
        this.error = true;
        console.log(err);
      }
    },
  },
});
</script>

<style lang="sass" scoped>
</style>