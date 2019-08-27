<template>
  <div>
    <v-card-text>
      <v-alert v-if='message' type='success'>{{ message }}</v-alert>
      <v-alert v-if='errorMsg' type='error'>{{ errorMsg }}</v-alert>
      <v-form>
        <v-text-field
          label="Email Address"
          v-model='values.email'
          name="email"
          :error-messages='errors.email'
          prepend-icon="person"
          type="text"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn @click='sendPasswordReset' color="primary">Send Reset Link</v-btn>
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
  data() {
    return {
      errors: {},
      message: null,
      values: {},
    }
  },
  methods: {
    sendPasswordReset() {
      fetch("/api/v1/auth/password/reset/", {
        body: JSON.stringify(this.values),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        method: "POST",
      }).then(rawResponse => {
        if(rawResponse.status == 200){
          // Successful Password Reset
          rawResponse.json().then(response => {
            this.message = response.detail
          })
        } else if(rawResponse.status == 400) {
          // Unsuccessful login
          rawResponse.json().then(response => {
            this.errors = response
          })
        } else {
          this.errors = {
            non_field_errors: [
              "Sorry, something went wrong. Please try again later.",
            ],
          }
        }
      })
    }
  },
}
</script>
