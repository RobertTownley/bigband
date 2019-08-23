<template>
  <div>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Email Address"
          name="email"
          prepend-icon="person"
          type="text"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn color="primary">Send Reset Link</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
}
</script>
