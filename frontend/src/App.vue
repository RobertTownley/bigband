<template>
  <v-app id='app'>
    <Navigation />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
  data: () => ({
    drawer: true,
  }),
};
</script>
