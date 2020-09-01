<template>
  <!-- This is the Events list Page-->
  <Layout>
    <section class="sm:m-20 m-8">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1">
          <g-link to="/karte-getraenke">
            <div class="text-center p-2 sm:p-8 hover:bg-orange-300 cursor-pointer text-white hover:shadow" style="background: rgb(204, 136, 136)">
              <h2 class="sm:text-2xl font-semibold">Getränke</h2>
            </div>
          </g-link>
        </div>
        <div class="col-span-1">
          <g-link to="/karte-mittagessen">
            <div class="text-center p-2 sm:p-8 hover:bg-green-300 cursor-pointer text-white hover:shadow" style="background: rgb(184, 203, 177)">
              <h2 class="sm:text-2xl font-semibold">Speisen</h2>
            </div>
          </g-link>
        </div>
        <div class="col-span-1">
          <g-link to="/karte-snacks">
            <div class="text-center p-2 sm:p-8 hover:bg-blue-300 cursor-pointer text-white hover:shadow" style="background: rgb(247, 225, 167)">
              <h2 class="sm:text-2xl font-semibold">Süßes</h2>
            </div>
          </g-link>
        </div>
      </div>
    </section>
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
import InfoCard from '~/components/InfoCard.vue';

export default {
  components: {
    Layout,
    InfoCard
  }
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,.1), 0 0.33rem 1rem rgba(0,0,0,.15);
}
h2 {
    font-family: Helvetica ;
}
</style>
