<template>
  <v-app>
    <v-toolbar color="deep-purple">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-toolbar-title>INfinity FInance</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat dark>Vue</v-btn>
        <v-btn flat dark>Vuex</v-btn>
        <v-btn flat dark>Nuxt</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>INfinity FInance</h1>
          </v-flex>
        </v-layout>
        <router-view/>
      </v-container>
    </v-content>
    <v-navigation-drawer
            temporary
            v-model="drawer"
            light
            absolute
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        drawer: false
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
