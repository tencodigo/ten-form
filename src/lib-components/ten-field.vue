<template>
  <span>
    <ten-layout :id="id" v-if="type==='layout'" :fields="fields"></ten-layout>
    <ten-input :id="id"
               :title="title"
               :place-holder="placeHolder"
               :readonly="readonly"
               :required="required"
               :tabindex="tabindex"
               :control-class="controlClass"
               :length="length"
               :type="type"

               :value="content"
               @input="handleInput"
               v-if="type==='text' || type==='number' || type==='email'"
    ></ten-input>
    <ten-select
      :id="id"
      :title="title"
      :place-holder="placeHolder"
      :readonly="readonly"
      :required="required"
      :tabindex="tabindex"
      :control-class="controlClass"
      :length="length"

      :size="size"
      :options-text="optionsText"
      :options-value="optionsValue"
      :options="options"
      :styled="styled"
      :value="content"
      @input="handleInput"
      v-if="type==='select'"
    ></ten-select>
    <ten-toggle     :id="id"
                    :title="title"
                    :readonly="readonly"
                    :tabindex="tabindex"
                    :true-value-text="trueValue"
                    :false-value="falseValue"
                    :subclass="subClass"
                    :value="content"
                    @input="handleInput"
                    v-if="type==='select'"
    ></ten-toggle>
    <ten-textarea :id="id"
                  :title="title"
                  :place-holder="placeHolder"
                  :readonly="readonly"
                  :required="required"
                  :tabindex="tabindex"
                  :control-class="controlClass"
                  :length="length"
                  :size="size"
                  :auto-size="autoSize"
                  :value="content"
                  @input="handleInput"
                  v-if="type==='textarea'"></ten-textarea>
  </span>
</template>

<script>
import TenTextarea from "./ten-textarea.vue";
import TenToggle from "./ten-toggle.vue";
import TenSelect from "./ten-select.vue";
import TenInput from "./ten-input.vue";
import TenWrapper from "./ten-wrapper.vue";
import TenLayout from "./ten-layout.vue";

export default {
  name: "ten-field",
  components: { TenLayout, TenTextarea, TenToggle, TenSelect, TenInput},
  extends: TenWrapper,
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: [Number,String]
    },
    value: {
      type: [String,Number]
    },
    placeHolder: {
      type: String,
    },
    title: {
      type: String
    },
    controlClass: {
      type: String,
      default: 'form-control'
    },
    subClass: {
      type: String
    },

    length: {
      type: Number,
      default: undefined
    },
    type: {
      type: String,
      required: true
    },

    options: {
      type: Array
    },
    optionsValue: {
      type: String,
      default:'code'
    },
    optionsText: {
      type: String,
      default: 'name'
    },
    styled: {
      type: Boolean,
      default: true
    },

    toggleType: {
      type:String,
      default: 'round'
    },
    trueValue: {
      type:[String,Boolean],
      default:'Y'
    },
    falseValue: {
      type:[String,Boolean],
      default:'N'
    },

    autoSize: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: undefined
    },

    fields: {
      type: Array
    },
  },
  methods: {
    handleInput (value) {
      //console.debug('handle field',value);
      this.$emit('input', value);
    }
  },
  data: function() {
    return {
      content: undefined
    }
  },
  mounted: function() {
    this.content = this.value;
  },
  watch: {
    value:function(v) {
      this.content = this.value;
    }
  }
};
</script>
