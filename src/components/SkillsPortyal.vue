<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <p class="text-2xl mb-5">
      Habilidades <span class="text-red-400">Demostrable</span>
    </p>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div v-for="skill in skills" :key="skill.id">
        <a class="hover:translate-y-1" :href="skill.link">
          <div class="overflow-hidden rounded-md bg-slate-800">
            <div class="aspect-w-3 aspect-h-2">
              <img :src="skill.image" :alt="skill.alt" class="h-40 w-54 object-cover object-center mx-auto">
            </div>
            <div class="px-3 pt-4 pb-6 text-center">
              <h2 class="text-xl font-semibold text-gray-400">{{ skill.title }}</h2>
              <div class="mt-1 text-xs text-gray-400">{{ skill.date }}</div>
              <p class="mt-2 text-sm text-gray-400 items-center">{{ skill.description }}</p>
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
          link: '#',
          image: require('./img/javascript-1.svg'),
          alt: 'JavaScript-icono-svg',
          title: 'Javascript',
          date: 'Julio 2020',
        },
        {
          id: 2,
          link: '#',
          image: require('./img/react-2.svg'),
          alt: 'React-icono-svg',
          title: 'REACT.JS',
          date: 'Junio 2021',
        },
        {
          id: 3,
          link: '#',
          image: require('./img/vue-9.svg'),
          alt: 'Vue-icono-svg',
          title: 'VUE.JS',
          date: 'Marzo 2021',
        },
        {
          id: 4,
          link: '#',
          image: require('./img/nuxt.svg'),
          alt: 'nuxt-icono-svg',
          title: 'Nuxt.js',
          date: 'Enero 2022',
        },
        {
          id: 5,
          link: '#',
          image: require('./img/nextjs.webp'),
          alt: 'nextjs-icono-webp',
          title: 'Nextjs',
          date: 'Marzo 2022',
        },
        {
          id: 6,
          link: '#',
          image: require('./img/firebase..svg'),
          alt: 'firebase-icono-svg',
          title: 'Firebase',
          date: 'Enero 2022',
        },
        {
          id: 7,
          link: '#',
          image: require('./img/mongodb-icon-1.svg'),
          alt: 'mongodb-icon-svg',
          title: 'Mongodb',
          date: 'Enero 2021',
        },
        {
          id: 8,
          link: '#',
          image: require('./img/git-icon.svg'),
          alt: 'git-icon-svg',
          title: 'Git',
          date: 'Enero 2021',
        },
        {
          id: 9,
          link: '#',
          image: require('./img/wordpress-icon.svg'),
          alt: 'wordpress-icon-svg',
          title: 'Wordpress',
          date: 'Enero 2020',
        },
      ]
    };
  }
};
</script>
