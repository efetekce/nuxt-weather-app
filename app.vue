<script setup lang="ts">
const weatherStore = useWeatherStore();
</script>

<template>
  <div
    class="relative flex flex-col justify-center items-center bg-[url('./bg.avif')] bg-cover bg-center min-h-screen"
  >
    <SearchBar />

    <Transition name="fade">
      <div
        v-show="weatherStore.showModal"
        class="absolute m-auto place-self-center"
      >
        <WeatherDash />
      </div>
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
