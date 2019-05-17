<template>
  <div class="landing--outer flexbox flexdir-col space-center">
    <div class="landing--image flex-6">

    </div>
    <div class="landing--brand flex-2">
      <h1>{{ title }}</h1>
    </div>
    <div class="socials--outer flex-1 flexbox-space-evenly">
      <a 
        v-for="item in socials"
        :key="item.url"
        :href="item.url"
        class="flex-1 flex-space-center"
        > {{ item.url }}
      </a>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'DJ ENCOUNTER',
      socials: [
        {
          site: 'SoundCloud',
          url: '',
        }
      ]
    }
  }
}
</script>

<style scoped>
.landing--outer {
  background-image: url('../../assets/img/space-bg.jpg');
  background-size: cover;
  height: 100%;
}
.landing--image {
  height: 50%;
}
.landing--brand {
  color: var(--fontColor_Main);
  font-size: 4rem;
}
.socials--outer {
  background-color: #fff;
  width: 70%;
}
</style>
