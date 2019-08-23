<template>
  <v-form>
    <v-text-field
      label='First Name'
      :error='errors.first_name.length ? true : false'
      :error-messages='errors.first_name'
      v-model='values.first_name'
      prepend-icon='person'
      type='text'
    />
    <v-text-field
      label='Last Name'
      :error='errors.last_name.length ? true : false'
      :error-messages='errors.last_name'
      v-model='values.last_name'
      prepend-icon='person'
      type='text'
    />
    <v-text-field
      label='Email'
      :error='errors.email.length ? true : false'
      :error-messages='errors.email'
      v-model='values.email'
      prepend-icon='email'
      type='text'
    />

  </v-form>
</template>

<script>
export default {
  data: () => ({
    errors: {
      first_name: [],
      last_name: [],
      email: [],
      password: [],
      password2: [],
    },
    values: {
      first_name: null,
      last_name: [],
      email: [],
      password: [],
      password2: [],
    },
    fields: [
      {
        label: "First Name",
        name: "first_name",
        icon: "person",
        type: "text",
        value: null,
      },
      {
        label: "Last Name",
        name: "last_name",
        icon: "person",
        type: "text",
        value: null,
      },
      {
        label: "Email Address",
        name: "email",
        icon: "email",
        type: "email",
        value: null,
      },
      {
        label: "Password",
        name: "password",
        icon: "lock",
        type: "password",
        value: null,
      },
      {
        label: "Repeat Password",
        name: "password2",
        icon: "lock",
        type: "password",
        value: null,
      },
    ],
  }),
  name: "RegistrationForm",

}
</script>
