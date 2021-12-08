<script>
import Vue from 'vue';
import { TenForm } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    TenForm,
  }
});
</script>

<template>
  <div id="app">
    <ten-form />
  </div>
</template>
