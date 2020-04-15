<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#616161">Nuestra formación de grandes pensadores e incluso más grandes hacedores.</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">Google es conocido en todo el mundo. Todos están 'googliando', revisando 'mapas' y comunicándose en 'gmail'. Para usuarios simples, son servicios que simplemente funcionan, pero no para nosotros. Los desarrolladores ven mucho más: APIs, problemas de escalabilidad, stacks tecnologícos complejos. Y de eso se trata GDG. </p>

            <p class="google-font mt-3 mb-0" style="font-size:110%">Nuestro objetivo es organizar el espacio para conectar a los mejores expertos de la industria con el público guatemalteco para impulsar el desarrollo de TI.</p>

        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <coreTeam/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <organizingTeam/>
        </v-flex>
      </v-layout>
    </v-container>

   


  </v-content>
  
</template>

<script>
import TeamDetails from '@/assets/data/chapterDetails.json'
import coreTeam from '@/components/team/coreTeam'
import organizingTeam from '@/components/team/organizingTeam'
  export default {
    components: {
      coreTeam,
      organizingTeam
    },
    data() {
      return {
        TeamDetails: TeamDetails,
      }
    },
  }
</script>
