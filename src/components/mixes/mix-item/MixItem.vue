<template>
  <li class="mix--item--outer flex-1">
    <MixItem--Title :title="title" />
    <MixItem--Embed :embed="embed" />
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
    embed: {
      type: String,
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
  width: 90%;
  margin: 2rem 0 3rem 0;
  padding: 0 2rem;
}
</style>
