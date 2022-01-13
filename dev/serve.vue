<script>
import Vue from 'vue';
import { TenForm } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    TenForm,
  },
  data: function() {
    return {
      fields: [
        {id:"i1" ,title:"Test Text" ,type:"text"},
        {id:"row",type:"layout", fields:[
            {id:"i1" ,title:"First" ,type:"text"},
            {id:"i1" ,title:"Middle" ,type:"text"},
            {id:"i1" ,title:"Last" ,type:"text"}
          ]},
        {id:"i2" ,title:"Test Number" ,type:"number"},
        {id:"i3" ,title:"Test Email" ,type:"email"},
        {id:"i4" ,title:"Test RO" ,type:"text",readOnly:"true"},
        {id:"i5" ,title:"Test 5 Very long long long long long long label" ,type:"text"},
        {id:"s1" ,title:"Select 1",type:"select",placeHolder:"Select one..."},
        {id:"t1",type:"toggle",title:"Toggle 1"},
        {id:"ta1" ,title:"Text Area",type:"textarea"}
      ]
    }
  }
});
</script>

<template>
  <div id="app">
    <ten-form :fields="fields" />
  </div>
</template>
