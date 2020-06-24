<template>
  <div id="app">
    <Contenedor/>
  </div>
</template>

<script>
import axios from 'axios';
import Contenedor from '@/components/Contenedor';

const baseURL = 'http://157.245.138.232:9091/api/v1/test/superheroes';

export default {
  components: {
    Contenedor
  },
  created() {
    axios.get(baseURL)
        .then( respuesta => this.superheroes = respuesta.data.data )
        .catch( error => console.error(error) )
  },
  data() {
    return {
      superheroes: []
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
