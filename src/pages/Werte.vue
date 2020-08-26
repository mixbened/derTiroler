<template>
  <Layout>
    <section class="sm:m-20 m-8">
      <InfoCard position="left" title="Some Title" text="Some Text" button="Click Here" image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2262&q=80"/>
      <InfoCard position="right" title="Some Title" text="Some Text" button="Click Here" image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2262&q=80"/>
    </section>
    <section class="sm:m-20 m-8">
      <div class="grid grid-cols-3 gap-4">
        <div class="text-center p-8 bg-gray-400 hover:bg-gray-300 cursor-pointer">
          <h2 class="text-2xl font-semnibold">Getränke</h2>
        </div>
        <div class="text-center p-8 bg-gray-400 hover:bg-gray-300 cursor-pointer">
          <h2 class="text-2xl font-semnibold">Mittagessen</h2>
        </div>
        <div class="text-center p-8 bg-gray-400 hover:bg-gray-300 cursor-pointer">
          <h2 class="text-2xl font-semnibold">Snacks</h2>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard.vue'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    InfoCard
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
