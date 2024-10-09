<template>
  <div class="container mx-auto p-4">
    <div class="profile-info mb-6">
      <h2 class="text-2xl font-bold mb-4">Profile</h2>
      
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>

    <button 
      class="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600" 
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  mounted() {
    let isLoggedIn = useCookie("isLoggedIn");

    if (!isLoggedIn.value) {
      this.$router.push("/");
    } else {
      this.name = useCookie("name").value;
      this.email = useCookie("email").value;
    }
  },
  methods: {
    logout() {
      this.$router.push("/logout");
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
