<template>
  <div class="flex flex-col h-screen bg-gradient-to-br from-pink-100 to-purple-100 items-center">
    <div class="w-full max-w-md flex flex-col h-full relative">
      <!-- Header -->
      <div
        class="p-4 backdrop-blur-md bg-white/80 shadow-md flex items-center gap-3 sticky top-0 z-10 rounded-b-3xl"
      >
        <img
          src="https://i.pravatar.cc/100?img=1"
          class="w-11 h-11 rounded-full object-cover ring-2 ring-white"
        />
        <h2 class="text-lg font-semibold text-gray-800">Lucie</h2>
      </div>

      <!-- Messages -->
      <div class="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <div class="flex">
          <div class="bg-white p-3 rounded-3xl shadow-md text-sm max-w-[75%]">Salut !</div>
        </div>
        <div class="flex justify-end">
          <div
            class="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-3 rounded-3xl shadow-md text-sm max-w-[75%]"
          >
            Hey, comment tu vas ?
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="absolute bottom-20 left-4 right-4">
        <div
          class="flex items-center gap-2 bg-white/80 backdrop-blur-md shadow-md px-4 py-2 rounded-full"
        >
          <input
            type="text"
            placeholder="Message..."
            class="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-500"
          />
          <button
            class="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm transition active:scale-95"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
