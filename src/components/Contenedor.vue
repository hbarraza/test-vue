<template>
    <div class="contenedor--box-centered">
        <div class="titulo">
            Superhéroes
            <span class="contenedor-busqueda">
                <input type="text" v-model="filtroSuperheroes" placeholder="ingrese texto para buscar">
            </span>
        </div>
        <table>
            <tr 
                v-for="superheroe in superheroesFiltrados" 
                :key="superheroe.id" 
                @click="mostrarDetalles(superheroe.id)">
                
                <td class="contenedor-avatar">
                    <img :src="superheroe.avatarURL" />
                </td>
                <td class="contenedor-texto">
                    <p>{{ superheroe.nombre }}</p>
                    <h5>{{ superheroe.nombreReal }}</h5>                
                </td>
            </tr>
        </table>
        <div v-if="superheroeSeleccionado" class="tabla-detalle">
            <button title="cerrar" @click="cerrarVentana">X</button>
            <p>Nombre: {{ superheroeSeleccionado.nombre }} </p>
            <p>Puede Volar: {{ superheroeSeleccionado.puedeVolar ? 'Si':'No' }} </p>
            <p>Nombre Real: {{ superheroeSeleccionado.nombreReal }} </p>
        </div>
    </div>
</template>

<script>
    //import Tabla from '@/components/Tabla'
    //import TablaDetalle from '@/components/TablaDetalle'
    import axios from 'axios';
    import swal from 'sweetalert';

    const baseURL = 'http://157.245.138.232:9091/api/v1/test/superheroes';
    
    export default {
        components: {
            //Tabla,
            //TablaDetalle
        },
        data() {
            return {
                filtroSuperheroes: '',
                superheroes: [],
                superheroeSeleccionado: null,
            }
        },
        computed: {
            superheroesFiltrados() {
                return this.superheroes.filter( superheroe => {
                    return superheroe.nombre.includes(this.filtroSuperheroes)
                })
            }
        },
        created() {
            axios.get(baseURL)
                .then( respuesta => this.superheroes = respuesta.data.data )
                .catch( error => { 
                    swal("Oops!", "Algo ha salido mal!", "error");
                    console.error(error) 
                })
        },
        methods: {
            mostrarDetalles(superheroeId){
                let urlSuperheroe = `${baseURL}/${superheroeId}`;
                
                axios.get(urlSuperheroe)
                    .then( respuesta => { 
                        console.log(respuesta)
                        this.superheroeSeleccionado = respuesta.data.data 
                        urlSuperheroe = '';
                    })
                    .catch( error => { 
                        swal("Oops!", "Algo ha salido mal!", "error");
                        console.error(error) 
                    })
            },
            cerrarVentana(){
                this.superheroeSeleccionado = null;
            }
        }
    }
</script>

<style scoped>
    .contenedor--box-centered {
        border: 1px solid #C9C9C9;
        border-radius: 10px;
        max-width: 30rem;
        margin: 0 auto;
    }

    .titulo {
        background-color: #C9C9C9;
        color: black;
        font-weight: bolder;
        margin: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        height: 2rem;
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
    }

    .contenedor-busqueda {
        width: 70%;
    }

    .contenedor-busqueda input[type=text] {
        float: right;
    }

     @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap');
    
    table {
        width: 100%;
        padding: 1rem;
    }

    table tr:hover { background: lightcyan; cursor: pointer;}

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

    .tabla-detalle {
        position: absolute;
        top: 50%;
        display: inline-grid;
        background: floralwhite;
        border: 2px solid black;
        padding: 2rem;
    }

    .tabla-detalle button {
        color: white;
        background: red;
        width: 2rem;
        position: absolute;
        right: 0;
    }
</style>