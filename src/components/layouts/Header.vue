<template>
  <header class="uk-container header-default uk-position-top">
    <nav
      class="main-nav uk-navbar-container uk-navbar-transparent uk-padding-large"
      uk-navbar
    >
      <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">
          <div>
            <ul class="uk-navbar-nav">
              <li class=""><router-link to="/">Home</router-link></li>
              <li v-if="isUserAuth">
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
              <li>
                <a
                  href="https://gtop100.com/topsites/MapleStory/sitedetails/Glory-Maple-99084"
                  >Vote</a
                >
              </li>
              <li class="btn-group">
                <button
                  @click="signOut"
                  v-if="isUserAuth"
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
    <!-- mobile -->
    <SideBar class="mobile-nav"></SideBar>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "../UI/sideBar.vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  components: {
    SideBar,
  },

  methods: {
    ...mapActions(["signOutAction"]),

    signOut() {
      this.signOutAction();
    },
  },

  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
});
</script>

<style lang="scss" scoped>
header {
  z-index: 10;
}

.uk-navbar-nav > li > a {
  font-size: 1.5rem !important;
  margin-right: 70px;
}

.image {
  width: 75px;
  padding: 10px;
}

.btn-group {
  align-items: center;
  margin-top: 3%;
  //margin-left: 20px;
}

.success-btn {
  background-color: transparent;
  border: 2px solid #00b894;
  color: #fff;
  min-height: unset;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .main-nav {
    display: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .main-nav {
    display: none;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .main-nav {
    display: none;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .main-nav {
    display: flex;
  }

  .mobile-nav {
    display: none;
  }
}
</style>