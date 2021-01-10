<template>
  <div class="stats-bar uk-padding-small">
    <ul class="uk-subnav" uk-margin>
      <li >Server Status: <span class="green-txt">Online</span></li>
      <!-- <li>Players Online: <span>858</span></li> -->
      <li>
        <a
          href="https://gtop100.com/topsites/MapleStory/sitedetails/Glory-Maple-99084"
          >Vote Here</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.uk-subnav > * > :first-child {
  display: inline-block;
  color:cornflowerblue;
  font-weight: bolder;
}

.uk-subnav {
  margin-bottom: unset;
}

.stats-bar {
  box-shadow: -2px -1px 5px 0px rgba(0, 0, 0, 0.75);
  background: #2d3436;
  color: #fff;
}

.vote {
  top: 16px;
  right: 19px;
}

.green-txt {
  color: #2ecc71 !important;
}
</style>