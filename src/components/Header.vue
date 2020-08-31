<template>
    <div class="header">
        <h1>Tool App</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/dice">Dice</router-link> |
            <router-link to="/fqa">FQA</router-link> |
            <router-link to="/calculator">Calculator</router-link> |
            <router-link to="/clock">Clock</router-link> |
            <router-link to="/counter">Counter</router-link> 
        </div>
    </div>  
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

h1 {
    font-family: 'Sriracha', cursive;
    color:#2c3e50;
}


a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
}

a.router-link-exact-active, a:hover {
    color:#42b983;
}

.header {
    margin-bottom: 50px;
}

</style>