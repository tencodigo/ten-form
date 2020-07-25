<script>
import Vue from 'vue';
import { CodigoFormSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CodigoFormSample,
  }
});
</script>

<template>
  <div id="app">
    <codigo-form-sample />
  </div>
</template>
