<template>
  <Layout>
    <h1>Events</h1>
    {{ $page.event.name }}
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout,
  },
  data() {
    return {
    };
  },
  metaInfo() {
    return {
      title: this.$page.event.name,
    };
  },
};
</script>

<page-query>
query Event ($id: ID!) {
  event: event(id: $id) {
    id
    name
    beschreibung
  }
}
</page-query>

<style scoped>
/* 
"hsl(43, 100%, 49%)", Airtable Yellow
"hsl(197, 100%, 55%)", Airtable Blue
"hsl(345, 70%, 50%)"  Airtable Red 
*/

h1 > span {
  border-bottom: 4px solid hsl(345, 70%, 50%);
  padding-bottom: 4px;
}

h1 {
  margin-bottom: 16px;
}

.underline--blue {
  border-bottom: 4px solid hsl(197, 100%, 55%);
}

.underline--yellow {
  border-bottom: 4px solid hsl(43, 100%, 49%);
}

.date--fun {
  background: hsl(43, 100%, 49%);
  padding: 4px;
  font-weight: bold;
}

.paragraph--whitespace {
  /** This converts the `\n`'s into line breaks when *
  *   pulled from Airtable's Long text fields        */
  white-space: pre-wrap;
}

.attachments {
  display: flex;
  justify-content: space-evenly;
}

.attachment--item {
  padding: 15px;
  display: flex;
  align-items: center;
  width: 30%;
  word-wrap: anywhere;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  justify-content: space-between;
}

.file--button-download {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  padding: 0;
}
</style>
