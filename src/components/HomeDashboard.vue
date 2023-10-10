<template>
  <div class="home-dashboard">
    <!-- <div class="h-screen pt-10 sm:pt-0 pb-10 bg-gradient-to-b from-[#223d32] to-[#ffffff]">  -->
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
      <div class="flex flex-col bg-white px-12 bg-gradient-to-t from-[#223d32] to-[#ffffff] py-10">
        <div class="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6">
          <p class="text-[35px] lg:text-[40px] xl:text-[50px] font-bold leading-tight mt-5 sm:mt-0 ">
            My Projects 
          </p>
          <div class="flex-none overflow-x-auto">
            <div class="flex p-10">
              <div class="w-80 mx-8">
                <img src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg" alt="Featured Image 1" class="rounded-t-xl"/>
                <div class="px-9 pt-10 pb-14 bg-yellow-500 rounded-b-lg">
                  <div class="text-white space-y-4">
                    <h3 class="text-xl font-bold lead-xl bold">Card Title</h3>
                    <div class="text-lg font-light">Card subtitle with a long long long long long long text</div>
                  </div>
                  <div class="flex justify-between pt-8">
                    <ul class="flex flex-col gap-y-2.5">
                      <li class="flex space-x-3 text-white">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                          <span class="paragraph-l font-bold">Item 1</span>
                      </li>
                          <li class="flex space-x-3 text-white">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                          <span class="paragraph-l font-bold">Item 1</span>
                      </li>
                          <li class="flex space-x-3 text-white">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                          <span class="paragraph-l font-bold">Item 1</span>
                      </li>
                    </ul>
                    <div class="flex flex-col justify-end">
                        <a href="#" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Learn More</a>
                    </div>
                  </div>
                </div> 
              </div>
              <div class="w-80 mx-8">
                <img src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg" alt="Featured Image 1" class="rounded-t-xl"/>
                <div class="px-9 pt-10 pb-14 bg-yellow-500 rounded-b-lg">
                  <div class="text-white space-y-4">
                    <h3 class="text-xl font-bold lead-xl bold">Card Title</h3>
                    <div class="text-lg font-light">Card subtitle with a long long long long long long text</div>
                  </div>
                  <div class="flex justify-between pt-8">
                    <ul class="flex flex-col gap-y-2.5">
                      <li class="flex space-x-3 text-white">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                          <span class="paragraph-l font-bold">Item 1</span>
                      </li>
                          <li class="flex space-x-3 text-white">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                          <span class="paragraph-l font-bold">Item 1</span>
                      </li>
                          <li class="flex space-x-3 text-white">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                          <span class="paragraph-l font-bold">Item 1</span>
                      </li>
                    </ul>
                    <div class="flex flex-col justify-end">
                        <a href="#" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Learn More</a>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.home-dashboard {
  margin: 0 auto;
}
</style>
