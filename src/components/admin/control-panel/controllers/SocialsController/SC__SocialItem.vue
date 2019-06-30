<template>
  <div class="social-item--outer fxbx">
    <div class="form-group f1 site-name" >
      <label :for="social.name">Site Name:</label>
      <input 
        :id="social.name" 
        type="text"
        class="admin--input"
        :placeholder="social.name | capitalize"
        @focus="!edits.siteName
          ? $event.target.value = social.name
          : null"
        
        v-model="edits.siteName"

        @blur="edits.siteName
          ? $event.target.value = edits.siteName
          : $event.target.value = null"
      >
    </div>
    <div class="form-group f3 site-url">
      <label :for="social.link">Site URL:</label>
      <input 
        :id="social.link" 
        type="text"
        class="admin--input"
        :placeholder="social.link"
        @focus="social.link
          ? $event.target.value = social.link
          : null
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
        @click="updateSiteName"
        class="save-edits btn">Save Edits</button>
      <button 
        v-if="[ !edits.siteName || !edits.siteURL ] && [ edits.siteName && edits.siteURL ]"
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
    updateSiteName() {
      this.$store.dispatch('updateSiteName_ACTION', {
        index: this.index,
        value: this.edits.siteName
      });
    },
    deleteSocialItem() {
      if (confirm('Are You Fucking SHURE!<!<!<')) {
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
