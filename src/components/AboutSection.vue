<template>
<div>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-1 mb-3">
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    rel="preload"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Новий розкішний дитячий одяг із поточних колекцій! Вона має
                    високу якість і бездоганний дизайн. Мікс європейських
                    брендів Вік 0 – 13 років. Товар новий з бірками, деякі
                    позиції на вішалках. Цілком нові якісні речі без запаху.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    rel="preload"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Мінімальне замовлення 5 кг. В Україні вантаж буде вам
                    доставлений Новою Поштою. Можлива післяплата.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    rel="preload"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Нехай ваші діти виглядають чарівно за допомогою останніх
                    стилів. Перегляньте наші милі й зручні вбрання в поєднанні з
                    великою кількістю стилів, щоб завершити образи ваших дітей.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
  </div>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
