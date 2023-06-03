<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>Vue Alert IOS Style</h3>
    <button v-on:click="alert">alert</button>
    <button v-on:click="remind">Reminde</button>
  </div>
</template>

<script>


export default {
  name: 'App',

  methods:{
    alert(){
      this.$iosAlert('alert').then(function(){
        console.log('alert');
      });
    },
    remind(){
      this.$iosRemind('remind');
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  width: 100px;
    height: 45px;
    background: #2576c6;
    border: 0px;
    border-radius: 5px;
    color: white;
    margin: 5px;
}
</style>
