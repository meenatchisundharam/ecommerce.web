<template>
    <div class="p-6">
      <div class="flex items-center space-x-4">
        <div>
          <img
            src="https://www.gravatar.com/avatar?d=mp"
            alt="Profile Icon"
            class="w-16 h-16 rounded-full"
          />
        </div>
        <div>
          <h2 class="text-xl font-bold">Profile Information</h2>
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>User ID:</strong> {{ user.userId }}</p>
        </div>
      </div>
  
      <div class="mt-6">
        <button
          @click="logout"
          class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'nuxt/app'
  
  const router = useRouter()
  
  const user = ref({
    name: '',
    email: '',
    userId: ''
  })
  
  const useUserSession = () => {
    const cookieOptions = {
      maxAge: 0,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    }
  
    const clearCookie = (name) => {
      const cookie = useCookie(name)
      cookie.value = null
      useCookie(name, cookieOptions)
    }
  
    const logout = async () => {
      console.log('Logging out...')
  
      // Clear cookies
      const cookiesToClear = ['name', 'email', 'userId', 'isLoggedIn']
      cookiesToClear.forEach(clearCookie)
  
      // Double-check if cookies are cleared
      cookiesToClear.forEach(name => {
        const cookie = useCookie(name)
        console.log(`${name} cookie value after clearing:`, cookie.value)
      })
  
      try {
        // Perform server-side logout
        await $fetch('/api/logout', { method: 'POST' })
        console.log('Server-side logout successful')
      } catch (error) {
        console.error('Error during server-side logout:', error)
      }
  
      // Redirect to login page
      router.push('/')
    }
  
    return {
      user: {
        name: useCookie('name').value,
        email: useCookie('email').value,
        userId: useCookie('userId').value
      },
      isLoggedIn: useCookie('isLoggedIn').value,
      logout
    }
  }
  
  const { user: userData, isLoggedIn, logout } = useUserSession()
  
  onMounted(() => {
    if (!isLoggedIn) {
      router.push('/')
    } else {
      user.value = userData
    }
  })
  </script>