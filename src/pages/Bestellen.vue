<template>
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-4xl font-bold">Bestellformular</h2>
        <p class="text-xl">Hier könnt ihr eure Lieblingsgerichte bestellen</p>
      </div>
    </section>
    <section class="m-auto w-4/5 sm:w-1/2">
      <div class="my-8">
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">Vor- und Nachname</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5" placeholder="Max Mustermann">
          </div>
        </div>
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">Vollständige Adresse</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5" placeholder="Kleine Werft 4b, 50823 Köln">
          </div>
        </div>
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">Telefonnummer</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5" placeholder="+49 174874563">
          </div>
        </div>
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">E-Mail Adresse</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5" placeholder="tina@web.de">
          </div>
        </div>
      </div>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <BestellCard :gericht="edge.node" @addToCart="addToCart($event)"/>
      </div>
      <hr>
      <button class="my-2 bg-green-700  hover:bg-gray-700 text-white font-bold py-1 px-2 rounded">Bestellen</button>
      <small class="mx-4" v-if="sum > 0">Warenkorb: {{ sum }}€</small>
    </section>
    <section>
    </section>
    <section>
          <div class="w-full bg-gray-800 p-12 py-20 text-white text-center">
            <h5 class="text-xl">So funktioniert's</h5>
            <h2 class="text-4xl font-semibold">Bestellprozess</h2>
            <p class="px-2 sm:px-12">Was das Café der Der Tiroler von vielen anderen abhebt, ist zweifellos der Kaffee: Marcel hat Kaffee Kogi im Angebot. Den bekommt man mit Sicherheit nicht im Supermarkt, aber auch sonst eher selten. Denn dieser Kaffee kommt aus dem kolumbianischen Urwald, ist ein Wildkaffee und wird von den Kogi, einem Eingeborenenstamm, gesammelt. Sein Geschmack wird nicht nur von vielen Kaffeetrinkern gelobt, er ist auch noch voll biologisch, fairtrade – und vom Verkauf gehen 20 Prozent zusätzlich an die Kogi zurück.</p>
          </div>
    </section>
  </Layout>
</template>

<page-query>
  query Karte {
    gerichte: allGericht (sort: { by: "date", order: ASC }, filter: {kategorie: {eq: "Shop"}}){
      edges {
        node{
          id
          name
          beschreibung
          preis
          kategorie
        }
      }
    }
  }
</page-query>

<script>
import InfoCard from '../components/InfoCard'
import GerichtCard from '../components/GerichtCard'
import BestellCard from '../components/BestellCard'

export default {
  metaInfo: {
    title: 'Impressum'
  },
  data(){
    return {
      products: [],
      sum: 0
    }
  },
  components: {
    InfoCard,
    GerichtCard,
    BestellCard
  },
  methods: {
    addToCart: function(product){
      let newList = this.products.filter(item => item.name !== product.name)
      newList.push(product)
      newList = newList.filter(item => item.count > 0)
      this.products = newList
      this.checkSum(this.products)
    },
    checkSum: function(products){
      const sum = products.reduce((accumulator, product) => {
        return accumulator + (product.price * product.count)
        }, 0);
      this.sum = sum
    }
  }
}
</script>

<style scoped>
</style>
