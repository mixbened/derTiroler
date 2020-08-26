<template>
  <!-- This is the Events list Page-->
  <Layout>
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
    <div>
      <div v-for="(edge, index) in $page.events.edges" :key="edge.node.id">
        <EventCard
          :event="edge.node"
          :color="hrColors[index % hrColors.length]"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Karte {
    gericht: allGericht (sort: { by: "date", order: ASC }){
      edges {
        node{
          id
          name
          beschreibung
          preis
        }
      }
    }
  }
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import EventCard from "~/components/EventCard.vue";
import InfoCard from '~/components/InfoCard.vue';

export default {
  components: {
    Layout,
    EventCard,
    InfoCard
  },
  data() {
    return {
      hrColors: [
        "#FCB400", // Airtable Yellow
        "#18BFFF", // Airtable Blue
        "#D92654", // Airtable Red
      ],
    };
  },
};
</script>
