<template>
  <div class="mix--group--outer"> 
    <h3 class="mix-number">{{ mix.title }}</h3>
    
    <div
      :class="viewport.width < 480 ? 'fd-c' : 'flexgap-2'" 
      class="mix--group--inner fbx"
    >
      <div class="mix--group--info f1">

        <MC--Input--Title 
          :mix="mix"
          :beingEdited="beingEdited"
          @updateMixTitle_CE="updateMixTitle"
        />

        <MC--Input--Embed--Desktop
          :mix="mix"
          :beingEdited="beingEdited"
          @updateEmbedDesktop_CE="updateEmbedDesktop"
        />

        <MC--Input--Embed--Mobile
          :mix="mix"
          :beingEdited="beingEdited"
          @updateEmbedMobile_CE="updateEmbedMobile"
        />

      </div>

      <div class="mix--group--description f1 fbx fd-c flexbox-space-between">

        <MC--Input--Description
          :mix="mix"
          :beingEdited="beingEdited"
          @updateDescription_CE="updateMixDescription"
        />

        <MC--Mix-Manager
          :mix="mix"
          :beingEdited="beingEdited"
          @saveEdits_CE="saveEdits"
          @deleteMix_CE="deleteMix"
        />

      </div>
    </div>
  </div>
</template>

<script>
import MC__Input__Title from './mc-inputs/MC__Input__Title.vue';
import MC__Input__Embed__Desktop from './mc-inputs/MC__Input__Embed__Desktop.vue';
import MC__Input__Embed__Mobile from './mc-inputs/MC__Input__Embed__Mobile.vue';
import MC__Input__Description from './mc-inputs/MC__Input__Description.vue';
import MC__MixManager from './mc-inputs/MC__MixManager.vue';

export default {
  components: {
    'MC--Input--Title': MC__Input__Title,
    'MC--Input--Embed--Desktop': MC__Input__Embed__Desktop,
    'MC--Input--Embed--Mobile': MC__Input__Embed__Mobile,
    'MC--Input--Description': MC__Input__Description,
    'MC--Mix-Manager': MC__MixManager,
  },
  data() {
    return {
      beingEdited: false,
      edits: {
        title: '',
        embeds: {
          desktop: '',
          mobile: '',
        },
        description: '',
      },
    }
  },
  props: {
    mix: {
      type: Object,
      required: true,
      default: 'No data found. Please refresh to try again..',
    },
  },
  methods: {
    updateMixTitle(value) {
      this.beingEdited = true;
      this.edits.title = value;
    },
    updateEmbedDesktop(value) {
      this.beingEdited = true;
      this.edits.embeds.desktop = value;
    },
    updateEmbedMobile(value) {
      this.beingEdited = true;
      this.edits.embeds.mobile = value;
    },
    updateMixDescription(value) {
      this.beingEdited = true;
      this.edits.description = value;
    },
    saveEdits(id) {
      const payload = {
        id,
        edits: this.edits,
      };
      this.$store.dispatch('saveMixEdits_ACTION', payload);
      this.beingEdited = false;
    },
    deleteMix(id) {
      this.$store.dispatch('deleteMix_ACTION', id)
    }
  }
}
</script>

<style scoped>
.mix--group--outer {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #1b35c5;
  border-radius: 3px;
}
</style>

