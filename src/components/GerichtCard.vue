<template>
  <!-- This is the Event Card Preview Component-->
  <div class="shadow p-4 grid grid-cols-6 my-4">
    <div class="col-span-4">
      <h1 class="sm:text-xl">{{ gericht.name }}</h1>
      <p class="my-2">{{ gericht.beschreibung }}</p>
    </div>
    <div class="col-span-2 text-right">
      <p>{{ gericht.preis }} €</p>
      <g-link v-if="gericht.kategorie === 'Shop'" to="/bestellen"><button class="my-2 bg-green-700  hover:bg-gray-700 text-white font-bold py-1 px-2 rounded">Bestellen</button></g-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "GerichtCard",
  props: {
    gericht: Object,
  }
};
</script>

<style scoped>
</style>
