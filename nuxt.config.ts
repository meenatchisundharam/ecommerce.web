// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',  // Set Nuxt compatibility date
  devtools: { enabled: true },      // Enable devtools for debugging

  // Modules to include in the project
  modules: [
    '@nuxtjs/tailwindcss',          // Tailwind CSS for utility-first styling
    '@nuxt-alt/http',               // Nuxt Alt HTTP module for HTTP requests
  ],

  // HTTP configuration for making API requests
  http: {
    baseURL: "http://localhost:5000/api",          // Base API URL for the server
    credentials: "omit",                           // Omit credentials for CORS
    browserBaseURL: "http://localhost:5000/api",   // Base API URL for the browser
  },

  // App configuration for HTML <head> settings
  app: {
    head: {
      title: "Ecommerce",  // Page title
      charset: "utf-8",  // Set charset to UTF-8 for proper encoding
      viewport: "width=device-width, initial-scale=1",  // Responsive design settings

      // External links to stylesheets
      link: [
        {
          rel: "icon", 
          type: "image/x-icon", 
          href: "/favicon.ico", // Favicon
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css", // Font Awesome
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",  // Swiper CSS
        },
      ],

      // External scripts (for Swiper in this case)
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",  // Swiper JS
        },
      ],

      // Meta tags for SEO and accessibility
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Ecommerce" },
        { name: "author", content: "Meenatchisundharam" },  // Author name
      ],
    },
  },

  // Tailwind CSS custom configuration (if you have custom styles)
  css: [
    "@/assets/style.scss",  // Global SCSS styles
  ],

  // Runtime configuration
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "http://localhost:5000/api",  // Runtime API URL
    },
  },
});
