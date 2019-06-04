<template>
  <li class="mix--item flex-1">
    <MixItem--Title :title="title" />

    <div class="mix--embed" v-html="embed" />
    <div class="mix--description" v-text="description" />
  </li>
</template>

<script>
import MixItem__Title from './MixItem__Title.vue';

export default {
  components: {
    'MixItem--Title': MixItem__Title,
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
.mix--item {
  width: 80%;
  margin: 2rem 0;
  padding: 0 2rem;
}


.mix--embed {
  width: 90%;
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #192ea3;
  border-radius: 3px;
}
.mix--description {
  width: 90%;
  margin-left: 10%;
  padding: 2rem;
  border: 1px solid #746ce6;
  border-radius: 3px;
}
</style>
