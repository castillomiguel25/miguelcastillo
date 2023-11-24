<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <p class="text-2xl mb-5">
      {{ $t("message.skills")
      }}<span class="text-red-400"> {{ $t("message.Demonstrable") }}</span>
    </p>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div v-for="skill in skills" :key="skill.id">
        <a class="hover:translate-y-1" :href="skill.link">
          <div class="overflow-hidden rounded-md bg-slate-800">
            <div class="">
              <img
                :src="skill.image"
                :alt="skill.alt"
                class="h-12 w-12 mt-3 object-center mx-auto"
              />
            </div>
            <div class="px-3 pt-4 pb-6 text-center">
              <h2 class="text-xl font-semibold text-gray-400">
                {{ skill.title }}
              </h2>
              <div class="mt-1 text-xs text-gray-400">{{ skill.date }}</div>
              <p class="mt-2 text-sm text-gray-400 items-center">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          link: "#",
          image: require("./img/javascript-1.svg"),
          alt: "JavaScript-icono-svg",
          title: "Javascript",
          date: "",
        },
        {
          id: 2,
          link: "#",
          image: require("./img/react-2.svg"),
          alt: "React-icono-svg",
          title: "React.js",
          date: "",
        },
        {
          id: 3,
          link: "#",
          image: require("./img/vue-9.svg"),
          alt: "Vue-icono-svg",
          title: "Vue.js",
          date: "",
        },
        {
          id: 4,
          link: "#",
          image: require("./img/nuxt.svg"),
          alt: "nuxt-icono-svg",
          title: "Nuxt.js",
          date: "",
        },
        {
          id: 5,
          link: "#",
          image: require("./img/nextjs.webp"),
          alt: "nextjs-icono-webp",
          title: "Next.js",
          date: "",
        },
        {
          id: 6,
          link: "#",
          image: require("./img/firebase..svg"),
          alt: "firebase-icono-svg",
          title: "Firebase",
          date: "",
        },
        {
          id: 7,
          link: "#",
          image: require("./img/mongodb-icon-1.svg"),
          alt: "mongodb-icon-svg",
          title: "Mongodb",
          date: "",
        },
        {
          id: 8,
          link: "#",
          image: require("./img/git-icon.svg"),
          alt: "git-icon-svg",
          title: "Git",
          date: "",
        },
        {
          id: 9,
          link: "#",
          image: require("./img/wordpress-icon.svg"),
          alt: "wordpress-icon-svg",
          title: "Wordpress",
          date: "",
        },
      ],
    };
  },
  mounted() {
    this.translateSkills();
  },
  watch: {
    '$i18n.locale': function () {
      this.translateSkills(); // Call translation method when the language changes
    },
  },
  methods: {
    translateSkills() {
      this.skills.forEach((skill) => {
        if (skill.title === "Javascript") {
          skill.date = this.$t("message.July") + " 2020";
        } else if (skill.title === "Wordpress") {
          skill.date = this.$t("message.January") + " 2020";
        } else if (skill.title === "Git" || skill.title === "Mongodb") {
          skill.date = this.$t("message.January") + " 2021";
        } else if (skill.title === "Nuxt.js" || skill.title === "Firebase") {
          skill.date = this.$t("message.January") + " 2022";
        } else if (skill.title === "Vue.js") {
          skill.date = this.$t("message.March") + " 2021";
        } else if (skill.title === "React.js") {
          skill.date = this.$t("message.June") + " 2021";
        } 
        else if (skill.title === "Next.js") {
          skill.date = this.$t("message.March") + " 2022";
        }
      });
    },
  },
};
</script>
