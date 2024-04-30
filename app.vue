<script setup lang="ts">
const weatherStore = useWeatherStore();
</script>

<template>
  <div
    class="relative place-items-center grid bg-[url('./bg.avif')] bg-cover bg-center p-4 min-h-dvh"
  >
    <Transition name="searchbarFade">
      <SearchBar v-if="!weatherStore.showModal" />
    </Transition>
    <Transition name="fade">
      <WeatherDash v-if="weatherStore.showModal" />
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.searchbarFade-enter-active {
  transition: opacity 2.5s ease-in-out;
}

.searchbarFade-enter-from,
.searchbarFade-leave-to {
  opacity: 0;
}
</style>
