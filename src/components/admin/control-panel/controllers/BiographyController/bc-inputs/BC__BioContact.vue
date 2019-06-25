<template>
  <div class="bio--contact-select">
    <h3 class="bio--label">Current Contact</h3>
    <div class="social-btns--text">
      {{ bioData.bookingContact }} {{ socials[selectedContact].name }}
    </div>
    <div class="fbx a-ctr">
      <div v-for="(social, index) in socials" :key="social.name"
        class="socials--select-group f1">
        <div
          @click="setNewContact(index)"
          :class="selectedContact === index ? 'selected' : ''"
          class="social--item fbx sp-ctr">
            <span class="social--item--text">
              {{ social.name | capitalize }}
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bioData', 'socials', 'selectedContact'],
  methods: {
    setNewContact(value) {
      this.$emit('updateContact_CE', value)
    },
  }
}
</script>

<style scoped>
.bio--contact-select {
  padding: 1rem;
  border: 1px solid var(--border--secondary);
  border-radius: 3px;
}

.social-btns--text {
  margin: 1rem 0;
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
</style>
