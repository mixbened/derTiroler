<template>
  <Layout>
    <section>
      <div class="flex items-center w-full bg-scroll bg-cover h-screen p-4 md:px-20" style="background-image: url('https://images.unsplash.com/photo-1496582490020-60c1344c64aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')">
        <div class="text-gray-100">
          <h5 class="text-xl text-semibold font-display">derTiroler</h5>
          <h1 class="text-4xl">Ein Stück Tirol mitten in Ehrenfeld</h1>
          <p class="w-100 text-sm">Wir haben täglich wechselnde Angebote an Speisen und Getränken</p>
          <g-link to="/karte"><button class="my-2 bg-blue-800  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Zur Karte</button></g-link>
        </div>
      </div>
    </section>
    <section>
      <TextCard title="Überschrift" subtitle="subtitle" text="text" />
    </section>
    <section>
      <InfoCard title="Hallo Zusammen" text="Ich bin Marcel und waschechter tiroler..." button="Unsere Werte" position="left" image="https://i.ibb.co/zQjPycj/Screenshot-20200314-130041-Instagram.jpg" background="#F9F4EE" />
    </section>

  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard'
import TextCard from '../components/TextCard'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    InfoCard,
    TextCard
  },
  data() {
    return {
      url: "../assets/photo-1496582490020-60c1344c64aa.jpeg"
    }
  }
}
</script>

<style>
</style>
