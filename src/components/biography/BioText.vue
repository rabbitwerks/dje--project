<template>
  <div class="bio-text--outer flex-2 fxbx a-ctr">
    <div class="bio-text--content" v-html="fullText" />
  </div>
</template>

<script>
export default {
  props: ['text', 'bookingContact', 'contact'],
  computed: {
    fullText() {
      return `${ this.text } ${ this.bookingContact } <a style="color: var(--font-color--main)" href="${ this.contact.link }">${ this.contact.name }</a>.`
    }
  },
}
</script>

<style scoped>
.bio-text--outer {
  padding: 1rem;
  line-height: 1.4rem;
  font-weight: 300;
}
.bio-text--content {
  white-space: pre-wrap;
}
</style>
