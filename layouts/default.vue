<template>
  <v-app>
    <nuxt class="container"></nuxt>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.container {
  background: #f8f9fa;
  margin: 0 auto 100px;
  max-width: 1600px;
  padding: 2% 2%;
}
</style>
