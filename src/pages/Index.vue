<template>
  <Layout>
    <section class="relative">
        <video autoplay muted loop id="myVideo" class="w-full">
          <source src="https://res.cloudinary.com/mixbened/video/upload/v1600954451/tiroler/0b517b8ed16c44c9accf5fd5b2189a98.mov" type="video/mp4">
        </video>
        <div class="overlay flex items-center justify-center z-10 p-4 sm:p-8 md:p-12">
          <div>
            <h3 class="z-50 text-white italic" style="font-family: 'Lobster'">Köln Ehrenfeld</h3>
            <h2 class="z-50 text-white text-5xl font-bold border-title">Der Tiroler</h2>
          </div>
        </div>
        <div class="grid grid-cols-4 overlay flex items-end gap-8">
          <g-image class="mb-2 w-3/4" src="https://i.ibb.co/V2Q62q0/TGF-Logo-4c-600.png"></g-image>
          <g-image class="mb-2 w-3/4" src="https://i.ibb.co/SPfTm87/oatly-logo-white.png"></g-image>
          <g-image class="mb-2 w-3/4" src="https://i.ibb.co/0rv2pKn/output-onlinepngtools-3.png"></g-image>
          <g-image class="mb-2 w-3/4" src="https://i.ibb.co/yktVFb0/output-onlinepngtools-2.png"></g-image>
        </div>
    </section>
    <section class="mt-20">
      <div class="px-4 sm:px-20 md:px-32 lg:px-64">
        <h5 class="italic" style="font-family: 'Lobster'">DerTiroler</h5>
        <h2 class="text-3xl font-semibold">Ein Stück Tirol mitten in Ehrenfeld</h2>
        <p>Herzlich Willkommen im Café in Ehrenfeld | Der Tiroler! Wenn ihr auf der Suche nach einem Café in Ehrenfeld seid, in dem ihr nicht nur leckeren Kaffee von meiner eigenen biologischen Kaffeeplantage genießen könnt, sondern auch diverse Tiroler Spezialitäten zur Auswahl stehen...dann seid Ihr bei mit genau richtig! Alle Proddukte kommen entweder direkt aus Tirol oder der Kölner Region. Unzählige von mir mit viel Mühe und Liebe ausgewählte Kleinbetriebe, die ihr Handwerk mit viel Leidenschaft und ihren Job mit Liebe ausführen, machen aus Ihnen hochgeschätzte Produzenten.</p>
      </div>
    </section>
    <section class="mt-20">
      <div class="w-full p-12 px-4 sm:px-20 md:px-32 lg:px-64">
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-cover shadow rounded bg-center w-full h-64" style="background-image: url('https://i.ibb.co/vqgCtzJ/IMG-20200603-082709-701.jpg')"></div>
          <div class="bg-cover shadow rounded bg-center w-full h-64" style="background-image: url('https://i.ibb.co/p4cdDCk/Screenshot-20200511-194201-Instagram.jpg')"></div>
          <div class="bg-cover shadow rounded bg-center w-full h-full" style="background-image: url('https://i.ibb.co/h1sCqjP/Screenshot-20200512-152231-Instagram.jpg')"></div>
          <div class="bg-cover shadow rounded bg-center w-full h-64" style="background-image: url('https://i.ibb.co/J2HCD0q/Screenshot-20200624-094253-Chrome.jpg')"></div>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <div class="px-4 sm:px-20 md:px-32 lg:px-64">
        <div class="w-full sm:w-2/3">
          <h2 class="text-3xl font-semibold">Wohlfühlen & Genießen</h2>
          <p class="text-justify">Im Café Tiroler bieten wir neben spitzen Kaffee auch ein breites Angebot an herzhaften und süßen Speisen. Schaut auf unserer Karte vorbei oder kommt mit einem besonderen Wunsch auf uns zu.</p>
          <g-link to="/karte"><button class="my-4 bg-green-700  hover:bg-gray-800 text-white font-bold py-2 px-4 text-sm">Zur Karte</button></g-link>
        </div>
      </div>
    </section>
    <section class="mt-20 text-right">
      <div class="py-8 px-4 sm:px-20 md:px-32 lg:px-64 flex justify-end">
        <div class="w-full sm:w-2/3">
          <h2 class="text-3xl font-semibold">Für zu Hause</h2>
          <p>
              Wir verschicken unsere Leckereine und Gerichte aus dem Café gerne zu euch nach Hause. Zudem gibt es immer wieder Specials
              <!-- <ul  class="w-full">
                  <li>Tiroler Geschenkkorb</li><hr>
                  <li>Tiroler Geschenkkorb</li><hr>
                  <li>Tiroler Geschenkkorb</li><hr>
                  <li>Tiroler Geschenkkorb</li><hr>
                  <li>Tiroler Geschenkkorb</li>
              </ul> -->
          </p>
          <g-link to="/karte-shop"><button class="my-4 bg-green-700  hover:bg-gray-800 text-white font-bold py-2 px-4 text-sm">Zum Shop</button></g-link>
        </div>
      </div>
    </section>
    <section class="mt-20 mb-20">
      <div class="py-8 px-4 sm:px-20 md:px-32 lg:px-64">
        <InfoCard title="Hallo Zusammen" text="Als ob das Café in Köln-Ehrenfeld und die Kaffee-Plantage in Thailand noch nicht genug wären, arbeitet Marcel auch noch im Catering und bietet Baristaschulungen an. Was er allerdings nur noch sehr selten macht: Auf Street Food Festivals verkaufen. „Ich habe dort beispielsweise Tiroler Käsespätzle angeboten oder Antipasti. Das fanden zwar alle Besucher toll. Aber bestellt haben sie eben nebenan am Burger-Stand. Da wir alles selbst einlegen und zubereiten, kostet uns das viel Zeit und Geld. Deswegen biete ich Catering nur noch für Firmenevents, Geburtstage oder natürlich beim Messecatering an“, sagt Marcel. Und immerhin hat er ja sein kleines Café, für das er Kuchen backen kann – und Kaiserschmarren, wenn ihn die Sehnsucht nach Österreich überkommt. " button="Unsere Werte" position="left" image="https://i.ibb.co/ww24N95/IMG-20200410-122726-827.jpg" background="transparent" height="600px" link="/werte"/>
      </div>
    </section>

  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard'
import TextCard from '../components/TextCard'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    InfoCard,
    TextCard
  },
  data() {
    return {
      url: "../assets/photo-1496582490020-60c1344c64aa.jpeg"
    }
  }
}
</script>

<style>


.banner-height {
  height: 500px;
}
#myvideo {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
}
.overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0,0.3);
  text-align: center;
}
.border-title {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}
li {
  padding: 3% 0;
}
li:first-child{
  padding-top: 5%;
}
li:last-child{
  border: none;
}


</style>
