<template>
  <!-- mobile nav -->
  <div>
    <nav class="uk-navbar uk-navbar-container uk-margin">
      <div class="uk-navbar-left">
        <a
          class="uk-navbar-toggle"
          href="#"
          uk-toggle="target: #offcanvas-nav-primary"
        >
          <span uk-navbar-toggle-icon></span>
          <span class="uk-margin-small-left">Menu</span>
        </a>
      </div>
    </nav>

    <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li>
            <router-link class="uk-navbar-item uk-logo" to="/"
              ><img
                class="image"
                src="../../assets/maple-leaf.png"
                alt="logo img"
            /></router-link>
          </li>

          <li></li>
          <li class="uk-nav-divider"></li>
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
          <li class="uk-nav-divider"></li>
          <li>
            <router-link to="/" v-scroll-to="'#downloads'"
              >Downloads</router-link
            >
          </li>
          <li class="uk-nav-divider"></li>
          <li>
            <a
              href="https://gtop100.com/topsites/MapleStory/sitedetails/Glory-Maple-99084"
              >Vote</a
            >
          </li>
          <li class="uk-nav-divider"></li>
          <li class="btn-group">
            <button class="uk-button uk-button-small uk-button-danger">
              logout
            </button>
            <!-- <button v-else class="uk-button success-btn">login</button> -->
            <a class="uk-button success-btn" href="#auth_modal" uk-toggle
              >Login</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.uk-navbar-container {
  color: #fff;
  background: transparent !important;
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
</style>