<template>
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-5xl font-bold">Unsere Werte</h2>
        <p class="text-xl">Some leading and ending text here describing the dishes</p>
      </div>
    </section>
    <section class="sm:m-20 m-8">
      <IconList title1="Regional" title2="Nachhaltig" title3="Wohlfühlen" text1="Lorem Ipsum dolor sit amet" text2="Lorem Ipsum dolor sit amet" text3="Lorem Ipsum dolor sit amet" image1="https://i.ibb.co/ZLb9FN0/icons8-veganes-essen-80.png" image2="https://i.ibb.co/bd6Vtsp/icons8-kohlenhydrate-80.png" image3="https://i.ibb.co/f8VZWWd/icons8-avocado-80.png" />
    </section>
    <section class="mt-20">
      <InfoCard position="left" title="Some Title" text="Some Text" button="Click Here" image="https://i.ibb.co/SNWycW9/Screenshot-20200714-162002-Instagram.jpg"  background="#F9F4EE" height="450px" />
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
