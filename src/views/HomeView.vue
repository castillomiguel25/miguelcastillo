<template>
  <div>
    <house-portal />
    <projects-portal />
    <skills-portyal />
    <footers-portal />
  </div>
</template>

<script>
import HousePortal from "@/components/HousePortal.vue"
import ProjectsPortal from "@/components/ProjectsPortal.vue";
import FootersPortal from "@/components/FootersPortal";
import SkillsPortyal from '@/components/SkillsPortyal.vue';

export default {
  name: "HomeView",
  components: {
    HousePortal,
    FootersPortal,
    ProjectsPortal,
    SkillsPortyal
  },
};
</script>
