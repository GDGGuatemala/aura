<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
     
            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:180%;color:#0277bd">Política contra el Acoso</p>

                <p class="google-font" style="font-size:110%">
                        <b style="font-size:120%;color: #2E2E2E;">¿Por qué tenemos una política oficial contra el acoso para los eventos de {{chapterDetails.ChapterName}}?</b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Establece expectativas de comportamiento en el evento. Simplemente tener una política contra el acoso puede evitar el acoso.</li>
                        <li class="google-font">Alienta a las personas a asistir que hayan tenido malas experiencias en otros eventos.</li>
                        <li class="google-font">Le da al personal del evento/voluntarios instrucciones sobre cómo manejar el acoso rápidamente, con una cantidad mínima de interrupción para el evento.</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;color: #2E2E2E;">{{chapterDetails.ChapterName}} se dedica a proporcionar una experiencia de evento libre de acoso para todos, independientemente de: </b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Género</li>
                        <li class="google-font">Orientación Sexual</li>
                        <li class="google-font">Discapacidad</li>
                        <li class="google-font">Identidad de Género</li>
                        <li class="google-font">Edad</li>
                        <li class="google-font">Raza</li>
                        <li class="google-font">Religión</li>
                        <li class="google-font">Nacionalidad</li>
                    </ul>

                    <span class="google-font" style="font-size:110%">Lo anterior no es una lista exhaustiva: no toleramos el acoso de los participantes del evento de ninguna forma. </span>
                </p>

                <p class="google-font" style="font-size:120%">El lenguaje y las imágenes sexuales no son apropiadas para ningún evento, incluidas las charlas. Los participantes del evento que violen estas reglas pueden ser expulsados del evento, y el evento será excluido de eventos futuros a discreción de los organizadores/administradores del evento. </p>

                <p class="google-font" style="font-size:110%">El acoso incluye (pero no se limita a):
                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Comentarios verbales ofensivos relacionados con género, orientación sexual, discapacidad, identidad de género, edad, raza, religión</li>
                        <li class="google-font">El uso o exhibición de imágenes sexuales en espacios públicos</li>
                        <li class="google-font">Intimidación deliberada</li>
                        <li class="google-font">Acecho</li>
                        <li class="google-font">Acosar fotografía o grabación</li>
                        <li class="google-font">Interrupción sostenida de conversaciones u otros eventos.</li>
                        <li class="google-font">Contacto físico inapropiado</li>
                        <li class="google-font">Atención sexual no deseada</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:120%">Se espera que los participantes que soliciten detener cualquier comportamiento de acoso cumplan de inmediato.
                    <br><br>
                    Los socios expositores e invitados también están sujetos a la política contra el acoso. En particular, los expositores y oradores no deben usar imágenes, actividades u otro material sexualizado, o crear un ambiente sexualizado en sus cubiertas de diapositivas, material de exhibición, personal de exhibición, artículos promocionales o material de demostración.
                    <br><br>
                    Si estás siendo hostigado, observas que alguien más está siendo hostigado o si tienes alguna otra inquietud, comunícate de inmediato con un organizador o voluntario del evento. Los organizadores y los voluntarios del evento pueden identificarse con camisetas o insignias / cintas especiales. Los organizadores investigarán el problema y tomarán las medidas apropiadas. Esto puede incluir ayudar a los participantes a ponerse en contacto con la seguridad del lugar o con la policía local, proporcionar escoltas o de otra manera ayudar a estos que sufren acoso a permanecer seguros durante la duración del evento.
                    <br><br>
                    Aunque esperamos no tener que invocar esta política, creemos que tener este documento ayuda a todos a pensar un poco más sobre cómo sus acciones y palabras afectan a toda la comunidad, así como a las personas de la comunidad.
                </p>


            </v-flex> 
           
            <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
        }
    },
}
</script>
