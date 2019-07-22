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
