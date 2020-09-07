<template>
  <Layout>
    <section class="my-12 mx-auto sm:w-3/4 w-4/5">
      <h1 class="text-4xl font-bold">Impressum</h1>
      <p class="my-8">
        Adresse Adresse<br>
        Adresse Adresse<br>
        Adresse Adresse<br>
      </p>
      <h3 class="text-2xl">Datenschutzerklärung</h3>
      <p class="my-4">
        Adresse Adresse<br>
        Adresse Adresse<br>
        Adresse Adresse<br> 
      </p>
    </section>
  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard'

export default {
  metaInfo: {
    title: 'Impressum'
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

<style>
</style>
