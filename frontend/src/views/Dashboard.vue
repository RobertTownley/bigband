<template>
  <div class="dashboard">
    <h1>This is a logged-in user's dashboard: {{ isAuthenticated }}</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.isAuthenticated = this.$store.getters.isAuthenticated;
  },
  data() {
    return {
      isAuthenticated: "WHEE"
    };
  }
};
</script>
