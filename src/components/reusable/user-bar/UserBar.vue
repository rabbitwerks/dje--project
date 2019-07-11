<template>
  <div class="user-bar--outer fxbx a-ctr">
    <div class="ub--username">
      <span>Greetings, {{ name.toUpperCase() }}</span>
    </div>
    <div class="ub--settings-outer">
      <!-- needs to settings cog in svg format ;) -->
      <img 
        class="settings-cog pointer"
        src="../../../assets/img/single_cog_SM.svg" 
        alt="settings cog svg">
      <img>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Earthling'
    }
  }
}
</script>

<style scoped>
.user-bar--outer {
  padding-top: .5rem;
}
.ub--username {
  padding-right: 1rem;
}
.ub--settings-outer {
  padding-top: .25rem;
}
.settings-cog {
  width: 1.25rem;
}
</style>
