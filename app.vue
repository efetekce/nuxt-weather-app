<script setup lang="ts">
const weatherStore = useWeatherStore();
</script>

<template>
  <div
    class="relative place-items-center grid bg-[url('./bg.avif')] bg-cover bg-center p-4 min-h-dvh"
  >
    <SearchBar v-if="!weatherStore.showModal" />

    <Transition name="fade">
      <WeatherDash v-if="weatherStore.showModal" />
    </Transition>
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.5s ease-in;
}
/* .fade-leave-active {
  transition: opacity 0s;
} */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
