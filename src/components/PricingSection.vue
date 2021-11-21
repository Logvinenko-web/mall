<template>
  <section id="pricing" class="pb-8">
    <v-container fluid d-flex flex-row>
      <v-row align="center" justify="space-around">
        <v-col cols="15">
          <v-card style="width: 100%">
            <h1 class="text-center pt-6 font-weight-light display-2">Ціни</h1>
            <v-divider class="my-6"></v-divider>
            <div class="d-flex flex-wrap flex-row mb-6">
              <v-card
                v-for="item of cards"
                :key="item.id"
                class="mx-auto card-item"
                :width="width"
              >
                <v-carousel hide-delimiters>
                  <v-carousel-item
                    v-for="(item, i) in item.imgs"
                    :key="i"
                    :src="item.src"
                  ></v-carousel-item>
                </v-carousel>

                <v-card-title> {{ item.title }} </v-card-title>

                <v-card-subtitle> {{ item.price }} </v-card-subtitle>

                <v-expand-transition>
                  <div>
                    <v-divider></v-divider>
                    <v-card-text v-for="des in item.description" :key="des" class="priceText">
                      {{ des }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>



<script>
export default {
  data: {},
};
</script>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.priceText {
  padding: 5px 10px 5px 20px;
}
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

section {
  position: relative;
}

.card-item {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data: () => ({
    model: 0,
  }),
  async created () {
    await this.features()
  },
  computed: {
    cards () {
      return [
      {
        id: 1,
        imgs: [
          {
            src: require("../assets/img/cool_club/1.jpg"),
          },
          {
            src: require("../assets/img/cool_club/2.jpg"),
          },
          {
            src: require("../assets/img/cool_club/3.jpg"),
          },
          {
            src: require("../assets/img/cool_club/4.jpg"),
          },
          {
            src: require("../assets/img/cool_club/5.jpg"),
          },
          {
            src: require("../assets/img/cool_club/6.jpg"),
          },
        ],
        title: "Cool Club kids сезон Осінь Зима",
        price: "Ціна 19.9 € - 20.5 €",
        description: [
          "👉23 /25 кг /20,5 евро за кг",
          "👉50 кг/ 19,9 евро за кг",
          "Від 2-х прошитих мішків по 23/25 кг ціна 19,9 євро за кг",
          "Важливо ☝️ Кількість обмежена!",
          "Мішки є з бейбиком і без нього!",
          "Прошиті Мішки 23/25 кг .Товар бомба 💣 Моделі 2020/2021 року",
        ],
      },
      {
        id: 2,
        imgs: [
          {
            src: require("../assets/img/old_navy/1.jpg"),
          },
          {
            src: require("../assets/img/old_navy/2.jpg"),
          },
          {
            src: require("../assets/img/old_navy/3.jpg"),
          },
        ],
        title: "Old Navy kids Америка сезон Осінь Зима",
        price: "Ціна 19 € - 20.5 €",
        description: [
          "👉15/17 кг /19 евро за кг",
          "👉10 кг/ 19,5 евро за кг",
          "Від 2-х прошитих мішків по 15/17 кг ціна 18,5 євро за кг",
          "Важливо ☝️ Кількість обмежена!",
          "Прошиті Мішки 15/17 кг .Товар бомба 💣 Моделі 2020/2021 року",
        ],
      },
      {
        id: 3,
        imgs: [
          {
            src: require("../assets/img/primark_kids/1.jpg"),
          },
          {
            src: require("../assets/img/primark_kids/2.jpg"),
          },
          {
            src: require("../assets/img/primark_kids/3.jpg"),
          },
        ],
        title: "Primark kids Іспанія сезон Осінь Зима",
        price: "Ціна 19 € - 20.5 €",
        description: [
          "👉18 кг /19,5 евро за кг",
          "👉36 кг/ 19 евро за кг",
          "Від 2-х прошитих мішків по 18/19 кг ціна 19 євро за кг",
          "Важливо ☝️ Кількість обмежена!",
          "Бейбік окремо буде пізніше на 0,5 євро дорожче.",
          "Прошиті Мішки 18/19 кг .Товар бомба 💣 Моделі 2020/2021 року",
        ],
      },
    ]
    },

    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 320;
        case "sm":
          return 350;
        case "md":
          return 370;
        case "lg":
          return 670;
        case "xl":
          return 400;
      }
    },
  },
};
</script>