<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <p class="text-3xl mb-5 font-bold">
      {{ $t("message.project") }}
      <span class="text-red-600">{{ $t("message.Recientes") }}</span>
    </p>
    <ProjectCard
      v-for="project in projects"
      :key="project.link"
      :emoji="project.emoji"
      :project-name="$t(project.projectName)"
      :link="project.link"
      :description="$t(project.description)"
      :technologies="project.technologies"
    />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          emoji: '💎',
          projectName: 'Exchange',
          link: 'https://tuexchangecrypto.netlify.app/',
          description: 'message.Exchange',
          technologies: ['Vue.js', 'Tailwind CSS']
        },
        {
          emoji: '💎',
          projectName: 'Tu Dolar',
          link: 'https://cambiatudolar.netlify.app/',
          description: 'message.dolar',
          technologies: ['Vue.js', 'Tailwind CSS']
        },
        {
          emoji: '💎',
          projectName: 'Manage Money',
          link: 'https://managemoneycash.netlify.app/',
          description: 'message.Manage',
          technologies: ['Vue.js', 'Tailwind CSS', 'Firebase']
        },
        {
          emoji: '💎',
          projectName: 'The Movie',
          link: 'https://castillomiguel25.github.io/api-rest-javascript-movie/',
          description: 'message.movie',
          technologies: ['JavaScript', 'CSS']
        },
        {
          emoji: '💎',
          projectName: 'Servicios Digitales',
          link: 'https://serviciosdigitales.netlify.app/',
          description: 'message.services',
          technologies: ['JavaScript', 'CSS', 'Tailwind CSS']
        },
        {
          emoji: '💎',
          projectName: 'Cerrajeros R&E',
          link: 'https://www.cerrajerosre.com/',
          description: 'message.web',
          technologies: ['JavaScript', 'CSS', 'Bootstrap']
        },
        {
          emoji: '💎',
          projectName: 'CodeMaster',
          link: '#',
          description: 'message.CodeMaster',
          technologies: ['Next.js', 'Tailwind CSS', 'Firebase']
        },
        {
          emoji: '💎',
          projectName: 'Generador de Código QR',
          link: 'https://genera-tu-codigo-qr.netlify.app/',
          description: 'message.QR',
          technologies: ['JavaScript', 'Tailwind CSS']
        },
        {
          emoji: '💎',
          projectName: 'L2 Latino América',
          link: 'https://l2latinoamerica.com/',
          description: 'message.checkout',
          technologies: ['JavaScript', 'Php', 'CSS', 'Tailwind CSS']
        }, 
        {
          emoji: '💎',
          projectName: 'Juego Arkanoid',
          link: 'https://juego-arkanoid.netlify.app/',
          description: 'message.Arkanoid',
          technologies: ['JavaScript','CSS']
        }, 
        {
          emoji: '💎',
          projectName: 'Juego Zodiaco',
          link: 'https://castillomiguel25.github.io/taller-practico-de-javascript-video-juegos/',
          description: 'message.Zodiaco',
          technologies: ['JavaScript','CSS']
        }, 
      ]
    };
  }
};
</script>
