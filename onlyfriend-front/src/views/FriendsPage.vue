<!-- 📁 src/views/FriendsPage.vue -->
<script lang="ts" setup>
const requests = [
  { id: 1, name: 'Nicolas Jean', username: 'nicoj', avatar: 'https://i.pravatar.cc/100?img=4' },
  { id: 2, name: 'Emma Leroy', username: 'emmalr', avatar: 'https://i.pravatar.cc/100?img=5' },
]

const friends = [
  { id: 11, name: 'Sarah Meunier', username: 'sarahm', avatar: 'https://i.pravatar.cc/100?img=6' },
  { id: 12, name: 'Marc Lefevre', username: 'marclef', avatar: 'https://i.pravatar.cc/100?img=10' },
]
</script>

<template>
  <div class="p-4 pb-20 bg-gray-50 flex justify-center">
    <div class="w-full max-w-md">
      <h1 class="text-xl font-bold mb-4">Mes amis</h1>

      <div v-if="requests.length" class="mb-6">
        <h2 class="text-lg font-semibold mb-2">Demandes reçues</h2>
        <div
          v-for="user in requests"
          :key="user.id"
          class="flex items-center justify-between mb-2 bg-white p-3 rounded-xl shadow"
        >
          <div class="flex items-center gap-3">
            <img :src="user.avatar" class="w-10 h-10 rounded-full object-cover" />
            <div>
              <p class="font-medium">{{ user.name }}</p>
              <p class="text-sm text-gray-500">@{{ user.username }}</p>
            </div>
          </div>
          <div class="flex gap-2">
            <button class="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Accepter</button>
            <button class="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm">
              Refuser
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-2">Liste d'amis</h2>
        <div
          v-for="friend in friends"
          :key="friend.id"
          class="flex items-center justify-between mb-3 bg-white p-3 rounded-xl shadow"
        >
          <div class="flex items-center gap-3">
            <img :src="friend.avatar" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <p class="font-medium">{{ friend.name }}</p>
              <p class="text-sm text-gray-500">@{{ friend.username }}</p>
            </div>
          </div>
          <button class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Discuter</button>
        </div>
      </div>
    </div>
  </div>
</template>
