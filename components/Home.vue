<template>
    <div>
      <div class="h-20 w-full bg-white shadow-xl flex items-center justify-between p-5">
      <!-- Logo Section -->
      <div>
        <img
          src="https://preview.colorlib.com/theme/ashion/img/logo.png.webp"
          alt="logo"
          class="h-8"
        />
      </div>
  
      <!-- Mobile Menu Icon (only visible on small screens) -->
      <div
      @click="isSidebaropen = !isSidebaropen"
      class="h-8 w-8 border-2 border-black flex justify-center items-center rounded-md lg:hidden">
        <i class="fa-solid fa-bars"></i>
      </div>
  
      <!-- Nav Menu (hidden on small screens) -->
      <nav class="hidden lg:flex gap-6">
        <ul class="flex gap-4 text-lg font-medium">
          <li v-for="(item, index) in menuItems" :key ="index" class="hover:underline">
              <NuxtLink :to="item.route">{{ item.name }} </NuxtLink>
          </li>
        </ul>
      </nav>
  
      <!-- Placeholder for right-aligned content (only on large screens) -->
      <div class="hidden lg:block">
        <!-- Right section content if needed -->
        <div class="flex items-center justify-evenly gap-3 w-full">
  
          
          <NuxtLink to="/register">
            <div class="relative">
              <button class="bg-gray-500 hover:bg-theme-gray-500 hover:text-white text-black font-medium py-2 px-4 rounded">
                  Register
              </button>
          </div>
          </NuxtLink>
  
          <NuxtLink to="/login">
            <div class="relative">
              <button class="bg-gray-500 hover:bg-theme-gray-500 hover:text-white text-black font-medium py-2 px-4 rounded">
                  Login
              </button>
          </div>
          </NuxtLink>
  
        </div>
      </div>
    </div>
  <!-- mobile slider -->
    <div class="fixed top-0 h-screen w-full bg-black/50 overflow-hidden transition-[0.3s] lg:hidden"
    :class="isSidebaropen ? 'left-0' : '-left-full'"
    ref="model"
    >
      <div class="h-full w-[80%] max-w-[360px] bg-white p-5"
      ref="modelitem"
      >
          <div class="flex justify-between">
              <img
          src="https://preview.colorlib.com/theme/ashion/img/logo.png.webp"
          alt="logo"
          class="h-8"
        />
              <div class="h-10 w-10 rounded-full border border-black flex items-center justify-center"
           @click="isSidebaropen = !isSidebaropen"
          >
              <i class="fa-solid fa-xmark"></i>
          </div>
          </div>
          <div class="mt-5">
              <ul class="text-lg font-medium">
          <li v-for="(item, index) in menuItems" :key ="index" >
              <NuxtLink :to="item.route">{{ item.name }} </NuxtLink>
          </li>
        </ul>
          </div>
          <div class="flex items-center gap-3 mt-10 w-full justify-evenly">
  
            
  
            <NuxtLink to="/register">
            <div class="relative">
              <button class="bg-gray-500 hover:bg-theme-gray-500 hover:text-white text-black font-medium py-2 px-4 rounded">
                  Register
              </button>
          </div>
          </NuxtLink>
  
          <NuxtLink to="/login">
            <div class="relative">
              <button class="bg-gray-500 hover:bg-theme-gray-500 hover:text-white text-black font-medium py-2 px-4 rounded">
                  Login
              </button>
          </div>
          </NuxtLink>
  
  
        </div>
      </div>
    </div>
    </div>
  </template>
  <script>
  export default{
      data() {
          return{
              isSidebaropen: false,
              menuItems: [
                  {
                      name: "Home",
                      route: "/",
                  },
                  {
                      name: "Products",
                      route: "/products",
                  },
                  {
                      name: "Categories",
                      route: "/categories",
                  },
                  {
                      name: "Contact",
                      route: "/contact",
                  },
              ],
          };
      },
      mounted() {
      window.addEventListener("click", (e) => {
          if (this.$refs.model.contains(e.target)) {
              if(this.$refs.modelitem.contains(e.target)){
                  return
              }
              this.isSidebaropen = false;
          }
      });
  },
  };
  </script>
  