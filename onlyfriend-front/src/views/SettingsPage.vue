<!-- 📁 src/views/SettingsPage.vue -->
<template>
  <div class="p-4 pb-20">
    <h1 class="text-xl font-bold mb-6">Paramètres</h1>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-xl shadow">
        <h2 class="text-lg font-semibold mb-2">Notifications</h2>
        <label class="flex items-center justify-between">
          <span class="text-sm text-gray-700">Activer les notifications</span>
          <input type="checkbox" class="form-checkbox" checked />
        </label>
      </div>

      <div class="bg-white p-4 rounded-xl shadow">
        <h2 class="text-lg font-semibold mb-2">Thème</h2>
        <select class="w-full border rounded-lg p-2 text-sm">
          <option value="light">Clair</option>
          <option value="dark">Sombre</option>
        </select>
      </div>

      <div class="bg-white p-4 rounded-xl shadow">
        <h2 class="text-lg font-semibold mb-2">Sécurité</h2>
        <button class="bg-red-500 text-white px-4 py-2 rounded-full text-sm">Se déconnecter</button>
      </div>
    </div>
  </div>
</template>
