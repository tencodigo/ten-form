<script>
import Vue from 'vue';
import { CodigoForm } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CodigoForm,
  }
});
</script>

<template>
  <div id="app">
    <codigo-form />
  </div>
</template>
