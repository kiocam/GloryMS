<template>
  <div class="uk-alert-warning" uk-alert>
    <p v-html="warning">
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    warning: {
      type: String,
      default: `<strong>Sorry.. an error has occured</strong>`
    }
  }
})
</script>