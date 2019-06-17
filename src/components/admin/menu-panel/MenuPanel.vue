<template>
  <div 
    class="menu--panel"
    :class="viewport.width < 480
      ? ''
      : 'f1'
    "
  >
    <div class="menu--item fbx a-ctr">
      Mixes
    </div>
    <div class="menu--item fbx a-ctr">
      Biography
    </div>
    <div class="menu--item fbx a-ctr">
      Socials
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu--panel {
  background-color: rgb(59, 151, 131);
}
.menu--item {
  height: 5rem;
  font-size: 1.5rem;
  padding-left: 1.5rem;
  background: rgb(27, 86, 104);
  border-bottom: 1px solid #fff;
  cursor: pointer;
}
.menu--item:hover {
  background: rgb(44, 109, 129);
}
</style>
