<script setup lang="ts">
const weatherStore = useWeatherStore();
</script>

<template>
  <div
    class="relative flex flex-col justify-center items-center bg-[url('./bg.avif')] bg-cover min-h-screen [pulse_4s_ease-in-out_infinite]"
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
  <!-- <div class="gap-4 grid grid-cols-2 w-full">
    <div v-for="place in places" :key="place.location.name">
      <WeatherCard :place="place" />
    </div>
  </div> -->
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
