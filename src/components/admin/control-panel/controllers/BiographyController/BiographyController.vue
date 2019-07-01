<template>
  <div class="biography-controller--shell">
    <ControllerHeader text="Biography | Content Editor" />
    <div class="biography-controller--outer">
      <BC--BioText 
        :beingEdited="beingEdited"
        :text="bioData.text"
        :selectedContact="selectedContact"
        @updateBio_CE="updateBio"
      />
      <BC--BioContact
        :bioData="bioData"
        :socials="socials"
        :selectedContact="selectedContact"
        @updateContact_CE="updateContact"
      />

      <BC--BioManager 
        :beingEdited="beingEdited"
        @saveBioEdits_CE="saveBioEdits"
        @cancelEdits_CE="cancelEdits"
      />
      
    </div>
  </div>
</template>

<script>
import ControllerHeader from '../../../../reusable/controller-header/ControllerHeader.vue'

import BC__BioText from './bc-inputs/BC__BioText.vue';
import BC__BioContact from './bc-inputs/BC__BioContact.vue';
import BC__BioManager from './BC__BioManager';

export default {
  components: {
    ControllerHeader,
    'BC--BioText': BC__BioText,
    'BC--BioContact': BC__BioContact,
    'BC--BioManager': BC__BioManager,
  },
  data() {
    return {
      biographyEdits: '',
      beingEdited: false,
      selectedContact: 1,
      oldContact: 2
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
    updateContact(payload) {
      this.selectedContact = payload.newVal;
      this.oldContact = payload.oldVal;
      this.beingEdited = true;
    },
    updateBio(value) {
      this.biographyEdits = value;
      this.beingEdited = true;
    },
    saveBioEdits() {
      const payload = {
        biographyEdits: this.biographyEdits || this.bioData.text,
        selectedContact: this.selectedContact,
      }
      this.$store.dispatch('saveBiographyEdits_ACTION', payload);
      this.beingEdited = false;
    },
    cancelEdits() {
      this.biographyEdits = this.bioData.text;
      this.selectedContact = this.oldContact;
      this.beingEdited = false;
    }
  }
}
</script>

<style scoped>
.biography-controller--outer {
  padding: 1.5rem 2rem;
}

</style>
