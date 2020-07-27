<template>
  <form :class="classes">
    <codigo-input id="i1" title="Test 1" type="text"></codigo-input>
    <codigo-input id="i2" title="Test 2" type="number"></codigo-input>
    <codigo-input id="i3" title="Test 3" type="email"></codigo-input>
    <codigo-input id="i4" title="Test 4" type="text" :readonly="true"></codigo-input>
    <codigo-input id="i5" title="Test 5 Very long long long long long long label" type="text"></codigo-input>
    <codigo-input id="i6" title="Test 6" type="text" :required="true"></codigo-input>
    <codigo-select id="s1" title="Select 1" :options="options" place-holder="Select one..." v-model="s1Value"></codigo-select>
    <codigo-toggle id="t1" v-model="checkValue" title="Toggle 1"></codigo-toggle>
    <codigo-textarea id="ta1" title="Text Area"></codigo-textarea>
  </form>
</template>

<script>
import CodigoInput from "./codigo-input";
import CodigoWrapper from "./_wrapper";
import CodigoSelect from "./codigo-select";
import CodigoToggle from "./codigo-toggle";
import CodigoTextarea from "./codigo-textarea";
export default {
  name: 'codigo-form',
  components: {CodigoTextarea, CodigoToggle, CodigoSelect, CodigoInput},
  extends: CodigoWrapper,
  props: {
    labels: {
      type: String,
      default: 'floating'
    },
    compact: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      options: [
        {name:'Option 1',code:'1'},
        {name:'Option 2',code:'2'},
        {name:'Option 3',code:'3'},
        {name:'Option 4',code:'4'},
        {name:'Option 5',code:'5'}
      ],
      s1Value:'1',
      checkValue:'Y'
    };
  },
  computed: {
    classes() {
      return  'codigo-form '+this.labels+'-labels' + (this.compact?' compact':'');
    }
  },
  methods: {
  },
};
</script>
