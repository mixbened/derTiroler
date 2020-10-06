<template>
        <div class="shadow p-4 grid grid-cols-6 my-4">
          <div class="col-span-4">
            <h1 class="sm:text-xl">{{ gericht.name }}</h1>
          </div>
          <div class="col-span-2 text-right">
            <p>{{ gericht.preis }} €</p>
            <div  @click="addToCart(gericht.name, gericht.preis)" class="relative inline-block text-left">
            <div>
              <span class="rounded-md shadow-sm">
                <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                  {{ anzahl }}
                  <!-- Heroicon name: chevron-down -->
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </span>
            </div>
            <div v-if="dropdown" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10">
              <div class="rounded-md bg-white shadow-xs">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click="anzahl = 0">-</div>
                  <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click="anzahl = 1">1</div>
                  <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click="anzahl = 2">2</div>
                  <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click="anzahl = 3">3</div>
                  <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click="anzahl = 4">4</div>
                  <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click="anzahl = 5">5</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
</template>

<script>

export default {
  name: "BestellCard",
  props: {
    gericht: Object,
  },
  data(){
    return {
      anzahl: 'Anzahl',
      dropdown: false,
    }
  },
  methods: {
    addToCart(name, price){
      this.dropdown = !this.dropdown
      if(!this.dropdown){
        this.$emit('addToCart', {name, price, count: this.anzahl})
      }
    }
  }
};
</script>

<style scoped>
</style>
