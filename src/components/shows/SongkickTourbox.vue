<template>
  <div class="tourbox--outer">
    <a
      href="https://www.songkick.com/artists/9520389"
      class="songkick-widget"
      data-theme="dark"
      data-track-button="on"
      data-detect-style="true"
      data-font-color="#eee"
      data-background-color="#111"
      >Check out all of DJ Encounter's upcoming shows!
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    let tourboxWidget = document.createElement('script');
    tourboxWidget.setAttribute('src', '//widget.songkick.com/9520389/widget.js');
    document.head.appendChild(tourboxWidget);
  }
}
</script>

<style scoped>
.tourbox--outer {
  width: var(--global-width);
  margin-left: var(--global-margin-fix);
}
</style>
