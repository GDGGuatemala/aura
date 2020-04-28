<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn icon text v-on="on">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Permítenos enviar Push Notification</v-card-title>

        <v-card-text>
          <p>Nunca te enviamos spam enviando Push Notification innecesarias.</p>
          <p>
            <span class="font-weight-bold text--primary">Estado:</span>
            {{ token }}
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            :loading="isLoading"
            :disabled="buttonText=='Permitido'"
            @click="requestPermission"
          >{{ buttonText }}</v-btn>
          <v-btn color="error" text @click="dialog = false">cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from "@/config/firebase";
import { mapState } from "vuex";
export default {
  name: "PushNotification",
  data() {
    return {
      dialog: false,
      isLoading: false,
      token: "No Concedido Todavía",
      buttonText: "Permitir"
    };
  },
  computed: {
    ...mapState(["config"])
  },

  methods: {
    requestPermission() {
      try {
        if (firebase.notificationSupported && Notification) {
          firebase.messaging.usePublicVapidKey(
            `${this.config.keysandsecurity.web_push_certificate}`
          );
          this.isLoading = true;
          this.token = "Por favor espera...";
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              let token = localStorage.getItem("pushNotificationToken");
              if (token == null || token.length <= 0) {
                firebase.messaging
                  .getToken()
                  .then(currentToken => {
                    if (currentToken) {
                      firebase.firestore
                        .collection("apiEnd")
                        .add({
                          token: currentToken
                        })
                        .then(() => {
                          this.token = "Suscrito exitosamente";
                          // alert("SuccessFully Subscribed");
                          this.displayNotificaion();
                          localStorage.setItem(
                            "pushNotificationToken",
                            currentToken
                          );
                          this.isLoading = false;
                          this.buttonText = "Permitido";
                        })
                        .catch(err => {
                          this.token = err;
                          this.isLoading = false;
                        });
                    } else {
                      this.isLoading = false;
                      this.token =
                        "No hay token de Instance ID disponible. Solicita permiso para generar uno.";
                    }
                  })
                  .catch(err => {
                    this.isLoading = false;
                    this.token = err;
                  });
              } else {
                this.token = "Ya suscrito";
                this.isLoading = false;
                this.buttonText = "Permitido";
              }
            } else {
              this.isLoading = false;
              this.token = "No se puede obtener permiso para notificar.";
            }
          });
        } else {
          this.isLoading = false;
          this.token = "No soportamos tu navegador";
        }
      } catch (err) {
        // alert(err);
        this.isLoading = false;
        this.token = err;
      }
    },
    displayNotificaion() {
      if ("serviceWorker" in navigator) {
        var options = {
          body: "Te has Suscrito Correctamente a las Push Notifications",
          icon: "img/icons/favicon-32x32.png",
          dir: "ltr",
          badge: "img/icons/favicon-32x32.png",
          tag: "NewSubscription",
          renotify: true,
          actions: [
            {
              action: "open",
              title: "Visitar sitio"
            }
          ]
        };
        navigator.serviceWorker.ready.then(function(swreg) {
          swreg.showNotification("Suscrito exitosamente", options);
        });
      }
    }
  },
  mounted() {
    let token = localStorage.getItem("pushNotificationToken");
    if (token && token.length > 0) {
      this.token = 'Ya suscrito';
      this.buttonText = "Permitido";
    }
  }
};
</script>
