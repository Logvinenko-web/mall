<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Контакти</h1>
              <h3 class="font-weight-light mt-3">
                Замовити товар можете через форму
              </h3>
              <h3 class="font-weight-light mt-3">
                вказавши ім'я,контактний телефон і ваше повідомлення
              </h3>
              <h3 class="font-weight-light mt-3">
                👇 Зателефонувати або написати нам на Email
              </h3>
              <h3 class="font-weight-light mt-3">
                Телефон: +38 (96) 923-33-36
              </h3>
              <h3 class="font-weight-light">Email: tanaprysepa@gmail.com</h3>
            </v-col>
            <v-col cols="12" sm="7">
              <form ref="form" @submit.prevent="sendEmail">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Ім'я"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  label="Телефон"
                  required
                ></v-text-field>

                <v-textarea v-model="message" label="Повідомлення" />

                <v-btn
                  color="primary"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3"
                  type="submit"
                >
                  Замовити
                </v-btn>
              </form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="green">
      {{ text }}
    </v-snackbar>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    icons: ["fa-facebook", "fa-instagram"],
    valid: true,
    alert: false,
    snackbar: false,
    text: "Дякуємо за звернення :)",
    timeout: 3000,
    name: "",
    phone: "",
    message: "",
    nameRules: [
      // (v) => !!v || "Заповніть будь ласка поле",
      //  (v) => (v && v.length >= 3) || "Ім'я має містити мінімум 3 букви",
    ],
    phoneRules: [
      // (v) => !!v || "Заповніть будь ласка поле",
      //  (v) => (v.match(/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){8,12}\d$/)) || "Не корректний номер телефону",
    ],

    lazy: false,
  
  }),
  methods: {
    sendEmail() {
      emailjs
        .send(
          "service_ygxcmmg",
          "template_5lbjkda",
          {
            name: this.name,
            phone: this.phone,
            message: this.message,
          },
          "user_cqdNawJTZjmaHUZXqZ0bI"
        )
        .then(
          (result) => {},
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      this.name = "";
      this.phone = "";
      this.message = "";
      this.snackbar = true;
    },
   
  },
};
</script>
