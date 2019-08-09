<template>
  <div class="form--group">
    <label for="profile-name">Name</label>
    <input
      :placeholder="name"
      @focus="
        !isEditing
          ? $event.target.value = name
          : $event.target.value = updatedName
      "
      v-model="updatedName"

      @input="handleInput"

      @blur="
        isEditing
          ? $event.target.value = updatedName
          : $event.target.value = null
      "
      class="admin--input"
      type="text" 
      id="profile-name"
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    }
  },
  data() {
    return {
      isEditing: false,
      updatedName: ''
    }
  },
  methods: {
    handleInput() {
      this.isEditing = true;
      this.$emit('updateName_CE', this.updatedName);
    }
  }
}
</script>
