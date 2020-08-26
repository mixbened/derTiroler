<template>
  <div class="layout">
    <header class="flex p-4 md:px-20  items-center justify-between">
      <div>
        <g-image 
        alt="Logo derTiroler" 
        src="../assets/logo.png"
        class="w-12 sm:w-20 sm:w-32 m:w-40"  
        />
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
    <footer class="flex p-4 px-8 items-center justify-center">
        <div>
          <g-image 
          alt="Logo derTiroler" 
          src="../assets/logo.png"
          class="w-20 m-auto"  
          />
          <div class="text-center">
            <p class="text-xs">Text | text | text | text</p>
            <p class="text-lg">Text | text | text | text</p>
          </div>
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
