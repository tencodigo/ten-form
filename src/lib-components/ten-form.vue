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
import TenField from "./ten-field.vue";
export default {
  name: 'ten-form',
  components: { TenField },
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
  computed: {
    classes() {
      return  'ten-form '+this.labels+'-labels' + (this.compact?' compact':'');
    }
  },
  methods: {
  },
};
</script>
