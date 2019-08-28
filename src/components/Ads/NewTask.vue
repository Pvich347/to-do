<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary md-3">Новая задача</h1>
        <v-form class="mb-3" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v=>!!v || 'Title is required']"
          ></v-text-field>
        </v-form>
        <v-layout row>
          <v-flex>
            <v-spacer></v-spacer>
            <v-btn class="success" @click="createAd" :disabled="!valid">Create Ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title
        }
        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>
