<!-- 📁 src/views/ConversationsPage.vue -->
<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const conversations = [
  {
    id: 11,
    name: 'Lucie',
    avatar: 'https://i.pravatar.cc/100?img=8',
    lastMessage: 'On se voit ce week-end ?',
    unread: true,
  },
  {
    id: 12,
    name: 'Thomas',
    avatar: 'https://i.pravatar.cc/100?img=9',
    lastMessage: 'Trop bien ce film !',
    unread: false,
  },
]
</script>

<template>
  <div class="p-4 pb-24 bg-gray-50 min-h-screen flex justify-center">
    <div class="w-full max-w-md">
      <h1 class="text-xl font-bold mb-4">Conversations</h1>

      <div
        v-for="chat in conversations"
        :key="chat.id"
        class="flex items-center justify-between p-3 mb-3 border-b border-slate-300"
      >
        <RouterLink :to="`/chat/${chat.id}`" class="flex items-center gap-3 flex-1">
          <img :src="chat.avatar" class="w-12 h-12 rounded-full object-cover" />
          <div class="flex-1 overflow-hidden">
            <p class="font-medium text-sm">{{ chat.name }}</p>
            <p class="text-sm text-gray-500 truncate w-full">{{ chat.lastMessage }}</p>
          </div>
        </RouterLink>

        <div v-if="chat.unread" class="ml-2 w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  </div>
</template>
