<template>
  <div class="bio--image fxbx j-ctr a-ctr">
    <img :src="bioImg" alt="altText">
  </div>
</template>

<script>
export default {
  data() {
    return {
      bioImg: 'https://res.cloudinary.com/rabbitwerks-js/image/upload/q_auto:best/v1560820553/dj-encounter/brady-profile-pic.jpg',
      altText: 'DJ Encounter - Brady Hill - Profile Picture',
    }
  }
}
</script>

<style scoped>
.bio--image {
  padding-right: 2rem;
}
@media screen and (max-width: 480px){
  .bio--image {
    margin-bottom: 2rem;
    padding-right: 0;
  }
  .bio--image img {
    width: 100%;
  }
}
</style>
