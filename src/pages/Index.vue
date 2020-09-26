<template>
  <Layout>
    <section class="relative">
        <video autoplay muted loop id="myVideo" class="w-full">
          <source src="https://res.cloudinary.com/mixbened/video/upload/v1600954451/tiroler/0b517b8ed16c44c9accf5fd5b2189a98.mov" type="video/mp4">
        </video>
        <div class="overlay flex items-center justify-center z-10">
          <div>
            <h3 class="z-50 text-white italic" style="font-family: 'Lobster'">Köln Ehrenfeld</h3>
            <h2 class="z-50 text-white text-5xl font-bold border-title">Der Tiroler</h2>
          </div>
        </div>
    </section>
    <section class="mt-20">
      <div class="px-4 sm:px-20 md:px-32 lg:px-64">
        <h5 class="italic" style="font-family: 'Lobster'">DerTiroler</h5>
        <h2 class="text-3xl font-semibold">Ein Stück Tirol mitten in Ehrenfeld</h2>
        <p>Alle Produkte beim "Tiroler" kommen aus Tirol und der Kölner Region. Von mir mit viel Mühe und Liebe ausgewählte Kleinbetriebe oder selbst gemacht.</p>
      </div>
    </section>
    <section class="mt-20">
      <div class="w-full p-12 px-4 sm:px-20 md:px-32 lg:px-64">
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-cover shadow rounded bg-center w-full h-64" style="background-image: url('https://i.ibb.co/vqgCtzJ/IMG-20200603-082709-701.jpg')"></div>
          <div class="bg-cover shadow rounded bg-center w-full h-64" style="background-image: url('https://i.ibb.co/p4cdDCk/Screenshot-20200511-194201-Instagram.jpg')"></div>
          <div class="bg-cover shadow rounded bg-center w-full h-full" style="background-image: url('https://i.ibb.co/h1sCqjP/Screenshot-20200512-152231-Instagram.jpg')"></div>
          <div class="bg-cover shadow rounded bg-center w-full h-64" style="background-image: url('https://i.ibb.co/J2HCD0q/Screenshot-20200624-094253-Chrome.jpg')"></div>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <div class="px-4 sm:px-20 md:px-32 lg:px-64">
        <div class="w-full sm:w-2/3">
          <h2 class="text-3xl font-semibold">Wohlfühlen & Genießen</h2>
          <p>Im Café Tiroler bieten wir neben spitzen Kaffee auch ein breites Angebot an herzhaften und süßen Speisen. Schaut auf unserer Karte vorbei oder kommt mit einem besonderen Wunsch auf uns zu.</p>
          <button class="my-4 bg-green-700  hover:bg-gray-800 text-white font-bold py-2 px-4 text-sm">Zur Karte</button>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <InfoCard title="Hallo Zusammen" text="Ich bin Marcel und waschechter tiroler..." button="Unsere Werte" position="left" image="https://i.ibb.co/ww24N95/IMG-20200410-122726-827.jpg" background="#F9F4EE" height="600px"/>
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


.banner-height {
  height: 500px;
}
#myvideo {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
}
.overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0,0.3);
  text-align: center;
}
.border-title {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}
</style>
