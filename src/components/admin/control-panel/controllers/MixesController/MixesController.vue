<template>
  <div class="mixes-controller--shell">
    <ControllerHeader text="Mixes | Content Editor" beingEdited="false" />
    <div class="mixes-controller--outer">
       
      <MC--Main v-for="mix in mixes" :key="mix.id"
        :mix="mix"
        :beingEdited="beingEdited"
      />
      <MC--Add-New-Mix
        v-if="addingNewMix"
        @cancelAdd="addingNewMix = false"
      />
      <div class="add-mix--outer fxbx flex-justify-end">
        <button
          @click="addingNewMix = true"
          class="btn add-new-mix"
          >Add New Mix
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import ControllerHeader from '@/components/reusable/admin/controller-header/ControllerHeader.vue';
import MC__Main from './MC__Main.vue';
import MC__AddNewMix from './mc-add-new-mix/MC__AddNewMix.vue';


export default {
  components: {
    ControllerHeader,
    'MC--Main': MC__Main,
    'MC--Add-New-Mix': MC__AddNewMix,
  },
  data() {
    return {
      beingEdited: false,
      addingNewMix: false,
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

