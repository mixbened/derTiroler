<template>
    <section class="w-full">
      <div class="bg-scroll bg-center bg-cover p-20 sm:p-48 cover-image-background relative text-white" :style="{backgroundImage:`url(${image})`}">
        <div class="text-center relative z-10">
          <h4>{{ subtitle }}</h4>
          <h1 class="text-2xl sm:text-6xl font-bold py-2">{{ title }}</h1>
          <g-link :to="link" class="py-1 border-bottom">{{ buttonText }}</g-link>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "FullBanner",
  props: {
    title: String,
    subtitle: String,
    link: String,
    buttonText: String,
    image: String
  }
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 2px solid white;
}

.cover-image-background::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #0E0E0E, #0c0c0c);
  opacity: .3;
  z-index: 1;
}
</style>
