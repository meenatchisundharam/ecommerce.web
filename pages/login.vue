<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input 
                v-model="userData.email"
                type="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="relative">
              <input
                v-model="userData.password"
                :type="passwordVisible ? 'text' : 'password'"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your password"
                @keyup.enter="login()"
              />
              <div
                @click="passwordVisible = !passwordVisible"
                class="absolute -translate-y-1/2 right-4 top-1/2 text-black/80"
              >
                <i v-if="passwordVisible" class="fa-solid fa-eye-slash"></i>
                <i v-else class="fa-solid fa-eye"></i>
              </div>
            </div>

          <div>
            <button 
              @click="login()"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </button>
          </div>
        </div>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Forget  your password?
            <NuxtLink to="/forgot-password" class="text-blue-600 decoration-2 hover:underline font-medium">
              Forget password
            </NuxtLink>
          </p>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <NuxtLink to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Created An Account
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      passwordVisible: false,
    };
  },
  mounted(){
    let isLoggedIn = useCookie("isLoggedIn");
    if(isLoggedIn.value && isLoggedIn.value == true){
      this.$router.push("/");
    }
  },
  methods: {
    login() {

      const options = {
  timeout: 10000, // 10 seconds
};
this.$http.$post(`${this.$config.public.apiUrl}/auth/login`, {
        body:{
          ...this.userData,
        }
      }).then((res) =>{
        if(res.success) {

          let isLoggedIn = useCookie("isLoggedIn");
          isLoggedIn.value = "true";

          let userId = useCookie("userId");
          userId.value = res.user.userId;

          let name = useCookie("name");
          name.value = res.user.name;

          let email = useCookie("email");
          email.value = res.user.email;

          this.$router.push("/");
          
        }else {
          alert(res.message);
        }
      })
    }
  }
}
</script>

