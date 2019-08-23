<template>
  <div>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Login"
          name="login"
          prepend-icon="person"
          type="text"
        ></v-text-field>

        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn @click='navigateForgotPassword'
        color="accent">Forgot Password?</v-btn>
      <v-btn color="primary">Login</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  methods: {
    navigateForgotPassword() {
      this.$router.push('/forgot')

    }
  }
}
</script>
