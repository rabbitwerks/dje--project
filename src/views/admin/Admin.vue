<template>
  <div class="admin--shell">
    <div class="admin-header--outer">
      <div class="header--user-disp fxbx spc-bt a-ctr-">
        <h1 class="header--title">Admin Dashboard</h1>

        <UserBar :name="user.name" />
      </div>
    </div>
    <div
      :class="viewport.width < 480 ? 'fd-c' : ''"
      class="admin--outer fxbx"
    >
      <MenuPanel />
      <ControllerPanel />
    </div>
  </div>
</template>

<script>
import UserBar from '@/components/reusable/user-bar/UserBar.vue'
import MenuPanel from '@/components/admin/menu-panel/MenuPanel.vue';
import ControllerPanel from '@/components/admin/control-panel/ControllerPanel.vue';

export default {
  components: {
    UserBar,
    MenuPanel,
    ControllerPanel,
  },
  computed: {
    user() {
      return this.$store.state.admin.user;
    }
  }
}
</script>

<style>
@import url('../../assets/css/admin.css');

@media screen and (max-width: 480px) {
  .admin--shell {
    padding: 1rem;
  }
}

</style>
