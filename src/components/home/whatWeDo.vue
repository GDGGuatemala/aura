<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 md3 lg3 class="pa-2">
               <p class="google-font" style="font-size:180%">¿Que hacemos?</p>
               <p class="google-font" style="font-size:110%">Los GDGs (Google Developer Groups) son para entusiastas, estudiantes y desarrolladores de todo nivel profesional, que estén interesados en aprender y en compartir sus conocimientos sobre las últimas tecnologías de Google y otros gigantes de la industria para el desarrollo de software y hardware.</p>

               <p class="google-font" style="font-size:110%">Estas son algunas de las tecnologías de Google de las que hablamos en nuestros meetups:</p>

                <span v-for="(item,i) in whatWeDoData" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                            <a :href="item.link" target="_blank" flat class="ma-0">
                                <img :src="getImgUrl(item.image)" width="30vh" alt="" srcset="" dark v-on="on">
                            </a> 
                            &nbsp;&nbsp;&nbsp;
                        </template>
                        <span>{{item.TechName}}</span>
                    </v-tooltip>
                </span>
                
                <br><br>

                <v-btn :href="chapterDetails.GDGProgramWebsite" outline target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" flat  class="ml-0 google-font hidden-md-and-down" dark>Aprende Más</v-btn>

            </v-flex> 
            <v-flex xs12 md9 lg9 class="">
                <v-layout row wrap>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">chat_bubble</v-icon>
                        <p class="google-font" style="font-size:130%">Charlas</p>
                        <p class="google-font" style="font-size:110%">Aprende de experimentados Speakers. Actualízate con las últimas técnicas, metodologías, buenas prácticas, noticias y anuncios</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">code</v-icon>
                        <p class="google-font" style="font-size:130%">Codelabs</p>
                        <p class="google-font" style="font-size:110%">Los codelabs son tutoriales puestos a disposición por Google para aprender algo nuevo. Haciendo un codelab adquieres experiencia práctica, si tienes dificultades, puedes pedir y obtener apoyo de otros miembros de la comunidad.</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">school</v-icon>
                        <p class="google-font" style="font-size:130%">Study Jams</p>
                        <p class="google-font" style="font-size:110%">Conformamos grupos de estudio y realizamos talleres impartidos por miembros más experimentados de la comunidad para aprender a hacer apps, sitios web, back-ends o para aprender a utilizar ciertas tecnologías o herramientas de Google.</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">airplay</v-icon>
                        <p class="google-font" style="font-size:130%">Fiestas para ver eventos EN VIVO</p>
                        <p class="google-font" style="font-size:110%">Eventualmente nos reunimos para ver un evento importante de la industria y poder comentarlo en comunidad.</p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import whatWeDoData from '@/assets/data/whatWeDoComponentData.json'
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            whatWeDoData: whatWeDoData
        }
    },
    methods:{
        getImgUrl(url) {
            if(url.length>0){
                return require('@/assets/img/what-we-do/'+url)
            }else{
                return require('@/assets/img/what-we-do/notFound.png')
            }
        },
    }
}
</script>
