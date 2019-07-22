<template>
  <div class="social-item--outer fxbx">

    <!-- SITE NAME INPUT -->
    <div class="form-group f1 site-name" >
      <label :for="social.name">Site Name:</label>
      <input 
        type="text"
        class="admin--input"
        :id="social.name" 
        ref="name"
        :placeholder="social.name | capitalize"
        @focus="!edits.siteName
          ? $event.target.value = social.name
          : $event.target.value = null"
        
        v-model="edits.siteName"

        @blur="edits.siteName
          ? $event.target.value = edits.siteName
          : $event.target.value = null"
      >
    </div>

    <!-- SITE URL INPUT -->
    <div class="form-group f3 site-url">
      <label :for="social.link">Site URL:</label>
      <input 
        type="text"
        class="admin--input"
        :id="social.link" 
        ref="link"
        :placeholder="social.link"
        @focus="social.link && !edits.siteURL
          ? $event.target.value = social.link
          : null || edits.siteURL
        "

        v-model="edits.siteURL"

        @blur="edits.siteURL
          ? $event.target.value = edits.siteURL
          : $event.target.value = null
        "
      >
    </div>

    <!-- MANAGE ITEM -->
    <div class="manage-social-item--outer fxbx a-fe">
      <button
        v-if="edits.siteName || edits.siteURL"
        @click="updateSocialItem"
        class="save-edits btn"
        >Save Edits
      </button>
      <button 
        v-if="edits.siteName || edits.siteURL"
        @click="cancelSocialEdits"
        class="cancel-edits btn"
        >Cancel Edits
      </button>
      <button 
        v-if="!edits.siteName && !edits.siteURL"
        @click="deleteSocialItem"
        class="delete-social btn"
        >Delete Item
      </button>
    </div>


  </div>
</template>

<script>
export default {
  props: ['social', 'index'],
  data() {
    return {
      edits: {
        siteName: '',
        siteURL: '',
      }
    }
  },
  methods: {
    updateSocialItem() {
      if (!this.edits.siteName && !this.edits.siteURL) {
        // error message
        console.log('Saving requires either a site name and url.')
      } else {
        this.$store.dispatch('updateSiteName_ACTION', {
          index: this.index,
          name: this.edits.siteName || this.social.name,
        });
        this.$store.dispatch('updateSiteURL_ACTION', {
          index: this.index,
          link: this.edits.siteURL || this.social.link,
        });
        this.edits.siteName = '';
        this.edits.siteURL = '';
      }
      this.$refs.name.value = null;
      this.$refs.link.value = null;
    },
    cancelSocialEdits() {
      this.edits.siteName = '';
      this.edits.siteURL = '';
    },
    deleteSocialItem() {
      if (confirm('Are you sure you want to delete this social media item?')) {
        this.$store.dispatch('deleteSocialItem_ACTION', this.index);
        this.edits.siteName = '';
        this.edits.siteURL = ''
      }
    }
  }

}
</script>

<style scoped>
.social-item--outer {
  margin: 1rem 0;
}
.site-name {
  margin-right: 1rem;
  min-width: 15vw;
}
.manage-social-item--outer button {
  margin-left: 1rem;
}

</style>
