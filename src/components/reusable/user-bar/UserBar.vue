<template>
  <div class="user-bar--shell">
    <div class="user-bar--outer fxbx a-ctr">
      <div class="ub--username">
        <span>Greetings, {{ name.toUpperCase() }}</span>
      </div>
      <div
        v-if="showSettingsBar"
        class="ub--options">
        <div class="user-options--outer fxbx">
          <UserOption
            @click.native="navigateToSite"
            optionText="Main Site"
          />
          <UserOption
            v-if="this.pageLocation === 'profile'"
            @click.native="navigateToDashboard"
            optionText="Dashboard"
          />
          <UserOption
            v-else
            @click.native="navigateToProfile"
            optionText="Profile"
          />
          <UserOption
            @click.native="attemptLogout($event)"
            optionText="Logout"
          />
        </div>
      </div>
      <div @click="showSettingsBar = !showSettingsBar" class="ub--settings-outer">
        <!-- needs to settings cog in svg format ;) -->
        <img 
          class="settings-cog pointer"
          src="../../../assets/img/single_cog_SM.svg" 
          alt="settings cog svg">
        <img>
      </div>
    </div>
  </div>
</template>

<script>
import UserOption from './UserOption.vue';

export default {
  props: {
    name: {
      type: String,
      default: 'Earthling'
    }
  },
  components: {
    UserOption,
  },
  data() {
    return {
      showSettingsBar: false,
    }
  },
  methods: {
    navigateToSite() {
      this.showSettingsBar = false;
      this.$router.push('/');
    },
    navigateToDashboard() {
      this.showSettingsBar = false;
      this.$router.push('/admin');
    },
    navigateToProfile() {
      this.showSettingsBar = false;
      this.$router.push('/profile');
    },
    attemptLogout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.user-bar--outer {
  padding-top: .5rem;
}
.ub--username {
  padding: .5rem 1rem .5rem 0;
  border: 2px solid transparent;
}
.ub--settings-outer {
  padding-top: .25rem;
}
.settings-cog {
  width: 1.25rem;
}
.settings-panel--outer {
  width: 100%;
  border: 2px solid var(--border--dark)
}
.user-options--outer {
  margin-right: 1rem;
  border: 1px solid var(--border--primary);
}

</style>
