<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <p class="text-2xl mb-5">
      {{ $t("message.project") }}
      <span class="text-red-400">{{ $t("message.Recientes") }}</span>
    </p>
    <div class="flex flex-col gap-6 py-5">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div class="shrink-0 text-3xl text-3xl">💎</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              target="_blank"
              class="hover:text-cyan-400"
              href="https://tuexchangecrypto.netlify.app/"
            >
              <div
                class="text-xl text-gray-400 font-semibold text-gray-400 flex"
              >
                <p class="text-blue-300 mr-5">⛓️ {{ $t("message.Visitar") }}</p>
                Exchange
              </div></a
            >
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-green-400 text-white"
              >
                Vue.JS
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-red-300 text-fuchsia-900"
              >
                TAILWIND.CSS
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            Exchange : {{ $t("message.Exchange") }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 py-5">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div class="shrink-0 text-3xl">💎</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              target="_blank"
              class="hover:text-cyan-400"
              href="https://managemoneycash.netlify.app/"
            >
              <div class="text-xl font-semibold text-gray-400 flex">
                <p class="text-blue-300 mr-5">⛓️ {{ $t("message.Visitar") }}</p>
                ManageMoney
              </div></a
            >
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-green-400 text-white"
              >
                VUE.JS
              </div>

              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-red-600 text-white"
              >
                FIREBASE
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-blue-600 text-white"
              >
                CSS
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            ManageMoney: {{ $t("message.Manage") }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 py-5">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div class="shrink-0 text-3xl">💎</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              target="_blank"
              class="hover:text-cyan-400"
              href="https://castillomiguel25.github.io/api-rest-javascript-movie/"
            >
              <div class="text-xl font-semibold text-gray-400 flex">
                <p class="text-blue-300 mr-5">⛓️ {{ $t("message.Visitar") }}</p>
                TheMovie
              </div></a
            >
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-white"
              >
                JAVASCRIPT
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-blue-400 text-white"
              >
                CSS
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">TheMovie: {{ $t("message.movie") }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 py-5">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div class="shrink-0 text-3xl">💎</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              target="_blank"
              class="hover:text-cyan-400"
              href="https://serviciosdigitales.netlify.app/"
            >
              <div class="text-xl font-semibold text-gray-400 flex">
                <p class="text-blue-300 mr-5">⛓️ {{ $t("message.Visitar") }}</p>
                Servicios Digitales
              </div></a
            >
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-white"
              >
                JAVASCRIPT
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-blue-400 text-white"
              >
                CSS
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-red-300 text-fuchsia-900"
              >
                TAILWIND
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            TheMovie: {{ $t("message.services") }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 py-5">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div class="shrink-0 text-3xl">💎</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              target="_blank"
              class="hover:text-cyan-400"
              href="https://www.cerrajerosre.com/"
            >
              <div class="text-xl font-semibold text-gray-400 flex">
                <p class="text-blue-300 mr-5">⛓️ {{ $t("message.Visitar") }}</p>
                Cerrajeros R&E
              </div></a
            >
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-white"
              >
                JAVASCRIPT
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-blue-400 text-white"
              >
                CSS
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-purple-600 text-white"
              >
                bootstrap
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            {{ $t("message.web") }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 py-5">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div class="shrink-0 text-3xl">💎</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a target="_blank" class="hover:text-cyan-400" href="#">
              <div class="text-xl font-semibold text-gray-400 flex">
                <p class="text-blue-300 mr-5">⛓️ {{ $t("message.Visitar") }}</p>
                CodeMaster
              </div></a
            >
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-black text-white"
              >
                Next.js
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-red-400 text-white"
              >
                Tailwind
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-red-600 text-white"
              >
                Firebase
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            {{ $t("message.CodeMaster") }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 py-5">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div class="shrink-0 text-3xl">💎</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              target="_blank"
              class="hover:text-cyan-400"
              href="https://genera-tu-codigo-qr.netlify.app/"
            >
              <div class="text-xl font-semibold text-gray-400">
                <p class="text-blue-300 mr-5">⛓️ {{ $t("message.Visitar") }}</p>
                Generador de codigo QR
              </div></a
            >
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-red-400 text-white"
              >
                Tailwind
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-600 text-white"
              >
                Javascript
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            {{ $t("message.QR") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
