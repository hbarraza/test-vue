<template>
  <div class="home">
      <Contenedor title='{ this.titulo }' />
  </div>
</template>

<script>
// @ is an alias to /src
import Contenedor from '@/components/Contenedor'

export default {
  name: 'Home',
  data() {
    return { 
      titulo: "Superheroes"
    }
  },
  components: {
    Contenedor
  }
}
</script>
