<template>
  <div class="biography-controller--shell">
    <ControllerHeader text="Biography | Content Editor" />
    <div class="biography-controller--outer">
      <BC--BioText 
        :beingEdited="beingEdited"
        :text="beingEdited 
          ? biographyEdits
          : bioData.text"
        :selectedContact="selectedContact"
        @updateBio_CE="updateBio"
      />
      <div class="bio--contact-select">
        <h3 class="bio--label">Current Contact</h3>
        <blockquote class="social-btns--text">
          {{ bioData.bookingContact }} {{ socials[selectedContact].name }}
        </blockquote>
        <div class="fbx a-ctr">
          <div v-for="(social, index) in socials" :key="social.name"
            class="socials--select-group f1">
            <div
              @click="setContact(index)"
              :class="selectedContact === index ? 'selected' : ''"
              class="social--item fbx sp-ctr">
                <span class="social--item--text">
                  {{ social.name | capitalize }}
                </span>
            </div>
          </div>
        </div>

      </div>

      <div class="bio-manager fbx" v-if="beingEdited">
        <button
          @click="saveBioEdits"
          class="btn save-edits"
          >Save Biography Edits
        </button>
        <button
          @click="cancelEdits"
          class="btn cancel-edits"
          >Cancel Edits
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ControllerHeader from '../../../../reusable/controller-header/ControllerHeader.vue'

import BC__BioText from './bc-inputs/BC__BioText.vue';

export default {
  components: {
    ControllerHeader,
    'BC--BioText': BC__BioText,
  },
  data() {
    return {
      biographyEdits: '',
      beingEdited: false,
      selectedContact: 1
    }
  },
  computed: {
    bioData() {
      return this.$store.getters.bioData_GET;      
    },
    socials() {
      return this.$store.getters.socials_GET;
    },
    contactData() {
      return this.$store.getters.contactData_GET;
    },
  },
  methods: {
    setContact(value) {
      this.selectedContact = value;
    },
    updateBio(value) {
      this.biographyEdits = value;
      this.beingEdited = true;
    },
    saveBioEdits() {
      const payload = {
        biographyEdits: this.biographyEdits,
        selectedContact: this.selectedContact,
      }
      this.$store.dispatch('saveBiographyEdits_ACTION', payload);
      this.beingEdited = false;
    },
    cancelEdits() {
      this.biographyEdits = this.bioData.text;
      this.beingEdited = false;
    }
  }
}
</script>

<style scoped>
.biography-controller--outer {
  padding: 1.5rem 2rem;
}



.bio--contact-select {
  padding: 1rem;
  border: 1px solid var(--border--secondary);
  border-radius: 3px;
}

.social--item {
  height: 3rem;
  margin-right: 1rem;
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: pointer;
}

.selected {
  background-color: rgb(12, 26, 100);
}

.bio-manager {
  margin: 1rem 0;
}

.save-edits {
  margin-right: 1rem;
}
</style>
