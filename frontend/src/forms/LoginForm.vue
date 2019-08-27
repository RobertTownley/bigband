<template>
  <div>
    <v-card-text>
      <v-alert v-if='errorMsg' type='error'>{{ errorMsg }}</v-alert>
      <v-form>
        <v-text-field
          v-model='values.email'
          :error-messages='errors.email'
          label="Login"
          name="login"
          prepend-icon="person"
          type="text"
        ></v-text-field>

        <v-text-field
          v-model='values.password'
          :error-messages='errors.password'
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
      <v-btn @click='login' color="primary">Login</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { getCookie } from '@/auth.js';

export default {
  computed: {
    errorMsg() {
      return this.errors.non_field_errors
        ? this.errors.non_field_errors[0]
        : null
    },
  },
  data: () => ({
    errors: {},
    values: {
      email: null,
      password: null,
    }
  }),
  methods: {
    login() {
      this.resetErrors()
      fetch("/api/v1/auth/login/", {
        body: JSON.stringify(this.values),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        method: "POST",
      }).then(rawResponse => {
        if(rawResponse.status == 200){
          // Successful Login
          rawResponse.json().then(response => {
            console.log("SUCCESS")
            console.log(response)
          })
        } else if(rawResponse.status == 400) {
          // Unsuccessful login
          rawResponse.json().then(response => {
            this.errors = response
          })
        } else {
          console.log(rawResponse)
          this.errors = {
            non_field_errors: [
              "Sorry, something went wrong. Please try again later.",
            ],
          }
        }
      })
    },
    navigateForgotPassword() {
      this.$router.push('/forgot')

    },
    resetErrors() {
      this.errors = {}
    },
  }
}
</script>
