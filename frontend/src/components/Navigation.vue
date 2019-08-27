<template>
  <div id='navigation'>
    <v-app-bar app elevate-on-scroll inverted-scroll height='56'>
      <v-toolbar-title>
        <v-btn text to='/'>My Website</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if='$vuetify.breakpoint.smAndUp'>
        <v-toolbar-items>
          <v-btn
            v-for='link in links'
            :key='link.title'
            :to='link.path'
            text
          >{{ link.title }}</v-btn>
        </v-toolbar-items>
      </template>
      <template v-if='showAppIcon'>
				<v-app-bar-nav-icon v-on:click='toggleDrawer'></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model='drawerOpen' app>
      <v-list dense nav>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Site Title</v-list-item-title>
            <v-list-item-subtitle>Secondary navigation</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />

        <v-list-item v-for='link in links' :key='link.title' link>
          <v-list-item-icon v-if='link.icon'>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn text :to='link.path'>{{ link.title }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import paths from '@/router/paths.js';

export default {
  computed: {
    links() {
      const pageTitles = this.$store.getters.isAuthenticated
        ? ['About', 'Logout']
        : ['About', 'Login', 'Register'];
      return pageTitles.map(pageTitle => {
        return paths.find(path => path.title == pageTitle)
      })
    },
    showAppIcon() {
      return this.drawerOpen || !this.$vuetify.breakpoint.smAndUp
    }
  },
  data() {
    return {
      drawerOpen: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen
    }

  }
}
</script>

<style lang='scss' scoped>
#navigation {
  margin-bottom: 56px;
}

</style>
