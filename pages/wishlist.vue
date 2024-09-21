<template>
    <div>
        <Navbar/>
        <div class="max-w-5xl mx-auto p-4">
  <!-- Shopping Cart Header -->
  <h2 class="text-2xl font-bold mb-4">Items in your shopping cart</h2>
   <h1 class="text-2xl font-bold mb-4 text-center" >Wish List</h1>
  <!-- Cart Items -->
  <div class="space-y-4">
    <!-- Item 1 -->
    <div class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
      <img class="w-24 h-24 md:w-32 md:h-32 object-cover" src="https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg" alt="Mint cotton t-shirt with wavey lines pattern">
      <div class="flex-grow md:px-4 text-center md:text-left">
        <h3 class="text-lg font-semibold">Artwork Tee</h3>
        <p class="text-gray-600">$32.00</p>
        <p class="text-gray-500">Mint</p>
        <p class="text-gray-500">Medium</p>
        
      </div>
      <button class="text-blue-600 hover:underline mt-4 md:mt-0">Remove</button>
    </div>

    <!-- Item 2 -->
    <div class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
      <img class="w-24 h-24 md:w-32 md:h-32 object-cover" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg
" alt="Charcoal cotton t-shirt">
      <div class="flex-grow md:px-4 text-center md:text-left">
        <h3 class="text-lg font-semibold">Basic Tee</h3>
        <p class="text-gray-600">$32.00</p>
        <p class="text-gray-500">Charcoal</p>
        <p class="text-gray-500">Large</p>
      </div>
      <button class="text-blue-600 hover:underline mt-4 md:mt-0">Remove</button>
    </div>

    <!-- Item 3 -->
    <div class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
      <img class="w-24 h-24 md:w-32 md:h-32 object-cover" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg
" alt="Sienna cotton t-shirt">
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

  <!-- Order Summary -->
  <div class="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold">Order summary</h3>
    <div class="flex justify-between mt-2">
      <p class="text-gray-600">Subtotal</p>
      <p class="font-bold">$96.00</p>
    </div>
    <p class="text-gray-500 text-sm mt-1">Shipping and taxes will be calculated at checkout.</p>
    <div class="mt-4 space-y-2">
      <button class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Checkout</button>
      <NuxtLink to="/">
        <button class="w-full py-2 mt-4 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition">Continue Shopping</button>
      </NuxtLink>
    </div>
  </div>
</div>

    </div>
</template>