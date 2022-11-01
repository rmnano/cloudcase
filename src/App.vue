<template>
  <div id="app">
    <cloud-header />
    <simple-calculator class="form"/>
    <cloud-footer />
  </div>
</template>

<script>
import SimpleCalculator from './components/SimpleCalculator.vue';
import CloudFooter from './components/CloudFooter.vue';
import CloudHeader from './components/CloudHeader.vue';

export default {
  name: 'App',
  components: {
    SimpleCalculator,
    CloudHeader,
    CloudFooter,
  }
}
</script>

<style>
.form {
  min-height: calc(100vh - 320px);
}
</style>
