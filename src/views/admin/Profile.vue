<template>
  <div class="admin--shell">
    <div class="admin-header--outer">
      <div class="header--user-disp fxbx spc-bt a-ctr-">
        <h1 class="header--title">Profile</h1>
        <UserBar :name="user.name" />
      </div>
    </div>
    <div
      class="profile--outer fxbx sp-ctr"
    >
      <form class="profile--inner fxbx fd-c">
        <InputName
          :name="user.name"
          @updateName_CE="updateEdits_Name"
        />
        <InputEmail 
          :email="user.email"
          @updateEmail_CE="updateEdits_Email"
        />
        <InputUsername 
          :username="user.username"
          @updateUsername_CE="updateEdits_Username"
        />
        <!-- PASSWORD GORUP INPUTS -->
        <h3>Change Password</h3>
        <!-- CURRENT PASSWORD INPUT -->
        <div class="form--group">
          <label for="profile-pw--current">Current Password</label>
          <input
            @focus="
              !isEditing
                ? $event.target.value = user.password
                : $event.target.value = edits.password.current
            "
            v-model="edits.password.current"

            @input="isEditing = true"

            @blur="
              isEditing
                ? $event.target.value = edits.password.current
                : $event.target.value = null
            "
            class="admin--input"
            type="password"
            autocomplete=""
            id="profile-pw--current"
          >
        </div>

        <!-- NEW PASSWORD INPUT -->
        <div class="form--group">
          <label for="profile-pw--new">New Password</label>
          <input
            @focus="
              !isEditing
                ? $event.target.value = null
                : $event.target.value = edits.password.newPassword
            "
            v-model="edits.password.newPassword"

            @input="isEditing = true"

            @blur="
              isEditing
                ? $event.target.value = edits.password.newPassword
                : $event.target.value = null
            "
            class="admin--input"
            type="password"
            autocomplete=""
            id="profile-pw--new"
          >
        </div>

        <!-- CONFIRM PASSWORD INPUT -->
        <div class="form--group">
          <label for="profile-pw--confirm">Confirm Password</label>
          <input
            @focus="
              !isEditing
                ? $event.target.value = null
                : $event.target.value = edits.password.confirmPassword
            "
            v-model="edits.password.confirmPassword"

            @input="isEditing = true"

            @blur="
              isEditing
                ? $event.target.value = edits.password.confirmPassword
                : $event.target.value = null
            "
            class="admin--input"
            type="password"
            autocomplete=""
            id="profile-pw--confirm"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserBar from '@/components/reusable/user-bar/UserBar.vue';
import InputName from '../../components/admin/profile/Input_Name.vue';
import InputEmail from '../../components/admin/profile/Input_Email.vue';
import InputUsername from '../../components/admin/profile/Input_Username.vue';

export default {
  components: {
    UserBar,
    InputName,
    InputEmail,
    InputUsername,
  },
  data() {
    return {
      editingProfile: false,
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
  },
  methods: {
    updateEdits_Name(payload) {
      this.editingProfile = true;
      this.edits.name = payload;
    },
    updateEdits_Email(payload) {
      this.editingProfile = true;
      this.edits.email = payload;
    },
  }

}
</script>

<style scoped>
.profile--outer {
  min-height: 80vh;
  border: 2px solid var(--font-color--main);
}
.profile--inner {
  width: 40%;
  padding: 1rem 2rem;
  border: 1px solid var(--border--secondary)
}
.form--group {
  margin-bottom: 1rem;
}
</style>

