<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style>

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #999;
}

h3, h2 {
  color: #42b983;
}

button{
  border: none;
  background-color: #42b983;
  padding: 10px;
  margin: 20px;
  font-weight: bold;
  color:#2c3e50 ;
}

button:hover {
  background-color: #268f60;
  cursor: pointer;
}

</style>
