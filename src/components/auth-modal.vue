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
            @click.prevent="validate()"
            class="uk-button uk-button-primary uk-width-1-1"
          >
            Login
          </button>
        </form>

        <ul v-if="validationErrors.length > 0">
          <WarningAlert
            v-for="(error, index) in validationErrors"
            :key="`error-${index}`"
            :warning="error"
          >
          </WarningAlert>
        </ul>
      </div>
      <div class="uk-modal-footer">For Glory!</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WarningAlert from "../components/UI/warning-alert.vue";
import UIkit from "uikit";
import { mapActions } from "vuex";

export default Vue.extend({
  components: {
    WarningAlert,
  },
  data() {
    return {
      email: null,
      password: null,
      error: false,
      validationErrors: [],
    };
  },
  methods: {
    ...mapActions(["signInAction"]),

    resetError() {
      this.validationErrors = [];
    },

    validate() {
      //clear old errors
      this.resetError();

      // email validation
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
      } else if (/.+@.+/.test(this.email) != true) {
        this.validationErrors.push("<strong>E-mail</strong> must be valid.");
      }
      // password validation
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty");
      }

      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.logIn();
        UIkit.modal("#auth_modal").hide();
      }
    },

    logIn() {
      this.signInAction({ email: this.email, password: this.password });
    },
  },
});
</script>

<style lang="sass" scoped>
</style>