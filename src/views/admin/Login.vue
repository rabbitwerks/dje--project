<template>
  <div class="admin--shell">
    <h1>Admin Login</h1>
    <div class="login--outer fxbx j-ctr a-ctr">
      <div class="login--inner">
        <div 
          v-if="loggingIn" 
          class="logging-in--outer"
          >...logging...in...
        </div>

        <div 
          v-else 
          class="login--form"
          >
          <div class="form--group">
            <label for="login-username">Username</label>
            <input
              v-model="username"
              type="text" 
              id="login-username"
              class="admin--input"
              required
            >
          </div>
          <div class="form--group">
            <label for="login-password">Password</label>
            <input
              v-model="password"
              type="text" 
              id="login-password"
              class="admin--input"
              required
            >
          </div>
          <button
            @click="attemptLogin"
            class="btn login-btn"
            >Login
          </button>
        </div>
      </div>
      
    </div>
  </div>

</template>

<script>
import Joi from 'joi';

const schema = Joi.object().keys({
  username: Joi.string().min(2).max(16).required(),
  password: Joi.string().min(6).required()
});

const LOCAL_URL = 'http://localhost:1337/auth/login';

export default {
  data() {
    return {
      username: '',
      password: '',
      loggingIn: false,
      errorMessage: '',
    }
  },
  methods: {
    attemptLogin() {
      const body = {
        username: this.username,
        password: this.password,
      };
      const result = Joi.validate(body, schema);

      if (result.error === null) {
        this.loggingIn = true;
        fetch(`${LOCAL_URL}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(body),
        }).then(response => {
          if (response.ok) {
            return response.json()
          }
          return response.json().then((error) => {
            throw new Error(error.message);
          })
        }).then(result => {
          this.loggingIn = false;
          // action / mutation to update isLoggedIn property
          // router push to admin page
          localStorage.token = result.token;
          this.$store.dispatch('adminLoggedIn_ACTION');
          this.$router.push('/admin');
        })
          .catch(error => {
            setTimeout(() => {
              this.loggingIn = false
              this.errorMessage = error.message;
            }, 1000)
          })
      } else {
        // display error message
        console.log(result.error)
      }
    }
  }
}
</script>

<style scoped>
label {
  display: block;
}
.admin--shell {
  min-height: 100vh;
  padding: 2rem 5rem;
  background-color: var(--view-color--one);
}
.login--outer {
  min-height: 90vh;
  padding: 1rem 4rem;
  background-color: var(--view-color--two);
  border: 2px solid #eee;
}
.login--inner {
  width: 50vw;
}
.login-btn {
  margin-top: 1rem;
}
</style>
