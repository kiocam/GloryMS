<template>
  <div class="Login-page">
    <Header></Header>
    <section class="register-sec uk-section uk-container-small">
      <form @submit.prevent="register">
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
              type="text"
              v-model="username"
              placeholder="username"
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
        <button @click.prevent="validate()" class="uk-button uk-button-primary">
          Register
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
    </section>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/layouts/Header.vue";
import Footer from "../components/layouts/Footer.vue";
import WarningAlert from "../components/UI/warning-alert.vue";
//import firebase from "../firebase/firebase";
import { mapActions, mapGetters } from "vuex";

//const db = firebase.firestore();

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
      username: "",
      validationErrors: [],
      error: false,
    };
  },

  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },

  methods: {
    ...mapActions(["registerAction"]),

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
      } else if (/.{4,}/.test(this.password) != true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 4 characters long"
        );
      }
      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.register();
      }
    },

    register() {
      this.registerAction({
        email: this.email,
        password: this.password,
        displayName: this.username,
      });
      this.resetInput();
    },

    // addUsername() {
    //   // Add a new document in collection "cities"
    //   db.collection("usernames")
    //     .doc(this.getUser.uid)
    //     .set({
    //       name: this.username,
    //       email: this.getUser.email,
    //     })
    //     .then(() => {
    //       console.log("Document successfully written!");
    //     })
    //     .catch((error) => {
    //       console.error("Error writing document: ", error);
    //     });
    // },

    resetInput() {
      this.username = "";
      this.email = "";
      this.password = "";
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
  margin-top: 150px;
  height: 70vh;
  max-width: 400px;
  padding: 0 20px;
}
</style>
