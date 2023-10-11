<template>
  <div class="home-dashboard">
    <div class="h-screen pt-10 sm:pt-0 pb-10"> 
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 p-20 h-full">
      <div
            class="content"
          >
          <div class="flex items-center gap-3">
            <hr class="w-10 border  "/>
            <span class="md:text-[18px] font-medium text-gray-800 ">
              FullStack Developer 
            </span>
          </div>
          <p class="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
            I'm Azriel Risywan <br />
            FullStack Developer 
          </p>
          <p class="mt-5 md:text-md ">
            I am a dedicated FullStack Developer located in Bandung, Indonesia. My passion for coding drives me to deliver exceptional work. I am committed to ensuring your satisfaction, as your success is my ultimate goal.
          </p>
          <div class="flex gap-4 mt-10">
          <button class="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-[#5f9ea0] to-[#a9ddd6] hover:from-[#5f9ea0] to-[#a9ddd6]  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
            Get In Touch
            <span class="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-[#5a7f6b] to-[#e0e7d9]"></span>
          </button>
          </div>
        </div>
        <div class="relative sm:mt-0 mt-10 px-20 sm:px-20 flex justify-center items-center">
          <img 
            class="w-[300px] sm:w-[350px] rounded-full animate__animated animate__fadeInRight animate__delay-.5s" 
            src="https://media.licdn.com/dms/image/D4E03AQFWjqIQnG15UA/profile-displayphoto-shrink_800_800/0/1666077054430?e=1702512000&v=beta&t=SjQdX4NVMvGRTTtXaXN6gDNBlJLNhBFb8d7yv9M2NXA" 
            alt="" 
          />
        </div>
      </div>
      <!-- project list -->
      <div class="container mx-auto items-center md:gap-20 p-20 h-full">
        <div class="flex justify-center mb-4">
          <p class="text-center text-[20px] lg:text-[25px] xl:text-[35px] font-bold leading-tight mt-5 sm:mt-0">
            Projects 
          </p>
        </div>
        <div :class="cardStyle(projects.length)">
          <!-- card-start -->
          <div
            class="max-w-[400px] w-[400px] md:max-w-[450px] md:w-[450px] lg:max-w-[500px] lg:w-[500px] flex-none p-10"
            v-for="(project, index) in projects"
            :key="index"
          >
            <router-link :to="project.link">
              <img src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg" alt="Featured Image 1" class="rounded-xl object-cover w-full h-40 md:h-48 lg:h-56"/>
              <h4 class="text-xl leading-tight pt-4">{{ project.name }}</h4>
            </router-link>
          </div>
          <!-- card-end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const projects = ref([{
  name: "YuuBaca",
  link: "/yuubaca"
}, {
  name: "Portal Istana",
  link: "/portal-istana"
}]);

const scrollLeft = () => {
  const container = document.querySelector(".overflow-x-auto");
  container.scrollBy({
    left: -container.offsetWidth,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  const container = document.querySelector(".overflow-x-auto");
  container.scrollBy({
    left: container.offsetWidth,
    behavior: "smooth",
  });
};

const cardStyle = (projectsLength) => {
  return "flex flex-nowrap overflow-x-auto gap-4 " + (projectsLength > 2 ? "" : "justify-center");
}

export default {
  name: "HomeDashboard",
  setup() {
    return { projects, scrollLeft, scrollRight, cardStyle };
  },
};


</script>

<style scoped>
.home-dashboard {
  margin: 0 auto;
}
</style>
