<template>
  <header class="uk-position-top">
    <nav class="uk-navbar-container uk-navbar-transparent uk-padding-large" uk-navbar>
      <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">
          <div>
            <ul class="uk-navbar-nav">
              <li class=""><router-link to="/">Home</router-link></li>
            </ul>
          </div>
        </div>
        <img class="image" src="../../assets/maple-leaf.png" alt="logo img" />
        <a class="uk-navbar-item uk-logo" href="#">GloryMS</a>
        <div class="uk-navbar-center-right">
          <div>
            <ul class="uk-navbar-nav">
              <!-- <li><router-link to="/">Register</router-link></li>
              <li><router-link to="/">Login</router-link></li> -->
              <li><a href="#downloads" uk-scroll>Downloads</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  z-index: 10;
}

.uk-navbar-nav li a {
  font-size: 1.5em;
  margin: 0 20px;
  font-weight: bold;
}
.image {
  width: 55px;
}
</style>