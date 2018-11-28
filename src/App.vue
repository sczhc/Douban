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
.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.8rem;
  background: #fff;
  border-bottom: 0.1rem solid #f3f3f3;
}
ul,ol,dl,li{
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
