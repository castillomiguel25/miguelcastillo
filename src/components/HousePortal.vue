<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <h3 class="text-blue-400 text-2xl font-bold">{{ $t('message.greeting') }}👋</h3>
    <h1 class="text-4xl font-bold">Miguel Angel Castillo Colmenares</h1>
    <span class="ml-3 text-5xl text-red-600 font-bold">Frontend Developer</span>
    <p class="text-2xl mb-5 mt-3">
      {{ $t('message.presentation') }}
    </p>
    <div class="flex gap-1">
      <a class="h-12 w-12 hover:translate-y-1" target="_blank" href="https://www.linkedin.com/in/miguel-angel-castillo-colmenares/"
        ><img class="h-12 w-12" src="../assets/linkedin-icon.png" alt="linkedin-icons"
      /></a>
      <a class="h-12 w-12 hover:translate-y-1" target="_blank" href="https://github.com/castillomiguel25/"
        ><img class="h-12 w-12" src="../assets/github.png" alt="github-icons"
      /></a>
      <a class="h-12 w-12 hover:translate-y-1" target="_blank" href="https://www.facebook.com/miguelangel.castillocolmenares.54"
        ><img class="h-12 w-12" src="../assets/facebook-icon.png" alt="facebook-icons"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HousePortal",
};
</script>
