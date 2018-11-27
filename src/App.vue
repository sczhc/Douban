<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  color: #000;
}
ul,ol,dl,li{
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
