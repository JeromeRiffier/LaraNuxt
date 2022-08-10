<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      // title: this.$t(`pages.${this.$route.name}`)
    }
  }
}
</script>
