<template>
  <section class="text-center m-auto sm:w-3/4 w-4/5 my-8">
   <h3 class="text-4xl font-bold text-blue-800">{{ title }}</h3>
   <h5 class="text-xl mb-8">{{ subtitle }}</h5>
   <p class="px-4">
     {{ text }}
   </p>
  </section>
</template>

<script>
export default {
  name: "TextCard",
  props: {
    title: String,
    text: String,
    subtitle: String,
  }
};
</script>

<style scoped>
</style>
