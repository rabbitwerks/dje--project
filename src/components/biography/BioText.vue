<template>
  <div class="bio--text--outer flex-2 fbx a-ctr">
    <p v-html="fullText" />
  </div>
</template>

<script>
export default {
  props: ['text', 'contact'],
  computed: {
    fullText() {
      return `${ this.text } <a style="color: var(--font-color--main)" href="${ this.contact.link }">${ this.contact.name }</a>.`
    }
  },
}
</script>

<style scoped>
.bio--text {
  padding: 1rem;
  line-height: 1.4rem;
  font-weight: 300;
}
</style>
