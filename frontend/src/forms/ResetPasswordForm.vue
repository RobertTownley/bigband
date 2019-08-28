<template>
  <div>
    <v-card-text>
      <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
      <v-alert v-if="message" type="success">{{ message }}</v-alert>
      <v-form v-if="!message">
        <v-text-field
          label="New Password"
          v-model="values.new_password1"
          name="new_password1"
          :error-messages="errors.new_password1"
          prepend-icon="lock"
          type="password"
        ></v-text-field>
        <v-text-field
          label="Repeat Password"
          v-model="values.new_password2"
          name="new_password2"
          :error-messages="errors.new_password2"
          prepend-icon="lock"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions v-if="!message">
      <div class="flex-grow-1"></div>
      <v-btn @click="sendPasswordReset" color="primary">Reset Password</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { getCookie } from "@/auth.js";

export default {
  computed: {
    errorMsg() {
      return this.errors.non_field_errors
        ? this.errors.non_field_errors[0]
        : null;
    }
  },
  data() {
    return {
      errors: {},
      message: null,
      values: {}
    };
  },
  methods: {
    sendPasswordReset() {
      const data = Object.assign(this.values, this.$route.params);
      console.log(data);
      this.resetForm();
      fetch("/api/v1/auth/password/reset/confirm/", {
        body: JSON.stringify(this.values),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken")
        },
        method: "POST"
      }).then(rawResponse => {
        if (rawResponse.status == 200) {
          // Successful Password Reset
          rawResponse.json().then(response => {
            this.message = response.detail;
          });
        } else if (rawResponse.status == 400) {
          // Unsuccessful login
          rawResponse.json().then(response => {
            this.errors = response;
          });
        } else {
          this.errors = {
            non_field_errors: [
              "Sorry, something went wrong. Please try again later."
            ]
          };
        }
      });
    },
    resetForm() {
      this.errors = {};
      this.message = null;
    }
  }
};
</script>
