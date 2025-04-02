<template>
  <div class="min-h-screen bg-white text-gray-800">
    <div class="max-w-md mx-auto p-6 pb-28">
      <!-- Avatar + Info -->
      <div class="flex items-center gap-4 mb-6">
        <img
          src="https://i.pravatar.cc/100?img=7"
          class="w-20 h-20 rounded-full object-cover border border-gray-200 shadow-sm"
        />
        <div>
          <h2 class="text-2xl font-semibold">Sarah Meunier</h2>
          <p class="text-sm text-gray-500">@sarahm</p>
        </div>
      </div>

      <!-- Bio -->
      <div class="mb-6">
        <p class="text-sm leading-relaxed">
          ☕ Amatrice de café & musique 🎶<br />
          📍 Paris, France
        </p>
      </div>

      <!-- Profile Actions -->
      <div class="space-y-3 mb-6">
        <button class="w-full px-4 py-2 text-sm border rounded-xl hover:bg-gray-50 transition">
          Modifier le profil
        </button>
        <button class="w-full px-4 py-2 text-sm border rounded-xl hover:bg-gray-50 transition">
          Gérer mes amis
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 text-center border-t pt-4">
        <div>
          <p class="text-lg font-medium">28</p>
          <p class="text-xs text-gray-500">Amis</p>
        </div>
        <div>
          <p class="text-lg font-medium">14</p>
          <p class="text-xs text-gray-500">Conversations</p>
        </div>
        <div>
          <p class="text-lg font-medium">3</p>
          <p class="text-xs text-gray-500">Favoris</p>
        </div>
      </div>
    </div>
  </div>
</template>
