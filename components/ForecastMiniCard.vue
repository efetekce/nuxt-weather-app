<script setup lang="ts">
import type { Forecastday } from "../types";
type Props = {
  day: Forecastday;
};
defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-slate-400/60 hover:bg-slate-300/90 p-4 lg:p-8 rounded-xl max-h-48 text-center hover:text-black transition duration-500 outline outline-blue-400/20"
  >
    <p class="font-bold tracking-wide">
      {{
        new Date(day.date).toLocaleDateString("en-us", {
          weekday: "long",
        })
      }}
    </p>
    <p
      class="flex flex-col flex-wrap justify-center items-center p-2 font-semibold"
    >
      <span>{{ day.day.condition.text }}</span>
      <img :src="day.day.condition.icon" class="w-20 h-20" />
      <span>{{ Math.round(day.day.avgtemp_c) }} &deg;C</span>
    </p>
  </div>
</template>
