<script setup lang="ts">
import { LogIn, Github } from 'lucide-vue-next'
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6"
  >
    <div class="bg-white shadow-xl rounded-2xl w-full max-w-sm p-6 text-center">
      <h1 class="text-3xl font-bold mb-1">Bienvenue 👋</h1>
      <p class="text-sm text-gray-500 mb-6">Connecte-toi pour retrouver tes amis</p>

      <button
        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 mb-3 transition"
      >
        <LogIn class="w-5 h-5" />
        Connexion avec Google
      </button>

      <button
        class="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 transition"
      >
        <Github class="w-5 h-5" />
        Connexion avec GitHub
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Pas besoin d’icônes Material ici si on utilise Lucide */
</style>
