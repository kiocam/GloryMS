<template>
  <div>
    <Header></Header>
    <Hero></Hero>
    <StatusBar></StatusBar>
    <section class="main-content uk-section uk-padding-large">
      <div class="uk-container">
        <article class="uk-article">
          <h1 class="uk-article-title">
            {{ pageData.name }}
          </h1>
          <hr class="uk-divider-icon" />
          <p class="uk-text-lead">{{ pageData.mainContent }}</p>
        </article>
      </div>
    </section>

    <section class="feats-sec uk-section">
      <div class="feats uk-container">
        <h2 class="uk-article-title">Our Features</h2>
        <hr class="uk-divider-icon" />
        <div class="uk-column-1-2">
          <ul class="uk-list uk-list-disc uk-list-primary">
            <li class="feats-list" v-for="feature in features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="downloads" class="uk-section">
      <div class="uk-child-width-1-2@s uk-grid-collapse uk-text-center" uk-grid>
        <div>
          <div class="uk-tile uk-tile-primary">
            <p class="uk-h2">Glory Maple v0.2</p>
            <p>
              <a
                class="uk-link-muted"
                href="https://mega.nz/file/yPgwBRRZ#PTmFxcBGDToA8Z1dnJs_uSn5_vk8eqV3BicQc4hdtmM"
                >Current Version</a
              >
            </p>
          </div>
        </div>
        <div>
          <div class="uk-tile uk-tile-secondary">
            <p class="uk-h2">Instructions</p>
            <p>Download unzip and play!</p>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/layouts/Header.vue";
import Footer from "../components/layouts/Footer.vue";
import Hero from "../components/UI/Hero.vue";
import axios from "axios";
import StatusBar from "../components/UI/StatusBar.vue";
export default {
  components: {
    Header,
    Footer,
    Hero,
    StatusBar,
  },

  data() {
    return {
      pageData: {},
      features: {},
    };
  },

  async created() {
    let { data } = await axios.get("https://j-camerondb.me/pages?id_eq=1");
    this.pageData = data[0];
    this.features = data[0].feats.offers;
  },
};
</script>

<style lang="scss" scoped>
.uk-text-lead,
.uk-article-title {
  color: #fff;
}

.feats {
  margin-top: 5em;
}
.main-content {
  background: #d64541;
}

.feats-sec {
  background: #fff;
  color: #2980b9;
  .uk-article-title {
    color: #2980b9;
  }
}
</style>


