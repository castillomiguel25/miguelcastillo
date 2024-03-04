<template>
    <div class="flex flex-col gap-6 py-5">
      <div class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <div class="shrink-0 text-3xl">{{ emoji }}</div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a target="_blank" :href="link" class="py-1 px-2 bg-gray-800 border border-gray-600 rounded">
              <div class="text-lg font-semibold text-white flex">
                <p class="text-red-600 mx-2">{{ $t("message.Visitar") }}</p>
                {{ projectName }}
              </div>
            </a>
            <div class="ml-3 flex gap-2">
              <div v-for="tech in technologies" :key="tech" :class="getTechClass(tech)">
                {{ tech }}
              </div>
            </div>
          </div>
          <p class="mt-3 text-white">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      emoji: String,
      projectName: String,
      link: String,
      description: String,
      technologies: Array
    },
    methods: {
      getTechClass(tech) {
        return {
          'rounded-md': true,
          'px-2': true,
          'py-2': true,
          'text-xs': true,
          'font-semibold': true,
          'text-white': true,
          'border border-green-600': tech === 'Vue.js',
          'border border-red-400': tech === 'Tailwind CSS',
          'border border-yellow-600': tech === 'JavaScript',
          'border border-blue-400': tech === 'CSS',
          'border border-blue-800': tech === 'Php',
          'border border-black': tech === 'Next.js',
          'border border-purple-600': tech === 'Bootstrap',
          'border border-red-600': tech === 'Firebase'
        };
      }
    }
  };
  </script>
  