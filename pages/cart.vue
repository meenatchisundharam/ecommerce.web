<template>
    <div>
      <Navbar />
      <div class="flex">
        <!-- Wishlist Section -->
        <div class="max-w-5xl mx-auto p-4 w-full md:w-2/3">
          <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
          <div class="space-y-4">
            <!-- Wishlist Item 1 -->
            <div class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <img class="w-24 h-24 md:w-32 md:h-32 object-cover" src="https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg" alt="Artwork Tee">
              <div class="flex-grow md:px-4 text-center md:text-left">
                <h3 class="text-lg font-semibold">Artwork Tee</h3>
                <p class="text-gray-600">$32.00</p>
                <p class="text-gray-500">Mint</p>
                <p class="text-gray-500">Medium</p>
              </div>
              <button class="text-blue-600 hover:underline mt-4 md:mt-0">Remove</button>
            </div>
  
            <!-- Wishlist Item 2 -->
            <div class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <img class="w-24 h-24 md:w-32 md:h-32 object-cover" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg" alt="Basic Tee">
              <div class="flex-grow md:px-4 text-center md:text-left">
                <h3 class="text-lg font-semibold">Basic Tee</h3>
                <p class="text-gray-600">$32.00</p>
                <p class="text-gray-500">Charcoal</p>
                <p class="text-gray-500">Large</p>
              </div>
              <button class="text-blue-600 hover:underline mt-4 md:mt-0">Remove</button>
            </div>
  
            <!-- Wishlist Item 3 -->
            <div class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <img class="w-24 h-24 md:w-32 md:h-32 object-cover" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="Sienna Tee">
              <div class="flex-grow md:px-4 text-center md:text-left">
                <h3 class="text-lg font-semibold">Basic Tee</h3>
                <p class="text-gray-600">$32.00</p>
                <p class="text-gray-500">Sienna</p>
                <p class="text-gray-500">Large</p>
                <p class="text-green-600">In stock</p>
              </div>
              <button class="text-blue-600 hover:underline mt-4 md:mt-0">Remove</button>
            </div>
          </div>
        </div>
  
        <!-- Cart Section -->
        <div class="w-full md:w-1/3">
          <button @click="isCartOpen = true" class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Open Cart</button>
  
          <div v-if="isCartOpen" class="relative z-10 mt-4" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <!-- Background backdrop -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div class="fixed inset-0 overflow-hidden">
              <div class="absolute inset-0 overflow-hidden">
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div class="pointer-events-auto w-screen max-w-md">
                    <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div class="flex items-start justify-between">
                          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping Cart</h2>
                          <button @click="isCartOpen = false" type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Close panel</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
  
                        <!-- Cart content -->
                        <div class="mt-8">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <!-- Cart Item 1 -->
                            <li class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch" class="h-full w-full object-cover object-center">
                              </div>
                              <div class="ml-4 flex flex-1 flex-col">
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3><a href="#">Throwback Hip Bag</a></h3>
                                  <p class="ml-4">$90.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty 1</p>
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </li>
  
                            <!-- Cart Item 2 -->
                            <li class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel" class="h-full w-full object-cover object-center">
                              </div>
                              <div class="ml-4 flex flex-1 flex-col">
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3><a href="#">Medium Stuff Satchel</a></h3>
                                  <p class="ml-4">$32.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">Blue</p>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty 1</p>
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
  
                      <!-- Subtotal and Checkout -->
                      <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$122.00</p>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div class="mt-6">
                          <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                        </div>
                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button @click="isCartOpen = false" type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isCartOpen: false, // Cart state
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional styles for better layout */
  .flex {
    display: flex;
  }
  </style>
  