<template>
    <main id="content" role="main" class="w-full h-screen flex items-center justify-center  max-w-md mx-auto p-6">
    <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <NuxtLink to="/login" class="text-blue-600 decoration-2 hover:underline font-medium">
              Login here
            </NuxtLink>
          </p>
        </div>

        <div class="mt-5">
          <div>
            <div class="grid gap-y-4">
              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                <div class="relative">
                  <input
                  v-model="userData.email"
                  type="email" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error">
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button 
              @click="forgetPassword()"    
              type="submit" class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <div class=" flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
      
      <a class="px-5 mt-3 inline-flex items-center justify-center gap-x-2 text-sm text-blue-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#">
        
        Contact us!
      </a>
      </div>
      </div>
    </div>

    
  </main>
</template>

<script>
export default{
  data(){
    return {
      userData:{
        email: "",

      },
    };
  },
  mounted(){},
  methods : {
    forgetPassword(){
      this.$http.$post(`${this.$config.public.apiUrl}/auth/forgot-password`, {
        body:{
          ...this.userData,
        }
      })
      .then((res) => {
        if(res.success) {
          this.$router.push("/reset-password");
        } else {
          alert(res.message);
        }
      });
    },
  },
};
</script>
  