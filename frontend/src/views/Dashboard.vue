<template>
  <div class="dashboard">
    <h1>This is a logged-in user's dashboard: {{ isAuthenticated }}</h1>
  </div>
</template>

<script>
import { getHeaders } from "@/auth";

export default {
  created() {
    if (this.$store.getters.isAuthenticated) {
      fetch("/api/v1/users/current_user/", {
        method: "GET",
        headers: getHeaders()
      }).then(rawResponse => {
        if (rawResponse.status == 200) {
          return rawResponse.json().then(response => {
            this.$store.dispatch("saveUserData", response);
          });
        } else {
          this.$store.dispatch("deauthenticate");
          this.$router.push("/accounts/login");
        }
      });
    } else {
      this.$router.push("/accounts/login");
    }
  },
  data() {
    return {
      isAuthenticated: "WHEE"
    };
  }
};
</script>
