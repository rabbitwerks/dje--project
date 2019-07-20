<template>
  <div class="form--group">
    <label for="profile-email">Email</label>
    <input
      :placeholder="email"
      @focus="
        !isEditing
          ? $event.target.value = email
          : $event.target.value = updatedEmail
      "
      v-model="updatedEmail"

      @input="handleInput"

      @blur="
        isEditing
          ? $event.target.value = updatedEmail
          : $event.target.value = null
      "
      class="admin--input"
      type="email" 
      id="profile-email"
    >
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true,
      default: ''
    },
  },
  data() {
    return {
      isEditing: false,
      updatedEmail: '',
    }
  },
  methods: {
    handleInput() {
      this.isEditing = true;
      this.$emit('updateEmail_CE', this.updatedEmail);
    }
  }
}
</script>
