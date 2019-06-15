<template>
  <li class="mix--item--outer flex-1">
    <MixItem--Title :title="title" />
    <MixItem--Embed :embeds="embeds" />
    <MixItem--Description :description="description" />    
  </li>
</template>

<script>
import MixItem__Title from './MixItem__Title.vue';
import MixItem__Embed from './MixItem__Embed.vue';
import MixItem__Description from './MixItem__Description.vue';

export default {
  components: {
    'MixItem--Title': MixItem__Title,
    'MixItem--Embed': MixItem__Embed,
    'MixItem--Description': MixItem__Description,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    embeds: {
      type: [Object, String],
      required: true,
      default: 'Not able to find mix',
    },
    description: {
      type: String,
      default: 'Check out my awesome mix!',
    }
  }
}
</script>

<style scoped>
.mix--item--outer {
  width: var(--global-width);
  margin-bottom: 5rem;
  padding: 0 .25rem;
}
</style>
