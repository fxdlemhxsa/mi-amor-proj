<template>
  <Layout v-if="route.path != '/'"/>
  <CountdownView v-else></CountdownView>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import Layout from './layout/Layout.vue'
import CountdownView from './views/CountdownView.vue'

const route = useRoute()
</script>

<style scoped>

</style>
