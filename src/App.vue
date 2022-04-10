<template>
  <div id="app">
    <metaButton type="normal">normal</metaButton>
    <metaButton type="primary">primary</metaButton>
    <metaButton type="success">success</metaButton>
  </div>
</template>

<script>
import metaButton from './button/button.vue'

export default {
  name: 'App',
  components: {
    metaButton
  }
}
</script>

<style>

</style>
