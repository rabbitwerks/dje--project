<template>
  <div class="admin--shell">
    <div class="admin-header--outer">
      <div class="header--user-disp fxbx spc-bt a-ctr-">
        <h1 class="header--title">Admin Login</h1>
      </div>
    </div>
    <div class="login--shell fxbx j-ctr a-ctr">
      <div class="login--outer">
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
            <h3>Welcome Earthling - Please Log In...</h3>
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
          const { user, token } = result;
          this.loggingIn = false;
          // action / mutation to update isLoggedIn property
          // router push to admin page
          localStorage.token = token;
          this.$store.dispatch('adminLoggedIn_ACTION', user);
          this.$router.push('/admin');
        })
          .catch(error => {
            setTimeout(() => {
              // display error message
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
.login--shell {
  min-height: 90vh;
  padding: 1rem 4rem;
  background-color: var(--view-color--two);
  border: 2px solid #eee;
}
.login--outer {
  width: 30vw;
  padding: 1rem;
  border: 2px solid var(--border--secondary);
  border-radius: 3px;
}
.login-btn {
  margin-top: 1rem;
}
</style>
