<template>
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-5xl font-bold">Unsere Werte</h2>
        <p class="text-xl">Auf eine Melange im Café Der Tiroler</p>
      </div>
    </section>
    <section class="sm:m-20 m-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 px-0 lg:px-20">
        <div class="col-span-1 text-center p-10">
          <g-image
          alt="Icon Image" 
          src="../assets/undraw_coffee_break_j3of.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold py-2">Nachhaltig</h4>
          <p class="px-4 sm:px-8 text-sm">Wir setzen auch nachhaltige Materialien und Prozesse</p>
        </div>
        <div class="col-span-1 text-center p-10">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_my_current_location_om7g.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold py-2">Regional</h4>
          <p class="px-4 sm:px-8 text-sm">Produkte auschließlich Regional und von Kleinstbetrieben</p>
        </div>
        <div class="col-span-1 text-center p-10">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_Tree_swing_646s.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold py-2">Wohlfühlen</h4>
          <p class="px-4 sm:px-8 text-sm">Besucht mich in meinem Wohnzimmer und vielleicht auch eurem</p>
        </div>
      </div>
    </section>
    <section>
      <div class="w-full bg-gray-800 p-12 text-white text-center">
        <h5 class="text-xl">Kolumbianischer Urwaldkaffee</h5>
        <h2 class="text-4xl font-semibold">Café Der Tiroler</h2>
        <p class="px-2 sm:px-12">Was das Café der Der Tiroler von vielen anderen abhebt, ist zweifellos der Kaffee: Marcel hat Kaffee Kogi im Angebot. Den bekommt man mit Sicherheit nicht im Supermarkt, aber auch sonst eher selten. Denn dieser Kaffee kommt aus dem kolumbianischen Urwald, ist ein Wildkaffee und wird von den Kogi, einem Eingeborenenstamm, gesammelt. Sein Geschmack wird nicht nur von vielen Kaffeetrinkern gelobt, er ist auch noch voll biologisch, fairtrade – und vom Verkauf gehen 20 Prozent zusätzlich an die Kogi zurück.</p>
      </div>
    </section>
    <section class="my-20">
      <div>
        <div class="grid grid-cols-11 grid-rows-1" :style="{height: `${height}`}">
          <div class="row-span-1 col-span-11 sm:col-span-5 px-4 sm:px-8 py-20 text-center flex items-center justify-center">
            <div>
              <h3 class="text-2xl font-semibold italic text-left py-2">Kaffeeplantage Thailand</h3>
              <p class="text-sm text-justify">Allerdings: Marcel ist auf den Kaffee Kogi nicht angewiesen, denn er hat eine eigene Kaffeeplantage in Thailand. Die thailändische Familie, die die Vorbesitzer waren, lebt noch heute bei der Plantage und bewirtschaftet sie. Sie übernimmt also die Ernte, den Schnitt und die Aufbereitung des Kaffees nach seinen genauen Vorstellungen. Irgendwann bekommt Marcel eine Nachricht, dass der Kaffee verschifft werden kann. Und dann muss er sich um den Transport kümmern. Der Kaffee kommt schließlich in Hamburg an und wird dort von einem Kollegen abgeholt, der ihn fürs Café Der Tiroler röstet. Zusätzlich legt Marcel Wert darauf, kleine, eher unbekannte Röstereien vorzustellen. Darum gibt es im Café jeden Monat zusätzlich einen anderen Kaffee.</p>
            </div>
          </div>
          <div class="col-span-11 sm:col-span-6 bg-scroll bg-center bg-cover rounded" style="background-image: url('https://i.ibb.co/XLhjgrv/Screenshot-20200924-104838-Instagram.jpg')"></div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard.vue'
import IconList from '../components/IconList.vue'
import TextCard from '../components/TextCard.vue'

export default {
  metaInfo: {
    title: 'Werte'
  },
  components: {
    InfoCard,
    IconList,
    TextCard
  },
  data() {
    return {
      url: "../assets/photo-1496582490020-60c1344c64aa.jpeg"
    }
  }
}
</script>

<style scoped>
</style>
