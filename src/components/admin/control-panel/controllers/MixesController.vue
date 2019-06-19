<template>
  <div class="mixes-controller--shell">
    <ControllerHeader text="Mixes | Content Editor" beingEdited="false" />
    <div class="mixes-controller--outer">
      <MC--Main v-for="mix in mixes" :key="mix.id"
        :mix="mix"
        :beingEdited="beingEdited"
      />
      <div class="add-mix--outer fbx flex-justify-end">
        <button class="btn add-new-mix">Add New Mix</button>
      </div>

    </div>
  </div>
</template>

<script>
import ControllerHeader from '@/components/reusable/controller-header/ControllerHeader.vue';
import MC__Main from './MixesController/MC__Main.vue';

export default {
  components: {
    ControllerHeader,
    'MC--Main': MC__Main,
  },
  data() {
    return {
      beingEdited: false
    }
  },
  computed: {
    mixes() {
      return this.$store.getters.mixesData_GET.mixes;
    },
    info() {
      return this.$store.getters.mixesData_GET.info;
    }
  }

}
</script>

<style scoped>
.mixes-controller--outer {
  padding: 1.5rem 2rem;
}

.add-new-mix {
  width: 20%;
}

@media screen and (max-width: 480px) {
  .add-new-mix {
    width: 100%;
  }
}
</style>

