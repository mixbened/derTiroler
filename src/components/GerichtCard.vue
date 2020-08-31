<template>
  <!-- This is the Event Card Preview Component-->
  <div class="shadow p-4 grid grid-cols-5">
    <div class="col-span-4">
      <h1 class="sm:text-2xl font-semibold">{{ gericht.name }}</h1>
      <p class="my-2">{{ gericht.beschreibung }}</p>
    </div>
    <div class="col-span-1 text-right">
      <p>{{ gericht.preis }} €</p>
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
