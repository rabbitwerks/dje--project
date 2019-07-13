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
export default {

}
</script>

<style>

</style>
