<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >

      <v-img
        class="pa-4 pt-7"
        src="./assets/logo.png"
        height="170"
       
      >
      </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark  
    >

        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

          <v-btn icon >
            <v-icon>mdi-information</v-icon>
          </v-btn>
            <v-toolbar-title>User Guide</v-toolbar-title>
          
      <v-spacer></v-spacer>

          <v-btn icon >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
           <v-toolbar-title>Logout</v-toolbar-title>
      <v-spacer></v-spacer>
  
      
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify Footer</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { title: 'View One', icon: 'mdi-asterisk', to: '/' },
        { title: 'View Two', icon: 'mdi-asterisk', to: '/viewtwo' },
        { title: 'View Three', icon: 'mdi-asterisk', to: '/viewthree' },
      ],
    }),
  }
</script>

<style lang="sass">
  .header-container
    max-width: none
</style>