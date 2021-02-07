<template>
  <div id="auth_modal" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-header">
        <h2 class="uk-modal-title">Welcome Back</h2>
      </div>
      <div class="uk-modal-body">
        <form class="uk-form-horizontal uk-margin-large">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text"
              >Username</label
            >
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="form-horizontal-text"
                type="text"
                placeholder="Username"
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
                placeholder="Password"
              />
            </div>
          </div>
          <!--  -->
          <button class="uk-button uk-button-primary uk-width-1-1">
            Login
          </button>
        </form>
      </div>
      <div class="uk-modal-footer">For Glory!</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="sass" scoped>
</style>