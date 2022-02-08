<template>
<div class="ten-row" :id="id">
  <ten-field v-for="field in fields"
             class="ten-col"
             :id="field.id"
             :title="field.title"
             :type="field.type"
             :place-holder="field.placeHolder"
             :options="field.options || []"
             :fields="field.fields || []"
             :readonly="field.readOnly==='true' || field.readOnly === true"
             :required="field.required==='true' || field.required === true"></ten-field>
</div>
</template>

<script>
export default {
  name: "ten-layout",
  components:
    { TenField:() => import('./ten-field.vue') },
  props: {
    id: {
      type: String
    },
    fields: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.ten-row {
  display: flex;
  width: 100%;
}
.ten-col {
  width: 100%;
}
</style>
