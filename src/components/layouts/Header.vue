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
              <li v-if="loggedIn">
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li v-else>
                <router-link to="/register">Register</router-link>
              </li>
            </ul>
          </div>
        </div>

        <router-link class="uk-navbar-item uk-logo" to="/"
          ><img
            class="image"
            src="../../assets/maple-leaf.png"
            alt="logo img"
          />
          GloryMS</router-link
        >

        <div class="uk-navbar-center-right">
          <div>
            <ul class="uk-navbar-nav">
              <li>
                <router-link to="/" v-scroll-to="'#downloads'"
                  >Downloads</router-link
                >
              </li>
              <li><router-link to="/">Vote</router-link></li>
              <li class="btn-group">
                <button
                  @click="signOut"
                  v-if="loggedIn"
                  class="uk-button uk-button-small uk-button-danger"
                >
                  logout
                </button>
                <!-- <button v-else class="uk-button success-btn">login</button> -->
                <a
                  v-else
                  class="uk-button success-btn"
                  href="#auth_modal"
                  uk-toggle
                  >Login</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";

export default Vue.extend({
  components: {},
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ path: "/" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
});
</script>

<style lang="scss" scoped>
header {
  z-index: 10;
}

.uk-navbar-nav > li > a {
  font-size: 1.5em !important;
}

.image {
  width: 75px;
  padding: 10px;
}

.btn-group {
  align-items: center;
  margin-top: 5%;
  margin-left: 40px;
}

.success-btn {
  background-color: transparent;
  border: 2px solid #00b894;
  color: #fff;
  min-height: unset;
}
</style>