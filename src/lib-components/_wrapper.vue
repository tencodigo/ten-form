<script>
  export default {
    name: "codigo-wrapper",
    render(createElement, context) {
      return this.$slots.default;
    },
    methods: {
      macroReplace(str, values){
        if (values === undefined) return str;
        let typ = Object.prototype.toString.call(str);

        if (typ === '[object String]'){
          let keys = str.match(/\{+(\w*)}+/g);
          if (keys === undefined || keys===null) return str;

          for (let i = 0; i < keys.length; i++){
            var key = keys[i];
            let name = key.replace(/[{}]/g, '');
            if (name === undefined || name === '') continue;

            if (values[name] === undefined) continue;
            let re = new RegExp('\\{' + name + '\\}', 'g');
            str = str.replace(re, values[name]);
          }
          return str;
        }
        if (typ === '[object Object]' || typ === '[object Array]'){
          for (let i = 0; i < str.length; i++){
            str[i] = this.macroReplace(str[i], values);
          }
        }
        return str;
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/floating";
</style>
