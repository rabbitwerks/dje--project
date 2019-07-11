<template>
  <div class="admin--shell">
    <div class="admin-header--outer fxbx spc-bt a-ctr">
      <h1 class="header--title">Admin Dashboard</h1>
      <UserBar name="Brady" />
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
}
</script>

<style scoped>
.admin--shell {
  min-height: 100vh;
  padding: 2rem 5rem;
  background-color: var(--view-color--one);
}
.admin--outer {
  min-height: 90vh;
  background-color: var(--view-color--two);
  border: 2px solid #eee;
}
.admin-header--outer {
  padding: 1rem 0;
}


@media screen and (max-width: 480px) {
  .admin--shell {
    padding: 1rem;
  }
}

</style>
