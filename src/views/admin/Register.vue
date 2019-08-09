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
        <form action="POST" class="register-form">
          <InputName
            :name="null"
            @updateName_CE="updateRegData_Name"
          />
          <InputEmail 
            :email="null"
            @updateEmail_CE="updateRegData_Email"
          />
          <InputUsername 
            :username="null"
            @updateUsername_CE="updateRegData_Username"
          />

          <!-- PASSWORD GROUP INPUTS -->
          <h3 id="pw-header">Password</h3>
          <!-- NEW PASSWORD INPUT -->
          <InputNewPass 
            label="Enter Password"
            @sendValue_NewPass_CE="updateRegData_NewPass"
          />

          <!-- CONFIRM PASSWORD INPUT -->
          <InputConfirmPass 
            v-if="displayConfirmPassword"
            @sendValue_ConfirmPass_CE="updateRegData_ConfirmPass"
          />

          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputGroup from '../../components/reusable/admin/inputs/inputGroup.js';

export default {
  
  components: {
    ...InputGroup,
  },
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
  },
  methods: {
    updateRegData_Name(name) {
      this.registrationData.name = name;
    },
    updateRegData_Email(email) {
      this.registrationData.name = email;
    },
    updateRegData_Username(username) {
      this.registrationData.username = username;
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
