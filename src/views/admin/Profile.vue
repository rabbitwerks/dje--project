<template>
  <div class="admin--shell">
    <div class="admin-header--outer">
      <div class="header--user-disp fxbx spc-bt a-ctr-">
        <h1 class="header--title">Profile</h1>
        <UserBar :name="user.name" />
      </div>
    </div>
    <div
      :class="viewport.width < 480 ? 'fd-c' : ''"
      class="profile--outer fxbx"
    >
    <div class="form--group">
      <label for="profile-name">Name</label>
      <input
        :placeholder="user.name"
        @focus="
          !isEditing
            ? $event.target.value = user.name
            : $event.target.value = edits.name
        "
        v-model="edits.name"

        @input="isEditing = true"

        @blur="
          isEditing
            ? $event.target.value = edits.name
            : $event.target.value = null
        "
        class="admin--input"
        type="text" 
        id="profile-name"
      >
    </div>
    </div>
  </div>
</template>

<script>
import UserBar from '@/components/reusable/user-bar/UserBar.vue';
export default {
  components: {
    UserBar
  },
  data() {
    return {
      isEditing: false,
      edits: {
        name: '',
        email: '',
        username: '',
        password: {
          current: '',
          newPassword: '',
          confirmPassword: '',
        }
      }
    }
  },
  computed: {
    currentPage() {
      return this.$router.history.current.name;
    },
    user() {
      return this.$store.state.admin.user;
    }
  }

}
</script>

<style scoped>
.profile--outer {
  min-height: 80vh;
  padding: 1rem 2rem;
  border: 2px solid var(--font-color--main);
}
</style>

