<!-- 📁 src/views/SuggestionsPage.vue -->
<script lang="ts" setup>
const suggestions = [
  { id: 1, name: 'Lina Dupont', username: 'linadp', avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, name: 'Yassine Karim', username: 'ykarim', avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: 3, name: 'Sophie Martin', username: 'sophiem', avatar: 'https://i.pravatar.cc/100?img=3' },
]
</script>

<template>
  <div class="p-4 pb-20 bg-gray-50 flex justify-center min-h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-xl font-bold mb-4">Suggestions d'amis</h1>
      <div
        v-for="user in suggestions"
        :key="user.id"
        class="flex items-center justify-between mb-3 bg-white p-3 rounded-xl shadow"
      >
        <div class="flex items-center gap-3">
          <img :src="user.avatar" class="w-12 h-12 rounded-full object-cover" />
          <div>
            <p class="font-medium">{{ user.name }}</p>
            <p class="text-sm text-gray-500">@{{ user.username }}</p>
          </div>
        </div>
        <button class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f9fafb;
}
</style>
