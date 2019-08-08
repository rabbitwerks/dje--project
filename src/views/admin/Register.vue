<template>
  <div class="admin--shell">
    <div class="admin-header--outer">
      <div class="header--user-disp fxbx spc-bt a-ctr-">
        <h1 class="header--title">Register</h1>
      </div>
    </div>
    <div class="register--outer fxbx sp-ctr">
      <div class="register--inner fxbx fd-c">
        <h3>Register New Admin</h3>
      </div>
      <form action="POST" class="register-form">
        <!-- <InputName
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
        /> -->

        <!-- PASSWORD GROUP INPUTS -->
        <h3 id="pw-header">Change Password</h3>
        <!-- NEW PASSWORD INPUT -->
        <!-- <InputNewPass 
          @sendValue_NewPass_CE="updateEdits_NewPass"
        /> -->

        <!-- CONFIRM PASSWORD INPUT -->
        <!-- <InputConfirmPass 
          v-if="displayConfirmPassword"
          @sendValue_ConfirmPass_CE="updateEdits_ConfirmPass"
        /> -->
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      registrationData: {
        name: '',
        email: '',
        username: '',
        password: '',
        confirm: '',
        secret: '',
      }
    }
  }
}
</script>

<style scoped>
.register--outer {
  min-height: 80vh;
  border: 2px solid var(--font-color--main);
}
.register--inner {
  width: 40%;
  padding: 1rem 2rem;
  border: 1px solid var(--border--secondary);
}
</style>
