<template>
  <div class="admin--shell">
    <div class="admin-header--outer">
      <div class="header--user-disp fxbx spc-bt a-ctr-">
        <h1 class="header--title">Profile</h1>
        <UserBar :name="user.name" />
      </div>
    </div>
    <div class="profile--outer fxbx sp-ctr">
      <form class="profile--inner fxbx fd-c">
        <h3 id="info-header">Update Information</h3>
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

        <!-- PASSWORD GROUP INPUTS -->
        <h3 id="pw-header">Change Password</h3>

        <!-- CURRENT PASSWORD INPUT -->
        <InputCurrentPass 
          @sendValue_CurrentPass_CE="updateEdits_CurrentPass"
        />

        <!-- NEW PASSWORD INPUT -->
        <InputNewPass 
          @sendValue_NewPass_CE="updateEdits_NewPass"
        />

        <!-- CONFIRM PASSWORD INPUT -->
        <InputConfirmPass 
          v-if="displayConfirmPassword"
          @sendValue_ConfirmPass_CE="updateEdits_ConfirmPass"
        />

        
        <div v-if="this.editingProfile" class="action-btns--outer form--group fxbx">
          <button class="btn">Save Changes</button>
          <button class="btn">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserBar from '@/components/reusable/admin/user-bar/UserBar.vue';
import InputName from '@/components/admin/profile/Input_Name.vue';
import InputEmail from '@/components/admin/profile/Input_Email.vue';
import InputUsername from '@/components/admin/profile/Input_Username.vue';

import InputCurrentPass from '@/components/admin/profile/password-group/Input_PW_CurrentPass.vue';
import InputNewPass from '@/components/admin/profile/password-group/Input_PW_NewPass.vue';
import InputConfirmPass from '@/components/admin/profile/password-group/Input_PW_ConfirmPass.vue';

export default {
  components: {
    UserBar,
    InputName,
    InputEmail,
    InputUsername,
    InputCurrentPass,
    InputNewPass,
    InputConfirmPass,
  },
  data() {
    return {
      editingProfile: false,
      displayConfirmPassword: false,
      edits: {
        name: '',
        email: '',
        username: '',
        // move password to separate object
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
    updateEdits_Username(payload) {
      this.editingProfile = true;
      this.edits.username = payload;
    },
    updateEdits_CurrentPass(payload) {
      this.editingProfile = true;
      this.edits.password.current = payload;
    },
    updateEdits_NewPass(payload) {
      this.editingProfile = true;
      this.edits.password.newPassword = payload;
      if(this.edits.password.newPassword.length > 3) {
        this.displayConfirmPassword = true;
      }
    },
    updateEdits_ConfirmPass(payload) {
      this.editingProfile = true;
      this.edits.password.confirmPassword = payload;
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
.form--group:last-of-type {
  margin-bottom: .5rem;
}
#pw-header {
  margin-top: 1rem;
}
</style>

