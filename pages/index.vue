<template>
    <Navbar />
    <!-- Category Section -->
     <section>
        <div class="w-full min-h-screen grid lg:grid-cols-2 gap-4">
            <div class="h-[300px] lg:h-full w-full bg-[#fae3d9] flex flex-col justify-center p-5">
                <h1 class="text-2xl mb-3 font-bold">Womens's Fashion</h1>
                <p class="text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti obcaecati earum quisquam odit magnam aliquam nihil corrupti natus ex.</p>
                <span class="font-medium underline underline-offset-8 decoration-2 decoration-red-500">Shop Now</span>
            </div>
            <div class="grid sm:grid-cols-2 h-full w-full gap-4">
                <div class="h-[300px] lg:h-full w-full bg-[#bee2d6] flex flex-col justify-center p-5">
                    <h1 class="text-2xl mb-3 font-bold">Mens's Fashion</h1>
                <p class="text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti obcaecati earum quisquam odit magnam aliquam nihil corrupti natus ex.</p>
                <span class="font-medium underline underline-offset-8 decoration-2 decoration-red-500">Shop Now</span>
                </div>
                <div class="h-[300px] lg:h-full w-full bg-[#d63df0] flex flex-col justify-center p-5">
                    <h1 class="text-2xl mb-3 font-bold">Kids's Fashion</h1>
                <p class="text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti obcaecati earum quisquam odit magnam aliquam nihil corrupti natus ex.</p>
                <span class="font-medium underline underline-offset-8 decoration-2 decoration-red-500">Shop Now</span>    
            </div>
                <div class="h-[300px] lg:h-full w-full bg-[#fedbe4] flex flex-col justify-center p-5">
                    <h1 class="text-2xl mb-3 font-bold">Cosmetics's Fashion</h1>
                    <p class="text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti obcaecati earum quisquam odit magnam aliquam nihil corrupti natus ex.</p>
                    <span class="font-medium underline underline-offset-8 decoration-2 decoration-red-500">Shop Now</span>
                </div>
                <div class="h-[300px] lg:h-full w-full bg-[#cee2f5] flex flex-col justify-center p-5">
                    <h1 class="text-2xl mb-3 font-bold">Kids's Fashion</h1>
                <p class="text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti obcaecati earum quisquam odit magnam aliquam nihil corrupti natus ex.</p>
                <span class="font-medium underline underline-offset-8 decoration-2 decoration-red-500">Shop Now</span>
                </div>
            </div>
        </div>
     </section>
    <!-- Category Section -->

     <!-- Product list -->
      <section class="my-20">
        <div class="px-5  mx-auto max-w-7xl">
            <div class="md:flex items-center justify-between mb-5">
                    <h1 class="text-2xl font-bold">New products</h1>
                    <ul class="flex items-center text-lg gap-3 flex-wrap">
                        <li class="underline underline-offset-8 decoration-2 decoration-red-500">Womens</li>
                        <li>Mens</li>
                        <li>kids</li>
                        <li>cosmetics</li>
                        <li>Accesories</li>
                    </ul>
                </div>
            <div class="bg-white">
  <div class=" px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products</h2>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a v-for="n in 10" :key="n" href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
      

      <!-- More products... -->
    </div>
  </div>
</div>
        </div>
      </section>
     <!-- Product list -->
</template>