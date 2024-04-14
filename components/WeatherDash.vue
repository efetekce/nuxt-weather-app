<script setup>
const weatherStore = useWeatherStore();
console.log(weatherStore.location);

const location = computed(() => weatherStore.location);
console.log(location);
</script>

<template>
  <div
    class="relative grid grid-cols-4 bg-slate-700 mx-auto rounded-xl text-white container"
  >
    <!-- left bar -->
    <div
      class="flex flex-col justify-center items-center border-white col-span-1 border-r-2"
    >
      <!-- left main card -->
      <div
        class="flex flex-col justify-center items-center border-slate-300 p-4 border-b-2 w-full text-xl"
      >
        <p class="font-semibold">{{ location?.location.name }}</p>
        <p>
          <span v-if="location?.location.region">
            {{ location?.location.region }},</span
          >
          {{ location?.location.country }}
        </p>
        <img :src="location?.current.condition.icon" />
        <p>{{ location?.current.temp_c }}</p>
        <p>{{ location?.current.condition.text }}</p>
        <p>
          {{
            new Date().toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </p>
      </div>
      <div>weather data</div>
      <div>weather data</div>
    </div>

    <!-- right bar -->
    <div class="flex flex-col justify-evenly items-center col-span-3">
      <div class="flex flex-col justify-center items-center">
        <h2 class="font-bold text-2xl">Today's Overview</h2>
        <div class="flex flex-wrap justify-center items-center gap-4">
          <OverviewMiniCard wind />
          <OverviewMiniCard humidity />
          <OverviewMiniCard precip />
          <OverviewMiniCard uv />
          <OverviewMiniCard feelslike />
          <OverviewMiniCard />
        </div>
      </div>
      <div>This week</div>
    </div>
    <button
      class="top-4 right-4 absolute"
      @click="weatherStore.showModal = false"
    >
      X
    </button>
  </div>
</template>

<style scoped></style>
