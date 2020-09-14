<template>
  <div class="layout">
    <header class="flex p-4 sm:px-20  items-center justify-between">
      <div>
        <g-link to="/">
        <g-image 
        alt="Logo derTiroler" 
        src="../assets/logo.jpg"
        class="w-12 sm:w-20 sm:w-32 m:w-40"  
        />
        </g-link>
      </div>
      <nav class="sm:mr-20">
        <div class="flex w-auto">
          <g-link to="/" class="uppercase p-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold text-xs sm:text-lg">Home</g-link>
          <g-link to="/karte" class="uppercase p-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold text-xs sm:text-lg">Aktuelle Karte</g-link>
          <g-link to="/werte" class="uppercase p-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold text-xs sm:text-lg">Unsere Werte</g-link>
        </div>
      </nav>
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer>
      <div class="w-full bg-gray-900 text-white p-2 sm:p-8 sm:px-32">
        <h2 class="text-3xl">Cafe derTiroler</h2>
        <div class="grid grid-cols-8 my-4">
          <div class="col-span-2">
            <p class="my-2 font-semibold text-xl">Öffnungszeiten</p>
            <p class="">Mo-Fr 10:30-20:00</p>
            <p class="">Sa-So 10:30-20:00</p>
          </div>
          <div class="col-span-2">
            <p class="my-2 font-semibold text-xl">Adresse</p>
            <p class="">Mo-Fr 10:30-20:00</p>
            <p class="">Sa-So 10:30-20:00</p>
          </div>
          <div class="col-span-2">
            <p class="my-2 font-semibold text-xl">Social</p>
            <p><g-link class="hover:text-gray-600" to="/impressum">Impressum</g-link></p>
            <p><g-link class="hover:text-gray-600" to="https://www.instagram.com/cafetiroler/">Instagram</g-link></p>
            <p><g-link class="hover:text-gray-600" to="https://www.facebook.com/cafetiroler">Facebook</g-link></p>
          </div>
          <div class="col-span-2">
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

<style>
</style>
