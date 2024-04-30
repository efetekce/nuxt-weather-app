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
    class="relative grid grid-cols-1 lg:grid-cols-4 bg-slate-900/80 p-4 lg:p-8 rounded-xl text-white"
  >
    <!-- left bar -->
    <section
      class="flex flex-col justify-center items-center border-white lg:border-r-2 h-full text-center"
    >
      <!-- left main card -->
      <div
        class="flex flex-col justify-center items-center space-y-4 p-8 w-full text-xl"
      >
        <p class="font-semibold text-2xl">{{ location?.location.name }}</p>
        <p>
          <span v-if="location?.location.region">
            {{ location?.location.region }},</span
          >
          <span class="text-md">{{ location?.location.country }}</span>
        </p>
        <div class="flex justify-center items-center space-x-2">
          <img :src="location?.current.condition.icon" class="w-24 h-24" />
          <p class="flex flex-col text-center">
            <span>{{ Math.round(location?.current.temp_c) }} &deg;C</span>
            <span>{{ location?.current.condition.text }}</span>
          </p>
        </div>

        <p>
          {{
            new Date(location?.location.localtime).toLocaleTimeString("en-us", {
              hour: "numeric",
              minute: "2-digit",
            })
          }}
        </p>
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
    </section>

    <!-- right bar -->

    <section
      class="flex flex-col justify-center items-center space-y-12 col-span-3"
    >
      <!-- overview section -->
      <div class="flex flex-col justify-center items-center space-y-4">
        <h2 class="font-bold text-2xl">Today's Overview</h2>
        <section
          class="lg:flex justify-center items-center gap-4 grid grid-cols-2"
        >
          <OverviewMiniCard wind />
          <OverviewMiniCard humidity />
          <OverviewMiniCard precip />
          <OverviewMiniCard uv />
          <OverviewMiniCard feelslike class="col-span-2" />
        </section>
      </div>

      <!-- forecast section -->
      <div class="flex flex-col justify-center items-center p-4">
        <h2 class="font-bold text-2xl tracking-wide">This week</h2>
        <section class="gap-4 grid grid-cols-2 lg:grid-cols-3">
          <ForecastMiniCard
            v-for="day in location?.forecast.forecastday"
            :day="day"
            class="lg:first:col-span-1 first:col-span-2"
          />
        </section>
      </div>
    </section>
    <button
      class="top-8 lg:top-4 right-8 lg:right-4 absolute font-semibold text-2xl"
      @click="weatherStore.showModal = false"
    >
      X
    </button>
  </div>
</template>
