<template>
  <Layout>
    <section>
      <InfoCard position="left" title="Some Title" text="Some Text" button="Click Here" image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2262&q=80"  background="#F9F4EE" />
    </section>
    <section class="sm:m-20 m-8">
      <IconList title1="Regional" title2="Nachhaltig" title3="Unbehandelt" text1="Lorem Ipsum dolor sit amet" text2="Lorem Ipsum dolor sit amet" text3="Lorem Ipsum dolor sit amet" image1="https://i.ibb.co/ZLb9FN0/icons8-veganes-essen-80.png" image2="https://i.ibb.co/bd6Vtsp/icons8-kohlenhydrate-80.png" image3="https://i.ibb.co/f8VZWWd/icons8-avocado-80.png" />
    </section>
    <section>
      <TextCard title="Überschrift" subtitle="subtitle" text="text" />
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
