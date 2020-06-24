<template>
    <div class="contenedor--box-centered">
        <div class="titulo">
            Superhéroes
            <span class="contenedor-busqueda">
                <input type="text" v-model="filtroSuperheroes" placeholder="ingrese texto para buscar">
            </span>
        </div>
        <Tabla />
        <TablaDetalle />
    </div>
</template>

<script>
    import Tabla from '@/components/Tabla'
    import TablaDetalle from '@/components/TablaDetalle'
    
    export default {
        components: {
            Tabla,
            TablaDetalle
        },
        data() {
            return {
                filtroSuperheroes: '',
            }
        },
        computed: {
            filtroPalabra() {
                return this.superheroes.filter( superheroe => {
                    return superheroe.nombre.includes(this.filtroSuperheroes)
                })
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
</style>