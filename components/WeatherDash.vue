<script setup>
const weatherStore = useWeatherStore();
const location = computed(() => weatherStore.location);
// console.log(location.value);

const target = ref(null);
onClickOutside(target, (event) => {
  // console.log(event);
  weatherStore.showModal = false;
});
</script>

<template>
  <div
    ref="target"
    class="relative grid grid-cols-4 bg-slate-700 mx-auto p-12 rounded-xl text-white container"
  >
    <!-- left bar -->
    <div class="flex flex-col items-center border-white col-span-1 border-r-2">
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
        <img :src="location?.current.condition.icon" class="w-32 h-32" />
        <p>{{ location?.current.temp_c }} &deg;C</p>
        <p>{{ location?.current.condition.text }}</p>

        <!-- <img :src="location?.current.condition.icon" /> -->
        <!-- <p>{{ location?.current.humidity }}</p> -->
        <!-- <p>{{ location?.current.temp_c }}</p> -->
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

    <!-- overview section -->
    <section class="flex flex-col justify-center items-center col-span-3">
      <div class="flex flex-col justify-center items-center">
        <h2 class="font-bold text-2xl">Today's Overview</h2>
        <section class="flex flex-wrap justify-center items-center gap-4">
          <OverviewMiniCard wind />
          <OverviewMiniCard humidity />
          <OverviewMiniCard precip />
          <OverviewMiniCard uv />
          <OverviewMiniCard feelslike />
          <OverviewMiniCard />
        </section>
      </div>

      <!-- forecast section -->
      <div class="flex flex-col justify-center items-center">
        <h2 class="font-bold text-2xl tracking-wide">This week</h2>
        <section class="flex justify-center items-center">
          <div
            class="flex justify-center items-center space-x-4 p-4"
            v-for="day in location?.forecast.forecastday"
          >
            <ForecastMiniCard :day="day" />
          </div>
        </section>
      </div>
    </section>
    <button
      class="top-4 right-4 absolute"
      @click="weatherStore.showModal = false"
    >
      X
    </button>
  </div>
</template>

<style scoped></style>
