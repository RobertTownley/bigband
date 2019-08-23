<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
								<v-toolbar-title>Forgot Password</v-toolbar-title>
              </v-toolbar>
                <ForgotPasswordForm />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ForgotPasswordForm from "@/forms/ForgotPasswordForm.vue";

export default {
  components: {
    ForgotPasswordForm,
  },
  methods: {
    navigateForgotPassword() {
      this.$router.push('/forgot')

    }
  }
}
</script>
