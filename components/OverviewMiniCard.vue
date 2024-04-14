<script setup>
const weatherStore = useWeatherStore();
defineProps({
  wind: Boolean,
  precip: Boolean,
  humidity: Boolean,
  uv: Boolean,
  feelslike: Boolean,
});
</script>

<template>
  <div
    class="bg-slate-400 bg-opacity-60 p-4 rounded-xl text-white outline-dashed"
  >
    <div v-if="wind">
      <p>{{ weatherStore.location.current.wind_dir }} direction</p>
      <p>{{ weatherStore.location.current.wind_kph }} km/h</p>
    </div>
    <div v-if="uv">
      <p>{{ weatherStore.location.current.uv }}</p>
    </div>
    <div v-if="humidity">
      <p>{{ weatherStore.location.current.humidity }}</p>
    </div>
    <div v-if="precip">
      <p>{{ weatherStore.location.current.precip_mm }}</p>
    </div>
    <div v-if="feelslike">
      <p>{{ weatherStore.location.current.feelslike_c }} &deg;</p>
    </div>
  </div>
</template>

<style scoped></style>
