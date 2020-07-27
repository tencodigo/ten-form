<template>
  <div class="form-group" :class="{'input-group':hasPrependSlot || hasAppendSlot,'input-prepend':hasPrependSlot}">
    <label :for="id" class="no-floating-label" v-if="title">{{title}}</label>
    <slot name="prepend"></slot>
    <input
      :id="id"
      :type="type"
      :autocomplete="autocomplete"
      :disabled="readonly"
      :readonly="readonly"
      :tabindex="tabindex"
      :placeholder="placeHolder || title || id"
      :value="content"
      @input="handleInput($event.target.value)"
      :class="controlClass"
      :maxlength="length"
      :step="step"
    />
    <slot name="append"></slot>
    <label :for="id" class="floating-label" v-if="title">{{title}}</label>
  </div>
</template>

<script>
  import CodigoWrapper from './_wrapper';

  export default {
    name: "codigo-input",
    extends: CodigoWrapper,
    props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      autocomplete: {
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

      length: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data: function() {
      return {
        content: undefined
      }
    },
    mounted: function() {
      this.original = this.value || '';
      this.content = this.original;
    },
    methods: {
      handleInput (value) {
        let val = value;
        const t = this.type;
        if(t==='number'){
          val = parseInt(value);
        }
        this.$emit('input', val);
      }
    },
    computed: {
      hasPrependSlot () {
        return !!this.$slots['prepend']
      },
      hasAppendSlot () {
        return (!!this.$slots['append']);
      },
      step() {
        if(this.type==='number') return "any";
        return null;
      }
    }
  }
</script>
