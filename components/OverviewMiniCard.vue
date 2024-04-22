<script setup lang="ts">
const weatherStore = useWeatherStore();
const forecastLocation = computed(() => weatherStore.location?.current);
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
    class="flex flex-col justify-center items-center bg-slate-400 bg-opacity-60 hover:bg-opacity-15 p-4 rounded-xl w-1/4 h-1/2 text-white hover:transition duration-500 ring-2 ring-inset"
  >
    <div
      v-if="wind"
      class="flex flex-col space-y-2 p-4 font-semibold text-center"
    >
      <!-- <p>{{ forecastLocation.wind_dir }} direction</p> -->
      <p>Wind</p>
      <p>{{ forecastLocation?.wind_kph }} km/h</p>
    </div>
    <div
      v-if="uv"
      class="flex flex-col space-y-2 p-4 font-semibold text-center"
    >
      <p>UV index</p>
      <p>{{ forecastLocation?.uv }}</p>
    </div>
    <div
      v-if="humidity"
      class="flex flex-col space-y-2 p-4 font-semibold text-center"
    >
      <p>Humidity</p>
      <p>{{ forecastLocation?.humidity }}%</p>
    </div>
    <div
      v-if="precip"
      class="flex flex-col space-y-2 p-4 font-semibold text-center"
    >
      <p>Precipitation</p>
      <p>{{ forecastLocation?.precip_mm }} mm</p>
    </div>
    <div
      v-if="feelslike"
      class="flex flex-col space-y-2 p-4 font-semibold text-center"
    >
      <p>Feels like</p>
      <p>{{ forecastLocation?.feelslike_c }}&deg;</p>
    </div>
  </div>
</template>

<style scoped></style>
