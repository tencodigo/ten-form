<template>
  <form :class="classes">
    <ten-field v-for="field in fields"
               :id="field.id"
               :title="field.title"
               :type="field.type"
               :place-holder="field.placeHolder"
               :options="field.options || []"
               :fields="field.fields || []"
               :readonly="field.readOnly==='true' || field.readOnly === true"
               :required="field.required==='true' || field.required === true"></ten-field>
  </form>
</template>

<script>
import TenWrapper from "./ten-wrapper.vue";
import TenInput from "./ten-input.vue";
import TenSelect from "./ten-select.vue";
import TenToggle from "./ten-toggle.vue";
import TenTextarea from "./ten-textarea.vue";
import TenField from "./ten-field.vue";
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
    },
    fields: {
      type: Array
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
