<template>
  <div class="hello">

    <h3 :class="styleObject" :style="{fontSize : value + 'px'}">{{ value }}</h3>
  
    <button @click="value++">+</button>
    <button @click="value--">-</button>
    <button @click="error = ! error">Red</button>
    <button @click="underline = ! underline">Green</button>



    <!-- <button @click="vuexstore">test</button> -->

    <h3 >{{ appDatamap }}</h3>
    <button @click="fatal">dhdfh</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function(){
    return{
      value:1,
      error:true,
      underline:true,
    }
  },
  methods:{
    findError(){
      // this.error = false;
      // this.underline = false;
      console.log('this is click');
    },
    fatal(){
      this.vuexstore
    }
  },
  computed:{
    styleObject:function(){
      return{
        'changeBackground':this.value >5 && this.error,
         'underline': this.underline
         }
    },
    appDatamap:function(){
      return this.$store.getters.appName
    },
    vuexstore :function(){
      return this.$store.commit('increment' , ' khan')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.changeBackground {
  background-color: red;
}
.underline {
  text-decoration: underline;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
