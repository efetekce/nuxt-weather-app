<script setup lang="ts">
import type { Forecastday } from "../types";
type Props = {
  day: Forecastday;
};
defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-slate-400 hover:bg-slate-300 py-24 rounded-xl w-36 h-48 text-center hover:text-slate-700 duration-500 ring-2 ring-blue-300 ring-inset"
  >
    <p class="font-bold tracking-wide">
      {{
        new Date(day.date).toLocaleDateString("en-us", {
          weekday: "long",
        })
      }}
    </p>
    <p class="flex flex-col flex-wrap justify-center items-center p-2">
      <span>{{ day.day.condition.text }}</span>
      <img :src="day.day.condition.icon" class="w-20 h-20" />
      <span>{{ Math.round(day.day.avgtemp_c) }} &deg;C</span>
    </p>
  </div>
</template>
