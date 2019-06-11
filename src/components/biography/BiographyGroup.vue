<template>
  <div class="bio-group--outer fbx j-ctr">
    <div class="bio-group--inner fbx">
      <div class="bio--image flex-1 fbx j-ctr a-ctr">
        <img src="../../assets/img/brady-profile-pic.jpg" alt="">
      </div>
      <div class="bio--text flex-2 fbx a-ctr" v-html="bioData.text">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bioData() {
      return this.$store.getters.bioData_GET;
    }
  }
}
</script>

<style scoped>
.bio-group--outer {
  }
.bio-group--inner {
  min-height: 50vh;
  width: var(--global-width);
  background: var(--view-color--one);
  margin-bottom: 5rem;
  padding: 2rem;
}
.bio--text {
  padding: 1rem;
  line-height: 1.4rem;
  font-weight: 300;
}
</style>
