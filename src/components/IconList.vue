<template>
  <!-- This is the Event Card Preview Component-->
  <section class="my-2">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 px-20">
      <div class="col-span-1 text-center p-10">
        <g-image
        alt="Icon Image" 
        :src="image1"
        class="w-80 m-auto" 
        />
        <h4 class="text-lg font-bold py-2">{{ title1 }}</h4>
        <p class="px-4 sm:px-8 text-sm">{{ text1 }}</p>
      </div>
      <div class="col-span-1 text-center p-10">
        <g-image 
        alt="Icon Image" 
        :src="image2"
        class="w-20 m-auto" 
        />
        <h4 class="text-lg font-bold py-2">{{ title2 }}</h4>
        <p class="px-4 sm:px-8 text-sm">{{ text2 }}</p>
      </div>
      <div class="col-span-1 text-center p-10">
        <g-image 
        alt="Icon Image" 
        :src="image3"
        class="w-20 m-auto" 
        />
        <h4 class="text-lg font-bold py-2">{{ title3 }}</h4>
        <p class="px-4 sm:px-8 text-sm">{{ text3 }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IconList",
  props: {
    title1: String,
    text1: String,
    image1: String,
    title2: String,
    text2: String,
    image2: String,
    title3: String,
    text3: String,
    image3: String,
  }
};
</script>

<style scoped>
</style>
