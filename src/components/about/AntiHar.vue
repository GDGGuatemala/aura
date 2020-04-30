<template>
    <v-container fluid class="py-0 my-0 mt-5">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2">Política contra el Acoso</h1>
            </v-col>
        </v-row>
        <v-row class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font" style="font-size:100%">
                    <b style="font-size:120%;">¿Por qué tenemos una política oficial contra el acoso para los eventos de {{data}}?</b>

                    <ul class="mt-2" style="font-size:100%">
                        <li class="google-font">Establece expectativas de comportamiento en el evento. Simplemente tener una política contra el acoso puede evitar el acoso.</li>
                        <li class="google-font">Alienta a las personas a asistir que hayan tenido malas experiencias en otros eventos.</li>
                        <li class="google-font">Le da al personal del evento/voluntarios instrucciones sobre cómo manejar el acoso rápidamente, con una cantidad mínima de interrupción para el evento.</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;">{{data}} se dedica a proporcionar una experiencia de evento libre de acoso para todos, independientemente de: </b>

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

                    <span class="google-font" style="font-size:100%">Lo anterior no es una lista exhaustiva: no toleramos el acoso de los participantes del evento de ninguna forma. </span>
                </p>

                <p class="google-font" style="font-size:120%">Sexual language and imagery is not appropriate for any event venue, including talks. Event participants violating these rules may be expelled from the event, and event banned from future events at the discretion of the event organizers/management. </p>

                <p class="google-font" style="font-size:110%">Harassment includes (but is not limited to):
                    <ul class="mt-2" style="font-size:100%">
                        <li class="google-font">Offensive verbal comments related to gender, sexual orientation, disability, gender identity, age, race, religion</li>
                        <li class="google-font">The use or display of sexual images in public spaces</li>
                        <li class="google-font">Deliberate intimidation</li>
                        <li class="google-font">Stalking</li>
                        <li class="google-font">Harassing photography or recording</li>
                        <li class="google-font">Sustained disruption of talks or other events</li>
                        <li class="google-font">Inappropriate physical contact</li>
                        <li class="google-font">Unwelcome sexual attention</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:100%">Participants asked to stop any harassing behavior are expected to comply immediately. 
                    <br><br>
                    Exhibiting partners and guests are also subject to the anti-harassment policy. In particular, exhibitors and speakers should not use sexualized images, activities, or other material, or otherwise create a sexualized environment in their slide decks, exhibit material, exhibit staffing, promotional items or demo material. 
                    <br><br>
                    If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact an organizer or event volunteer immediately. Organizers and event volunteers may be identified by t-shirts or special badges/lanyards. Organizers will investigate the issue and take appropriate action. This may include helping participants contact venue security or local law enforcement, provide escorts, or otherwise assist these experiencing harassment to fell safe for the duration of the event. 
                    <br><br>
                    Though we hope that we never have to invoke this policy, we believe that having this document helps everyone think a little more about how their actions and words affect the whole community, as well as individuals in the community.
                </p>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="py-0 my-0 hidden-sm-and-down">
               
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>
