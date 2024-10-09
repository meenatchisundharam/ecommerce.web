<template>
    <div class="flex h-screen flex-col items-center justify-center space-y-5 max-w-md mx-auto">
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p class="text-md md:text-xl">Enter the <span class="text-blue-600">OTP</span> we just sent you.</p>
      </div>
      <div class="flex flex-col max-w-md space-y-5 mt-3">
        <input
        v-model="userData.email"
          type="email"
          placeholder="email"
          class="px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        ></input>
        <input
        v-model="userData.verificationCode"
          type="text"
          placeholder="otp"
          class="px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <button
        @click="Confirm()"
          class="flex items-center justify-center mt-3 px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-blue-600 text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  </template>

<script>
export default{
  data(){
    return {
      userData:{
        email: "",
        verificationCode: "",

      },
    };
  },
  mounted(){},
  methods : {
    Confirm() {
      this.$http.$post(`${this.$config.public.apiUrl}/auth/verify`, {
        body:{
          ...this.userData,
        }
      })
      .then((res) => {
        if(res.success) {
          this.$router.push("/login");
        } else {
          alert(res.message);
        }
      });
    },
  },
};
</script>
  