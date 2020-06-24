<template>
    <table>
        <tr v-for="superheroe in superheroes" :key="superheroe.id">
            <td class="contenedor-avatar">
                <img :src="superheroe.avatarURL" />
            </td>
            <td class="contenedor-texto">
                <p>{{ superheroe.nombre }}</p>
                <h5>{{ superheroe.nombreReal }}</h5>                
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

//import Contenedor from '@/components/Contenedor';
//{"id":1,"nombre":"Batman","puedeVolar":false,"nombreReal":"Bruce Wayne","avatarURL":"https://eloutput.com/app/uploads-eloutput.com/2020/04/Batman-930x487.jpg"}
const baseURL = 'http://157.245.138.232:9091/api/v1/test/superheroes';

export default {
  components: {
    //Contenedor
  },
  created() {
    axios.get(baseURL)
        .then( respuesta => this.superheroes = respuesta.data.data )
        .catch( error => { 
            swal("Oops!", "Algo ha salido mal!", "error");
            console.error(error) 
        })
  },
  data() {
    return {
      superheroes: []
    }
  }
}

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap');
    
    table {
        width: 100%;
        padding: 1rem;
    }

    table tr:hover { background: lightcyan;}

    p, h5 {
        margin: 0;
        padding: 0.5rem 1rem 0rem 0.8rem;
        text-align: left;
        line-height: 80%;
        font-family: 'Nunito', sans-serif;
    }

    p {
        font-size: 15px;
        font-weight: bold;
    }

    h5 {
        font-size: 10px;
        font-weight: normal;
    }

    .contenedor-avatar {
        width: 30%;
    }

    .contenedor-avatar img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }

    .contenedor-texto {
        width: 70%;
    }
</style>