<template>
<!-- App.vue -->

<v-app>
  <v-navigation-drawer
   app
   temporary
   v-model="drawer"
   >
      <v-list>
      <v-list-item
      v-for="link of links"
      :key="link.title"
      :to="link.url"
      >
        <v-list-item-icon>
          <v-icon>{{link.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <div>
    <v-app-bar dense dark color="primary">
      <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="hidden-md-and-up">
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad Application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn v-for="link in links" :key="link.title" :to="link.url" text>
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>

  <!-- Sizes your content based upon application components -->
  <v-content>
      <!-- If using vue-router -->
      <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'lock', url: '/login' },
        { title: 'Registration', icon: 'face', url: '/registration' },
        { title: 'Задачи', icon: 'bookmark_border', url: '/tasks' },
        { title: 'Добавить задачу', icon: 'note_add', url: '/new' },
        { title: 'Завершенные задачи', icon: 'list', url: '/completed' }
      ]
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
