<template>
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-4xl font-bold">Bestellformular</h2>
        <p class="text-xl">Hier könnt ihr eure Lieblingsgerichte bestellen</p>
      </div>
    </section>
    <section v-if="success" class="w-3/4 sm:w-1/2 m-auto my-8">
      <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
          <div>
            <p class="font-bold">Danke für deine Bestellung!</p>
            <p class="text-sm">Du erhältst von uns eine Bestätigungsmail mit allen weiteren Details und Zahlungsmodalitäten.</p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="!success && errorMessage" class="w-3/4 sm:w-1/2 m-auto my-8">
      <div class="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
          <div>
            <p class="font-bold">Ups. Entschuldige!</p>
            <p class="text-sm">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-20 m-auto w-4/5 sm:w-1/2" v-if="!errorMessage && !success">
      <div class="my-8">
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">Vor- und Nachname*</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="personal.name" id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5">
          </div>
        </div>
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">Vollständige Adresse*</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="personal.address" id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5">
          </div>
        </div>
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">Telefonnummer*</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="personal.phone" id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5">
          </div>
        </div>
        <div class="my-4">
          <label for="price" class="block text-sm leading-5 font-medium text-gray-700">E-Mail Adresse*</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="personal.email" id="price" class="form-input p-2 block w-full pl-7 pr-12 sm:text-sm sm:leading-5">
          </div>
        </div>
      </div>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <BestellCard :gericht="edge.node" @addToCart="addToCart($event)"/>
      </div>
      <hr>
      <button class="my-2 bg-green-700  hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" @click="sendOrder()">Bestellen</button>
      <small class="mx-4" v-if="sum > 0">Warenkorb: {{ sum }}€</small>
    </section>
    <section v-if="!errorMessage && !success">
          <div class=" m-auto w-4/5 sm:w-1/2">
            <h5 class="text-xl">So funktioniert's</h5>
            <h2 class="text-4xl font-semibold">Bestellprozess</h2>
            <div class="text-left py-4 w-full">
              <p class="my-2">1. Wichtigste Informationen eintragen</p>
              <p class="my-2">2. Lieblingsprodukte auswählen</p>
              <p class="my-2">3. Bestelllformular abschicken</p>
              <p class="my-2">4. Auf Bestätigungsmail warten</p>
              <p class="my-2">5. Zahlungsdetails der Bestätigungsmail entnehmen</p>
              <p class="my-2">6. Paket erhalten und genießen</p>
            </div>
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
import axios from 'axios'

export default {
  metaInfo: {
    title: 'Impressum'
  },
  data(){
    return {
      products: [],
      sum: 0,
      personal: {},
      errorMessage: '',
      success: false
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
    },
    sendOrder(){
      let { personal, products, sum } = this
      if(!personal.email || !personal.name || products.length < 1) return
      const date = new Date().toLocaleString()
      const count = products.length
      let data = {personal, products, sum, date, count}
      axios.post('https://hooks.zapier.com/hooks/catch/3341374/ogfjz0k', JSON.stringify(data)).then(response => {
        // console.log('response from zapier: ', response)
        this.success = true
      }).catch(err => {
        this.errorMessage = 'Leider ist etwas schief gelaufen. Versuche es später bitte noch einmal...'
        this.success = false
      })
    }
  }
}
</script>

<style scoped>
</style>
