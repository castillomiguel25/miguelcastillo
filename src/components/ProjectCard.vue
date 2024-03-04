<template>
  <div class="flex flex-col gap-6 py-5">
    <p class="font-bold text-2xl">
      {{ projectName }}
    </p>
    <div
      class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
    > 
      <div class="shrink-0 text-3xl">{{ emoji }}</div>
      <div>
        <div class="flex flex-col items-center gap-y-2 md:flex-row">
          <a
            target="_blank"
            :href="link"
            class="py-1 px-2 bg-gray-800 border border-gray-600 rounded"
          >
            <div class="text-lg font-semibold text-white flex">
              <p class="text-red-600 m-1">
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  ></path>
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  ></path>
                </svg>
              </p>
              <p class="m-1">
                Preview
              </p>
            </div>
          </a>
          <div class="ml-3 flex gap-2">
            <div
              v-for="tech in technologies"
              :key="tech"
              :class="getTechClass(tech)"
            >
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
    technologies: Array,
  },
  methods: {
    getTechClass(tech) {
      return {
        "rounded-md": true,
        "px-2": true,
        "py-2": true,
        "text-xs": true,
        "font-semibold": true,
        "text-white": true,
        "border border-green-600": tech === "Vue.js",
        "border border-red-400": tech === "Tailwind CSS",
        "border border-yellow-600": tech === "JavaScript",
        "border border-blue-400": tech === "CSS",
        "border border-blue-800": tech === "Php",
        "border border-black": tech === "Next.js",
        "border border-purple-600": tech === "Bootstrap",
        "border border-red-600": tech === "Firebase",
      };
    },
  },
};
</script>
