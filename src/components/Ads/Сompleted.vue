<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Завершенные задачи</h1>
        <v-list three-line>
      <template v-for="task in tasks">
        <div :key="task.id">
        <v-divider v-if="task.id!=tasks[0].id" />
        <v-list-item>
          <v-checkbox
              color="success"
              :input-value="task.done"
              @change="markDone(task)"
              ></v-checkbox>

          <v-list-item-content>
            <v-list-item-title>{{task.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </div>
      </template>
    </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
      tasks () {
        return this.$store.getters.completed
      }
    },
  methods: {
    markDone (task) {
      task.done = !task.done
    }
  }
}
</script>
