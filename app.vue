<script setup lang="ts">
const weatherStore = useWeatherStore();
const showDashboard = computed(() => weatherStore.showDashboard);
</script>

<template>
  <div
    class="relative place-items-center grid bg-[url('./bg.avif')] bg-cover bg-center p-4 min-h-dvh"
  >
    <Transition
      enter-active-class="transition-opacity duration-750 ease-in"
      leave-active-class="transition-opacity duration-500 ease-out"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <div v-if="!showDashboard" class="w-3/4 lg:w-1/3"><SearchBar /></div>
      <div v-else><WeatherDash /></div>
    </Transition>
  </div>
</template>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
} */
/* .fade-leave-active {
  transition: opacity 0s;
} */
/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
