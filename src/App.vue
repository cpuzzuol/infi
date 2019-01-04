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
      <h1>BOB <span>dances</span></h1>
      <router-view/>
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

  h1 {
    span{
      color: red;
    }
    color: blue;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
