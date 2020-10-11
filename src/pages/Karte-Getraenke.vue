<template>
  <!-- This is the Events list Page-->
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-5xl font-bold">Getränke</h2>
        <p class="text-xl">Erfrischend, wärmend oder vitalisierend</p>
      </div>
    </section>
    <section class="m-2 sm:mx-20 my-12">
      <h4 class="w-full sm:w-1/2 m-auto my-4 mt-8 text-2xl border-bottom" style="font-family: 'Lobster'">Aus dem Siebträger</h4>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <GerichtCard
          :gericht="edge.node"
          class="w-full sm:w-1/2 m-auto"
          v-if="edge.node.unterkategorie === 'Aus dem Siebträger'"
        />
      </div>
      <h4 class="w-full sm:w-1/2 m-auto my-4 mt-12 text-2xl border-bottom" style="font-family: 'Lobster'">Aus dem Filter</h4>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <GerichtCard
          :gericht="edge.node"
          class="w-full sm:w-1/2 m-auto"
          v-if="edge.node.unterkategorie === 'Aus dem Filter'"
        />
      </div>
      <h4 class="w-full sm:w-1/2 m-auto my-4 mt-12 text-2xl border-bottom" style="font-family: 'Lobster'">Anderes Heißes</h4>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <GerichtCard
          :gericht="edge.node"
          class="w-full sm:w-1/2 m-auto"
          v-if="edge.node.unterkategorie === 'Anderes Heißes'"
        />
      </div>
      <h4 class="w-full sm:w-1/2 m-auto my-4 mt-12 text-2xl border-bottom" style="font-family: 'Lobster'">Kalte Drinks</h4>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <GerichtCard
          :gericht="edge.node"
          class="w-full sm:w-1/2 m-auto"
          v-if="edge.node.unterkategorie === 'Kalte Drinks'"
        />
      </div>
      <h4 class="w-full sm:w-1/2 m-auto my-4 mt-12 text-2xl border-bottom" style="font-family: 'Lobster'">Smoothies</h4>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <GerichtCard
          :gericht="edge.node"
          class="w-full sm:w-1/2 m-auto"
          v-if="edge.node.unterkategorie === 'Smoothies'"
        />
      </div>
      <h4 class="w-full sm:w-1/2 m-auto my-4 mt-12 text-2xl border-bottom" style="font-family: 'Lobster'">Frischgepresstes</h4>
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <GerichtCard
          :gericht="edge.node"
          class="w-full sm:w-1/2 m-auto"
          v-if="edge.node.unterkategorie === 'Frischgepresstes'"
        />
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Karte {
    gerichte: allGericht (sort: { by: "date", order: ASC }, filter: {kategorie: {eq: "Getränke"}}){
      edges {
        node{
          id
          name
          beschreibung
          preis
          kategorie
          unterkategorie
        }
      }
    }
  }
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import GerichtCard from "~/components/GerichtCard.vue";
import InfoCard from '~/components/InfoCard.vue';

export default {
  components: {
    Layout,
    GerichtCard,
    InfoCard
  }
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid lightgray;
}
</style>
