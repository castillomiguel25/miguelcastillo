<template>
  <div>
  
    <house-portal  />
    <home-portal  />
    <pogress-portal  />
    <projecto-portal  />

    <footers-portal />
  </div>
</template>

<script>
import HousePortal from "@/components/HousePortal";
import HomePortal from "@/components/HomePortal";
import PogressPortal from "@/components/PogressPortal";
import ProjectoPortal from "@/components/ProjectoPortal";

import FootersPortal from "@/components/FootersPortal";

export default {


  
  name: "HomeView",
  components: {
    HousePortal,
    HomePortal,
    PogressPortal,
    ProjectoPortal,
    FootersPortal,
   
  },
};
</script>
