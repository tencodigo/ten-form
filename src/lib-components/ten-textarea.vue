<template>
  <div class="form-group" :class="{'input-group':hasPrependSlot || hasAppendSlot,'input-prepend':hasPrependSlot}">
    <label :for="id" class="no-floating-label" v-if="title">{{title}}</label>
    <slot name="prepend"></slot>
    <textarea
      :id="id"
      :autocomplete="autocomplete"
      :disabled="readonly"
      :readonly="readonly"
      :tabindex="tabindex"
      :placeholder="placeHolder || title || id"
      :value="content"
      :maxlength="length"
      @input="handleInput($event.target.value)"
      :class="controlClass"
      ref="area"
      @cut="delayedResize"
      @paste="delayedResize"
      @drop="delayedResize"
      @keydown="delayedResize"
    />
    <slot name="append"></slot>
    <label :for="id" class="floating-label" v-if="title">{{title}}</label>
  </div>
</template>

<script>
  import TenWrapper from './ten-wrapper.vue';

  export default {
    name: "ten-textarea",
    extends: TenWrapper,
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
        type: Number,
        default: undefined
      },
      autoSize: {
        type: Boolean,
        default: true
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
        this.$emit('input', val);
        this.delayedResize();
      },

      resize() {
        if(!this.autoSize) return;
        let text = this.$refs.area;
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
      },
      delayedResize() {
        this.$nextTick(()=>{
          this.resize();
        })
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
