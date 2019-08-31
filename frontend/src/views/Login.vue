<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <LoginForm />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/forms/LoginForm.vue";

export default {
  components: {
    LoginForm
  }
};
</script>
