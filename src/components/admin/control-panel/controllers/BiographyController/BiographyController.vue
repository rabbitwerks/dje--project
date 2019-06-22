<template>
  <div class="biography-controller--shell">
    <ControllerHeader text="Biography | Content Editor" />
    <div class="biography-controller--outer">
      <div class="bio--descriptionr">
        <label for="bio--text"><h3>Biography Text</h3></label>
        <textarea 
          class="bio--group--text admin--input" 
          id="bio--text"
          :placeholder="bioData.text"
          v-model="biographyEdits"
        >
        </textarea>
      </div>
      <div class="bio--contact-select">
        <h3>Current Contact</h3>
        <div class="fbx a-ctr">
        <div v-for="(social, index) in socials" :key="social.name"
          class="socials--radio-group f1">
          <div
            @click="setContact(index)"
            class="social--label">
            {{ social.name | capitalize }}
          </div>

        </div>

        </div>
      </div>
      <div class="bio-manager fbx">
        <button class="btn save-edits">
          Save Biography Edits
        </button>
        <button class="btn cancel-edits">
          Cancel Edits
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ControllerHeader from '../../../../reusable/controller-header/ControllerHeader.vue'
export default {
  components: {
    ControllerHeader
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
      console.log(value)
    }
  }
}
</script>

<style scoped>
.biography-controller--outer {
  padding: 1.5rem 2rem;
}
.bio--group--outer {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #1b35c5;
  border-radius: 3px;
}
label {
  display: block;
  margin-bottom: 1rem;
}
.bio--group--text {
  width: 100%;
  height: 15rem;
}

.selected {
  background-color: #fff;
}

.save-edits {
  margin-right: 1rem;
}
</style>
