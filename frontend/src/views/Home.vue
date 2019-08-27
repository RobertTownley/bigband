<template>
  <div>
    <Hero>
      <v-row
        align="center"
        justify="center"
      >
        <h1 class="display-2 font-weight-thin mb-4">My Site</h1>
        <h4 class="subheading">Let's get down to development</h4>
      </v-row>
    </Hero>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    HelloWorld,
    Hero,
  },
};
</script>

<style lang='scss' scoped>
.subheading {
  margin-left: 8px;

}
</style>
