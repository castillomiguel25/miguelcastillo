<template>
  <div>
    <house-portal />
    <projects-portal />
    <skills-portyal />
    <forms-portal />
    <footers-portal />
  </div>
</template>

<script>
import HousePortal from "@/components/HousePortal.vue"
import ProjectsPortal from "@/components/ProjectsPortal.vue";
import SkillsPortyal from '@/components/SkillsPortyal.vue';
import FormsPortal from "@/components/FormsPortal.vue";
import FootersPortal from "@/components/FootersPortal";

export default {
  name: "HomeView",
  components: {
    HousePortal,
    FootersPortal,
    ProjectsPortal,
    SkillsPortyal,
    FormsPortal
  },
};
</script>
