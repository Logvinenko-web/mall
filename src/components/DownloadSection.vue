<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" >
              <v-img
                src="@/assets/img/ill2.svg"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">
                Про нас
              </h1>
              <h1 class="font-weight-light">
                Представляємо вашій увазі дитячий та дорослий одяг СТОК з Європи
                різних вікових категорій від найменших і до дорослих! Пропонуємо
                одяг таких торгових марок як: Mothercare, H&M, F&F, George,
                Matalan, C&A, GAP, Artigli, Zara, Next, Primark, Mohito, Disney,
                Tu, Riot & Sugar Squard, Hype, Missguided, Mayoral, Gaialuna,
                Silvian Heach , Fun&Fun, To be too, Gatti, Street Gang, Ronnie
                Kay та інші бренди, представлені в нашому магазині, дуже
                популярні не лише в Європі, але вже й завойовували серця
                практично всіх українських  споживачів.
              </h1>
              <!-- <v-btn
                rounded
                outlined
                href="https://github.com/Joabsonlg/Landing-Page"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2"> mdi-github </v-icon>
                Git Hub
              </v-btn> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
background-color: black;
}

#download .container,
#download .row {
  height: 100%;
  color: rgb(172, 155, 155) !important;
}
</style>