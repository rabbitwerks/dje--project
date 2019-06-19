<template>
  <div class="admin--shell">
    <h1>Admin Panel</h1>
    <div 
      class="admin--outer fbx"
      :class="viewport.width < 480 ? 'fd-c' : ''"
    >
      <MenuPanel />
      <ControllerPanel />
    </div>
  </div>
</template>

<script>
import MenuPanel from '@/components/admin/menu-panel/MenuPanel.vue';
import ControllerPanel from '@/components/admin/control-panel/ControllerPanel.vue';

export default {
  components: {
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

@media screen and (max-width: 480px) {
  .admin--shell {
    padding: 1rem;
  }
}

</style>
