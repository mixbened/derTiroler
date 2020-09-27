<template>
  <!-- This is the Event Card Preview Component-->
  <section>
    <div v-if="position === 'left'" :style="{backgroundColor:`${background}`}">
      <div class="grid grid-cols-11 grid-rows-1" :style="{height: `${height}`}">
        <div class="row-span-1 col-span-11 sm:col-span-6 bg-scroll bg-center bg-cover rounded" :style="{backgroundImage:`url(${image})`}"></div>
        <div class="row-span-1 col-span-11 sm:col-span-5 px-16 py-20 text-center flex items-center justify-center">
          <div>
            <h3 class="text-2xl font-semibold italic">{{ title }}</h3>
            <p class="p-8 text-sm">{{ text }}</p>
            <g-link :to="link"><button class="bg-green-700  hover:bg-gray-700 text-white font-bold py-2 px-4 text-sm">{{ button }}</button></g-link>
          </div>
        </div>
      </div>
    </div>
    <div v-if="position === 'right'"  :style="{backgroundColor:`${background}`}">
      <div class="grid grid-cols-11" :style="{height: `${height}`}">
        <div class="col-span-11 sm:col-span-5 px-16 py-20 text-center flex items-center justify-center">
          <div>
            <h3 class="text-2xl font-semibold italic">{{ title }}</h3>
            <p class="py-4 px-4 sm:px-8 md:px-20 text-sm">{{ text }}</p>
            <g-link :to="link"><button class="bg-green-700  hover:bg-gray-700 text-white font-bold py-2 px-4 text-sm">{{ button }}</button></g-link>
          </div>
        </div>
        <div class="col-span-11 sm:col-span-6 bg-scroll bg-center bg-cover rounded" :style="{backgroundImage:`url(${image})`}"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    title: String,
    text: String,
    button: String,
    image: String,
    position: String,
    background: String,
    height: String,
    link: String
  }
};
</script>

<style scoped>
</style>
