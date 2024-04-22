<script setup lang="ts">
const weatherStore = useWeatherStore();
</script>

<template>
  <div
    class="relative flex flex-col justify-center items-center bg-zinc-700 bg-opacity-90 min-h-screen"
  >
    <SearchBar />
    <Transition name="fade">
      <div
        v-if="weatherStore.showModal"
        class="absolute m-auto place-self-center"
      >
        <WeatherDash />
      </div>
    </Transition>
  </div>
  <!-- <div class="gap-4 grid grid-cols-2 w-full">
    <div v-for="place in places" :key="place.location.name">
      <WeatherCard :place="place" />
    </div>
  </div> -->
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
