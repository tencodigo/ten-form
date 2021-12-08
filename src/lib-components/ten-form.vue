<template>
  <form :class="classes">
    <ten-input id="i1" title="Test 1" type="text"></ten-input>
    <ten-input id="i2" title="Test 2" type="number"></ten-input>
    <ten-input id="i3" title="Test 3" type="email"></ten-input>
    <ten-input id="i4" title="Test 4" type="text" :readonly="true"></ten-input>
    <ten-input id="i5" title="Test 5 Very long long long long long long label" type="text"></ten-input>
    <ten-input id="i6" title="Test 6" type="text" :required="true"></ten-input>
    <ten-select id="s1" title="Select 1" :options="options" place-holder="Select one..." v-model="s1Value"></ten-select>
    <ten-toggle id="t1" v-model="checkValue" title="Toggle 1"></ten-toggle>
    <ten-textarea id="ta1" title="Text Area"></ten-textarea>
  </form>
</template>

<script>
import TenWrapper from "./ten-wrapper.vue";
import TenInput from "./ten-input.vue";
import TenSelect from "./ten-select.vue";
import TenToggle from "./ten-toggle.vue";
import TenTextarea from "./ten-textarea.vue";
export default {
  name: 'ten-form',
  components: {TenTextarea, TenToggle, TenSelect, TenInput},
  extends: TenWrapper,
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
      return  'ten-form '+this.labels+'-labels' + (this.compact?' compact':'');
    }
  },
  methods: {
  },
};
</script>
