<template>
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-5xl font-bold">Unsere Werte</h2>
        <p class="text-xl">Some leading and ending text here describing the dishes</p>
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
          <p class="px-4 sm:px-8 text-sm">Lorem Ipsum.......</p>
        </div>
        <div class="col-span-1 text-center p-10">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_my_current_location_om7g.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold py-2">Regional</h4>
          <p class="px-4 sm:px-8 text-sm">Lorem Ipsum.......</p>
        </div>
        <div class="col-span-1 text-center p-10">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_Tree_swing_646s.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold py-2">Wohlfühlen</h4>
          <p class="px-4 sm:px-8 text-sm">Lorem Ipsum.......</p>
        </div>
      </div>
    </section>
    <section>
      <div class="w-full bg-gray-800 p-12 text-white text-center">
        <h5 class="text-xl">Some Heading</h5>
        <h2 class="text-4xl font-semibold">Some Heading</h2>
        <p>Some text,, text,, </p>
      </div>
    </section>
    <section class="my-20">
      <InfoCard position="left" title="Some Title" text="Some Text" button="Click Here" image="https://i.ibb.co/XLhjgrv/Screenshot-20200924-104838-Instagram.jpg" height="450px" />
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
