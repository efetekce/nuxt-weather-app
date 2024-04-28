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
    class="relative place-items-center gap-x-4 grid grid-cols-4 bg-slate-900 opacity-80 mx-auto p-12 rounded-xl text-white container"
  >
    <!-- left bar -->
    <section
      class="flex flex-col justify-center items-center border-white col-span-1 border-r-2 h-full"
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
        <img :src="location?.current.condition.icon" class="w-24 h-24" />
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
        <p>
          <span></span>
          {{
            new Date(location?.location.localtime).toLocaleTimeString("en-us", {
              hour: "numeric",
              minute: "2-digit",
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
        <section class="flex justify-center items-center space-x-4">
          <OverviewMiniCard wind />
          <OverviewMiniCard humidity />
          <OverviewMiniCard precip />
          <OverviewMiniCard uv />
          <OverviewMiniCard feelslike />
          <!-- <OverviewMiniCard /> -->
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
      class="top-4 right-4 absolute font-semibold text-2xl"
      @click="weatherStore.showModal = false"
    >
      X
    </button>
  </div>
</template>

<style scoped></style>
