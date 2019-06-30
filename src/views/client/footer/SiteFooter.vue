<template>
  <div class="site-footer--outer fxbx fd-c sp-ctr">
    <span class="site-footer--text">&copy;{{ brandText }}</span>
    <a :href="credit.link" class="credit">{{ credit.text }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandText: '2019 DJ Encouter | All Rights Reserved',
      credit: {
        text: 'rabbitwerks.js',
        link: 'https://www.youtube.com/rabbitwerksjavascript',
      }
    }
  }
}
</script>

<style scoped>
.site-footer--outer {
  min-height: 20vh;
  background-image: url('../../../assets/img/view-landing_space01-1_1920x1080.jpg');
  background-position: 0 20%;
  padding-top: 1.5rem;
}
.background-image {
  height: 100px;
}
.site-footer--text {
  letter-spacing: 2px;
  margin-bottom: 1rem;
}
.credit {
  text-decoration: none;
  color: rgb(53, 53, 53);
}
.credit:hover {
  color: rgb(85, 85, 85);
}
</style>
