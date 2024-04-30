<script setup lang="ts">
import FeelIcon from "./icons/FeelIcon.vue";
import HumidIcon from "./icons/HumidIcon.vue";
import RainIcon from "./icons/RainIcon.vue";
import UVIcon from "./icons/UVIcon.vue";
import WindIcon from "./icons/WindIcon.vue";

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
    class="flex justify-center items-center bg-slate-400/60 hover:bg-slate-300/90 xl:p-4 rounded-xl text-center text-white hover:text-black transition duration-500 outline outline-blue-400/20 overviewcard"
  >
    <div v-if="wind">
      <WindIcon />
      <p>Wind</p>
      <p>{{ Math.round(forecastLocation?.wind_kph) }} km/h</p>
    </div>
    <div v-if="uv">
      <UVIcon />
      <p>UV index</p>
      <p>{{ forecastLocation?.uv }}</p>
    </div>
    <div v-if="humidity">
      <HumidIcon />
      <p>Humidity</p>
      <p>{{ forecastLocation?.humidity }}%</p>
    </div>
    <div v-if="precip">
      <RainIcon />
      <p>Precipitation</p>
      <p>{{ forecastLocation?.precip_mm }} mm</p>
    </div>
    <div v-if="feelslike" class="-center">
      <FeelIcon />
      <p>Feels like</p>
      <p>{{ Math.round(forecastLocation?.feelslike_c) }}&deg;</p>
    </div>
  </div>
</template>

<style scoped></style>
