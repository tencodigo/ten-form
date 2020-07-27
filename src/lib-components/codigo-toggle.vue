<template>
  <div class="codigo-toggle form-control">
    <div class="toggle-label" v-if="title">{{title}}</div>
    <label class="toggle-container" :class="type" :for="id">
      <input :id="id" type="checkbox" class="real-checkbox" v-model="content" :true-value="trueValue" :false-value="falseValue" @change="handleInput">
      <div class="toggle-button"></div>
    </label>
  </div>
</template>

<script>
  export default {
    name: "codigo-toggle",
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
      title: {
        type: String
      },

      type: {
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
    },
    data: function() {
      return {
        content: undefined,
        customTitle:undefined
      }
    },
    mounted: function() {
      this.original = this.value || '';
      this.content = this.original;
    },
    methods: {
      handleInput (e) {
        let val = e.target.checked ? this.trueValue : this.falseValue;
        this.$emit('input', val);
      }
    }
  }
</script>

<style lang="scss">
  :root {
    --toggle-width: 40px;
    --toggle-height: 20px;
    --toggle-radius: 0;
  }

  .toggle-container.round {
    --toggle-radius: 30px;
  }

  .toggle-label {
    font-size: 12px;
    color: #aaa;
    padding-top: .1rem;
    padding-bottom: .1rem;
  }

  .toggle-container{
    display: inline-block;
    width: var(--toggle-width);
    height: var(--toggle-height);
    border: 3px solid #bfbebe;
    border-radius: var(--toggle-radius);
    position: relative;
    cursor: pointer;
    background-color: #f5f2f2;
    transition: border-color 300ms;

    span {
      display: block;
    }

    .real-checkbox{
      position: absolute;
      clip: rect(0,0,0,0);

      & + .toggle-button{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--toggle-radius);
        transition: all 300ms;

        &::before{
          content: '';
          cursor: pointer;
          display: inline-block;
          width: var(--toggle-height);
          height: var(--toggle-height);
          background-color: white;
          border-radius: var(--toggle-radius);
          box-shadow: 1px 1px 3px rgba(0,0,0,0.5) ;
          transition: all 300ms ease-in-out;
        }

      }

      &:checked + .toggle-button{
        background-color: #32db64;
        &::before{
          margin-left: var(--toggle-height);
        }
      }
    }
  }
  .toggle-container.round {

  }
</style>
