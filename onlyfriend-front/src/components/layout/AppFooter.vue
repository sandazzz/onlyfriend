<!-- 📁 src/components/AppFooter.vue -->
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { Users, MessageSquare, UserPlus, User } from 'lucide-vue-next'

const route = useRoute()
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-white/80 border-t border-gray-200 shadow-md z-50"
  >
    <div class="w-full max-w-md mx-auto flex justify-between px-12 py-2 text-gray-500">
      <RouterLink
        to="/friends"
        class="flex flex-col items-center text-xs transition duration-150 ease-in-out"
        :class="{ 'text-blue-500': route.path === '/friends' }"
      >
        <Users class="w-6 h-6 mb-0.5" />
        <span class="text-[11px] leading-tight">Amis</span>
      </RouterLink>

      <RouterLink
        to="/conversations"
        class="flex flex-col items-center text-xs transition duration-150 ease-in-out"
        :class="{ 'text-blue-500': route.path === '/conversations' }"
      >
        <MessageSquare class="w-6 h-6 mb-0.5" />
        <span class="text-[11px] leading-tight">Chats</span>
      </RouterLink>

      <RouterLink
        to="/suggestions"
        class="flex flex-col items-center text-xs transition duration-150 ease-in-out"
        :class="{ 'text-blue-500': route.path === '/suggestions' }"
      >
        <UserPlus class="w-6 h-6 mb-0.5" />
        <span class="text-[11px] leading-tight">Ajouter</span>
      </RouterLink>

      <RouterLink
        to="/profile"
        class="flex flex-col items-center text-xs transition duration-150 ease-in-out"
        :class="{ 'text-blue-500': route.path === '/profile' }"
      >
        <User class="w-6 h-6 mb-0.5" />
        <span class="text-[11px] leading-tight">Moi</span>
      </RouterLink>
    </div>
  </nav>
</template>
