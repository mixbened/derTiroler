<template>
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-5xl font-bold">Bestellformular</h2>
        <p class="text-xl">Hier könnt ihr eure Lieblingsgerichte bestellen</p>
        
      </div>
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

<style scoped>
h1,h2,h3, ul {
  margin: 1em 0;
}

ul {
  list-style-type: none;
}

h2 {
  font-size: 20px;
  font-weight: 800;
}

h3 {
  font-size: 18px;
  font-weight: 800;
}
</style>
