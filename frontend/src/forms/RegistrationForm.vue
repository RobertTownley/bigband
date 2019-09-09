<template>
  <div>
    <v-card-text>
      <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
      <v-alert v-if="message" type="success">{{ message }}</v-alert>
      <v-form v-if="!message">
        <v-text-field
          v-model="values.first_name"
          :error-messages="errors.first_name"
          label="First Name"
          prepend-icon="person"
          type="text"
          required
        />
        <v-text-field
          label="Last Name"
          v-model="values.last_name"
          :error-messages="errors.last_name"
          prepend-icon="person"
          type="text"
        />
        <v-text-field
          label="Email"
          v-model="values.email"
          :error-messages="errors.email"
          prepend-icon="email"
          type="text"
        />
        <v-text-field
          label="Password"
          v-model="values.password1"
          :error-messages="errors.password1"
          prepend-icon="lock"
          type="password"
        />
        <v-text-field
          label="Repeat Password"
          v-model="values.password2"
          :error-messages="errors.password2"
          prepend-icon="lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions v-if="!message">
      <div class="flex-grow-1"></div>
      <v-btn outlined @click="submitForm" color="primary">Register</v-btn>
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
  data: () => ({
    errors: {},
    message: null,
    values: {}
  }),
  methods: {
    resetForm() {
      this.errors = {};
    },
    submitForm() {
      this.resetForm();
      let data = Object.assign({}, this.values);
      data.email = data.email ? data.email.toLowerCase() : "";
      data.username = data.email;
      fetch("/api/v1/auth/registration/", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken")
        },
        method: "POST"
      }).then(rawResponse => {
        if (rawResponse.status == 200 || rawResponse.status == 201) {
          // Successful Login
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
    }
  }
};
</script>
