<template>
  <!-- This is the Events list Page-->
  <Layout>
    <section>
      <div class="text-center m-2 px-2">
        <h2 class="text-5xl font-bold">Mittagessen</h2>
        <p class="text-xl">Neben unseren Klassikern, haben wir jede Woche ein wechselndes Angebot. Sprich uns einfach an!</p>
      </div>
    </section>
    <section class="m-2 sm:mx-20 my-12">
      <div v-for="(edge) in $page.gerichte.edges" :key="edge.node.id">
        <GerichtCard
          :gericht="edge.node"
          class="w-full sm:w-1/2 m-auto"
        />
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Karte {
    gerichte: allGericht (sort: { by: "date", order: ASC }, filter: {kategorie: {eq: "Mittagessen"}}){
      edges {
        node{
          id
          name
          beschreibung
          preis
          kategorie
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
  },
  data() {
    return {
    };
  },
};
</script>
