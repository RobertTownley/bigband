<template>
  <div>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="values.first_name"
          label="First Name"
          :rules="[rules.required]"
          prepend-icon="person"
          type="text"
          required
        />
        <v-text-field
          label="Last Name"
          v-model="values.last_name"
          :rules="[rules.required]"
          prepend-icon="person"
          type="text"
        />
        <v-text-field
          label="Email"
          v-model="values.email"
          :rules="[rules.required]"
          prepend-icon="email"
          type="text"
        />
        <v-text-field
          label="Password"
          v-model="values.password"
          :rules="[rules.required]"
          prepend-icon="lock"
          type="password"
        />
        <v-text-field
          label="Repeat Password"
          v-model="values.password2"
          :rules="[rules.required]"
          prepend-icon="lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn outlined @click="submitForm" color="primary">Register</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data: () => ({
    errors: {},
    rules: {
      required: value => !!value || "Required."
    },
    values: {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password2: null
    }
  }),
  methods: {
    submitForm() {
      fetch("/api/v1/").then(response => {
        console.log(response);
      });
    }
  },
  name: "RegistrationForm"
};
</script>
