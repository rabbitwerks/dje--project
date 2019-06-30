<template>
  <div class="socials-controller--shell">
    <div class="controller--header fxbx a-ctr">
      Social Media Content Editor
    </div>
    <div class="socials-controller--outer">

      <SC--SocialGroup
        :socials="socials"
      />

      <div v-if="newSocial.adding" class="add-new-social--outer">
        <h3>Add New Social Item</h3>
        <div class="add-new-social--inner fxbx">
          <div class="form-group site-name" >
          <label for="new-social--name">Site Name:</label>
          <input 
            id="new-social--name" 
            type="text"
            class="admin--input"
            placeholder="Enter the name of the social media site."
            v-model="newSocial.siteName"

          >
        </div>
        <div class="form-group f3 site-url">
          <label for="new-social--link">Site URL:</label>
          <input 
            id="new-social--link" 
            type="text"
            class="admin--input"
            placeholder="Enter the link of the social media site."
            v-model="newSocial.siteLink"
          >
        </div>
        </div>
      </div>

      <div class="socials-manager--outer fxbx j-fe">
        <button
          v-if="!newSocial.adding"
          @click="addingNewSocialItem"
          class="add-social btn"
          >Add New Contact
        </button>
        <div
          v-if="newSocial.editing"
          class="edit-btns fxbx j-fe">
          <button
            @click="saveAdd"
            class="save-social btn"
            >Save Contact
          </button>
          <button
            @click="cancelAdd"
            class="cancel-social btn"
            >Cancel
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SC__SocialGroup from './SC__SocialGroup.vue';

export default {
  components: {
    'SC--SocialGroup': SC__SocialGroup,
  },
  data() {
    return {
      newSocial: {
        adding: false,
        editing: false,
        siteName: '',
        siteURL: '',
      }
    }
  },
  computed: {
    socials() {
      return this.$store.getters.socials_GET;
    }
  },
  methods: {
    addingNewSocialItem() {
      this.newSocial.adding = true;
      this.newSocial.editing = true;
    },
    saveAdd() {
      const payload = {
        siteName: this.newSocial.siteName,
        siteURL: this.newSocial.siteURL,
      }
      this.$store.dispatch('saveNewSocial_ACTION', payload)
      this.newSocial.adding = false;
      this.newSocial.editing = false;
    },
    cancelAdd() {
      console.log('hello')
    }
  }
}
</script>

<style scoped>
.socials-controller--outer {
  padding: 1.5rem 2rem;
}
.controller--header {
  height: 5rem;
  font-size: 1.5rem;
  padding-left: 2rem;
  border-bottom: 2px solid rgb(255, 255, 255);
}
.add-new-social--outer {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--border--secondary);
  border-radius: 3px; 
}
.add-new-social--outer h3 {
  margin-bottom: 1rem;
}
.site-name {
  min-width: 15vw;
  margin-right: 1rem;
}
.save-social {
  margin-right: 1rem;
}
</style>
