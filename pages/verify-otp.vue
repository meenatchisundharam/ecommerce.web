<template>
    <div class="flex h-screen flex-col items-center justify-center space-y-5 max-w-md mx-auto">
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p class="text-md md:text-xl">Enter the <span class="text-blue-600">OTP</span> we just sent you.</p>
      </div>
      <div class="flex flex-col max-w-md space-y-5 mt-3">
        <input
          type="text"
          placeholder="otp"
          class="px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <button
          class="flex items-center justify-center mt-3 px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-blue-600 text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  </template>
  