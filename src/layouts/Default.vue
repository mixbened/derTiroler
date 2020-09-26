<template>
  <div class="layout">
    <header :class="{ 'bg-white': !view.atTopOfPage }" class="fixed w-full flex p-2 lg:px-20 top-0 bg-white z-50 items-center justify-between">
      <div>
        <g-link to="/">
        <g-image 
        alt="Logo derTiroler" 
        src="../assets/logo.jpg"
        class="w-12 sm:w-20 sm:w-20 md:w-20"  
        />
        </g-link>
      </div>
      <nav class="sm:mr-20">
        <div class="flex w-auto">
          <g-link to="/" class="uppercase px-1 py-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 sm:font-semibold text-xs sm:text-lg">Home</g-link>
          <g-link to="/karte" class="uppercase px-1 py-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 sm:font-semibold text-xs sm:text-lg">Aktuelle Karte</g-link>
          <g-link to="/werte" class="uppercase px-1 py-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 sm:font-semibold text-xs sm:text-lg">Unsere Werte</g-link>
          <g-link to="/karte-shop" class="uppercase px-1 py-2 bg-green-700 text-white sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold text-xs sm:text-lg">Shop</g-link>
        </div>
      </nav>
    </header>
    <transition name="fade" appear>
      <main class="mt-24">
        <slot />
      </main>
    </transition>
    <footer>
      <div class="w-full bg-gray-900 text-white p-2 sm:p-8 sm:px-32">
        <h2 class="text-3xl">Cafe derTiroler</h2>
        <div class="grid grid-cols-8 my-4">
          <div class="col-span-8 sm:col-span-2">
            <p class="my-2 font-semibold text-xl">Öffnungszeiten</p>
            <p class="">Mo-Fr 10:30-20:00</p>
            <p class="">Sa-So 10:30-20:00</p>
          </div>
          <div class="col-span-8 sm:col-span-2">
            <p class="my-2 font-semibold text-xl">Adresse</p>
            <p class="">Mo-Fr 10:30-20:00</p>
            <p class="">Sa-So 10:30-20:00</p>
          </div>
          <div class="col-span-8 sm:col-span-2">
            <p class="my-2 font-semibold text-xl">Social</p>
            <p><g-link class="hover:text-gray-600" to="/impressum"><span class="oi" data-glyph="envelope-closed" title="Impressum" aria-hidden="true"></span> Impressum</g-link></p>
            <p><g-link class="hover:text-gray-600" to="https://www.instagram.com/cafetiroler/"><span class="oi" data-glyph="image" title="Instagram" aria-hidden="true"></span> Instagram</g-link></p>
            <p><g-link class="hover:text-gray-600" to="https://www.facebook.com/cafetiroler"><span class="oi" data-glyph="thumb-up" title="thumb up" aria-hidden="true"></span> Facebook</g-link></p>
          </div>
          <div class="col-span-2 sm:col-span-2">
            <g-image 
            alt="Logo derTiroler" 
            src="https://i.ibb.co/TBGMn2n/Screenshot-20200301-191827-Instagram.jpg"
            class=""  
            />          
          </div>
        </div>
        <p class="text-xs">Copyright © Benedikt Mix 2020</p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
        view: {
            atTopOfPage: true
        }
    }
  },

  beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
      handleScroll(){
          // when the user scrolls, check the pageYOffset
          if(window.pageYOffset>0){
              // user is scrolled
              if(this.view.atTopOfPage) this.view.atTopOfPage = false
          }else{
              // user is at top of page
              if(!this.view.atTopOfPage) this.view.atTopOfPage = true
          }
      }
  }
}
</script>

<style>
</style>
