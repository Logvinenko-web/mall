<template>
  <section id="hero">
    <v-parallax
      dark
      src="@/assets/img/bgHero.jpg"
      height="750"
    >
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">
                Інтернет-магазин "MALL"
              </h1>
              <h1 class="font-weight-light">
                Дитячий та дорослий одяг СТОК з Європи <br />
                різних вікових категорій від найменших і до дорослих! <br />
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#contact')"
                class="mt-5"
              >
                Замовити
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="250px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "H & M Hennes & Mauritz AB",
          text: "Шведський бренд одягу та косметики, відмінною рисою якого є модний та якісний одяг.",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "",
          text: "Бренд George з'явився багато років тому на території Великобританії та належить компанії Asda. Назву марка отримала на честь першого дизайнера Джорджа Девіса, відомого як творець дешевих, але винятково якісних колекцій одягу, взуття та стильних аксесуарів для жінок, чоловіків та дітей.",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "",
          text: "Marks and Spencer Group plc є великим британським багатонаціональним рітейлером зі штаб-квартирою в Лондоні, Англія, який спеціалізується на продажі одягу, товарів для дому та харчових продуктів, переважно власних марок.",
        },
        {
          img: require("@/assets/img/icon4.png"),
          title: "",
          text: "Англійська компанія, що спеціалізується на товарах для дітей до 10 років та товарах для майбутніх мам.",
        },
        {
          img: require("@/assets/img/icon5.png"),
          title: "",
          text: "Італійська компанія з одягу, найбільший роздрібний торговець одягом в Італії, який становить близько 5% національного ринку роздрібної торгівлі одягом.",
        },
        {
          img: require("@/assets/img/icon6.png"),
          title: "",
          text: "Zara є однією з найбільших світових компаній у сфері виробництва модного одягу. Вона входить до групи Inditex, однієї з найбільших світових дистриб'юторських груп.",
        },
      ],
    };
  },
  
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}



#hero {
  z-index: 0;
}
/* .svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
} */

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
