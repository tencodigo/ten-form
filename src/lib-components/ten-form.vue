<template>
  <form :class="classes">
    <ten-field id="i1" title="Test Text" type="text" v-model="content1"></ten-field>
    <ten-field id="i2" title="Test Number" type="number"></ten-field>
    <ten-field id="i3" title="Test Email" type="email"></ten-field>
    <ten-field id="i4" title="Test RO" type="text" v-model="content1" :readonly="true"></ten-field>
    <ten-field id="i5" title="Test 5 Very long long long long long long label" type="text"></ten-field>
    <ten-field id="i6" title="Test 6" type="text" :required="true"></ten-field>
    <ten-field id="s1" title="Select 1" type="select" :options="options" place-holder="Select one..." v-model="s1Value"></ten-field>
    <ten-field id="t1" v-model="checkValue" type="toggle" title="Toggle 1"></ten-field>
    <ten-field id="ta1" title="Text Area" type="textarea" v-model="contentTextArea"></ten-field>
  </form>
</template>

<script>
import TenWrapper from "./ten-wrapper.vue";
import TenInput from "./ten-input.vue";
import TenSelect from "./ten-select.vue";
import TenToggle from "./ten-toggle.vue";
import TenTextarea from "./ten-textarea.vue";
import TenField from "./ten-field";
export default {
  name: 'ten-form',
  components: { TenField, TenTextarea, TenToggle, TenSelect, TenInput},
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
      content1:"",
      contentTextArea:"",
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
