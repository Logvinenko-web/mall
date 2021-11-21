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
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
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
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    phone: "",
    message: "",
    nameRules: [
      // (v) => !!v || "Заповніть будь ласка поле",
    //  (v) => (v && v.length >= 3) || "Ім'я має містити мінімум 3 букви",
    ],
    phoneRules: [
      // (v) => !!v || "Заповніть будь ласка поле",
      // (v) => (v && v.length >= 8) || "Телефон має містити мінімум 8 цифр",
    ],

    lazy: false,
    snackbar: {
      enabled: false,
      text: "",
      color: "",
    },
  }),
  methods: {
    sendEmail() {
      // emailjs
      //   .send(
      //     "service_q6jsjrc",
      //     "template_6g8qtij",
      //     {
      //       name: this.name,
      //       phone: this.phone,
      //       message: this.message,
      //     },
      //     "user_IKxzK3Kz484EyCU7HWC8V"
      //   )
      //   .then(
      //     (result) => {
      //       console.log("SUCCESS!", this.$refs.form);
      //     },
      //     (error) => {
      //       console.log("FAILED...", error.text);
      //     }
      //   );
      this.name = "";
      this.phone = "";
      this.message = "";
    },
  },
};
</script>
