<template>
  <!-- This is the Events list Page-->
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-5xl font-bold">Alle Produkte</h2>
        <p class="text-xl">Schau dir an, was du in unserem Café genießen und was du bei uns bestellen kannst.</p>
      </div>
    </section>
    <section class="sm:m-20 m-8">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 sm:col-span-1">
          <g-link to="/karte-getraenke">
            <div class="justify-center hover:bg-orange-300 cursor-pointer text-white hover:shadow bg-cover bg-center shadow h-48 flex items-center"  :style="{backgroundImage:`url(${image1})`}">
              <h2 class="sm:text-2xl font-semibold bg-blue-900 bg-opacity-25 w-full h-full flex items-center justify-center">Getränke</h2>
            </div>
          </g-link>
        </div>
        <div class="col-span-3 sm:col-span-1">
          <g-link to="/karte-mittagessen">
            <div class="justify-center hover:bg-orange-300 cursor-pointer text-white hover:shadow bg-cover bg-center shadow h-48 flex items-center"  :style="{backgroundImage:`url(${image3})`}">
              <h2 class="sm:text-2xl font-semibold bg-blue-900 bg-opacity-25 w-full h-full flex items-center justify-center">Warme Speisen</h2>
            </div>
          </g-link>
        </div>
        <div class="col-span-3 sm:col-span-1">
          <g-link to="/karte-snacks">
            <div class="justify-center hover:bg-orange-300 cursor-pointer text-white hover:shadow bg-cover bg-center shadow h-48 flex items-center"  :style="{backgroundImage:`url(${image2})`}">
              <h2 class="sm:text-2xl font-semibold bg-blue-900 bg-opacity-25 w-full h-full flex items-center justify-center">Snacks</h2>
            </div>
          </g-link>
        </div>
        <div class="col-span-3 sm:mt-8">
          <g-link to="/karte-shop">
            <div class="justify-center hover:bg-orange-300 cursor-pointer text-white hover:shadow bg-cover bg-center shadow h-48 flex items-center"  :style="{backgroundImage:`url(${image4})`}">
              <h2 class="sm:text-2xl font-semibold bg-blue-900 bg-opacity-25 w-full h-full flex items-center justify-center">Shop</h2>
            </div>
          </g-link>
        </div>
      </div>
    </section>
    <section class="my-32">
      <div>
        <div class="grid grid-cols-11">
          <div class="col-span-11 sm:col-span-5 px-4 sm:px-16 py-20 text-center flex items-center justify-center">
            <div>
              <h3 class="text-2xl font-semibold italic">Unsere Werte</h3>
              <p class="py-4 px-4 sm:px-8 md:px-20 text-sm text-justify">Es scheint fast ein Fluch auf dem kleinen Laden zu liegen: In der Glasstraße in Köln-Ehrenfeld, auf dem Weg von der Haltestelle Liebigstraße zum Bahnhof Ehrenfeld, auf der rechten Seite Glasstraße  65 in einem Geschäftsraum schon viele ihr Glück versucht. Egal, ob Suppen, belegte Brötchen oder Kekse verkauft wurden: Es hat bisher nicht geklappt. Jetzt ist dort seit Anfang Februar Der Tiroler drin, hinter der Kaffeetheke steht Marcel Kleewein, der eben aus Tirol kommt. Er backt seine Kuchen selbst, bietet Smoothies an und Frühstück Mittagessen und kleine Snacks und  Tirolerspetzilitäten. Außerdem macht er Marmeladen und Sirupe selbst, die er im Café auch verkauft des Weiteren bietet er Baristakurse an . Vielleicht hat er die richtige Mischung im Angebot, um sich hier halten zu können.</p>
              <g-link to="/werte"><button class="bg-green-700  hover:bg-gray-700 text-white font-bold py-2 px-4 text-sm">Werte</button></g-link>
            </div>
          </div>
          <div class="col-span-11 sm:col-span-6 flex justify-center">
            <g-image class="w-1/2" src="../assets/undraw_eco_conscious_1y58.svg" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Karte {
    gericht: allGericht (sort: { by: "date", order: ASC }){
      edges {
        node{
          id
          name
          beschreibung
          preis
        }
      }
    }
  }
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import InfoCard from '~/components/InfoCard.vue';
import TextCard from '../components/TextCard.vue'

export default {
  metaInfo: {
    title: 'Karte'
  },
  components: {
    Layout,
    InfoCard,
    TextCard
  },
  data(){
    return {
      image1: 'https://i.ibb.co/h1sCqjP/Screenshot-20200512-152231-Instagram.jpg',
      image2: 'https://i.ibb.co/N3fTWMt/Screenshot-20200711-002048-Instagram.jpg',
      image3: 'https://i.ibb.co/2YPdLCZ/IMG-20200603-082709-701.jpg',
      image4: 'https://i.ibb.co/m5HSn4x/Screenshot-20200218-082423-Chrome.jpg'
    }
  }
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,.1), 0 0.33rem 1rem rgba(0,0,0,.15);
}
</style>
