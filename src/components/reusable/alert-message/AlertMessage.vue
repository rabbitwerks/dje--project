<template>
  <div class="alert-message--outer">
    <span>Hello this is an alert message.</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
      default: 'something happened...'
    },
    type: {
      type: String,
      required: true,
      default: 'success',
    },
  },
  data() {
    return {
      isDisplayed: true
    }
  }
}
</script>

<style>
span {
  margin: 1rem;
}
.success {
  background-color: rgb(129, 235, 143);
}
.warning {
  background-color: rgb(238, 210, 87);
}
.error {
  background-color: rgb(211, 90, 90);
}
</style>
