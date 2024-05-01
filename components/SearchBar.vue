<script setup lang="ts">
const store = useWeatherStore();
const searchTerm = computed(() => store.searchTerm);
const showDashboard = computed(() => store.showDashboard);
const { handleSearch, getWeather } = useWeatherStore();
const showSuggestionBar = computed(() => store.showSuggestionBar);

const animatedDiv = ref<HTMLElement>();

const { apply } = useMotion(animatedDiv, {
  initial: {
    scale: 1,
    opacity: 0.55,
  },
  enter: {
    scale: 1.2,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1500,
    },
  },
  reset: {
    scale: 1,
    opacity: 0.55,
    transition: {
      duration: 750,
    },
  },
});
const handleAnimation = async () => {
  await apply({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 25 },
  });
};

onClickOutside(animatedDiv, async (event) => {
  store.showSuggestionBar = false;
  store.searchTerm.query = "";

  await apply("reset");
  await apply("enter");
});
</script>

<template>
  <!-- container -->
  <div class="flex flex-col justify-center">
    <!-- {{ query }} -->
    <form @submit.prevent>
      <div
        ref="animatedDiv"
        class="flex items-center bg-gray-300 shadow-lg mx-auto border rounded-lg w-full"
      >
        <i class="p-2 text-indigo-500"><Icon /></i>
        <input
          type="text"
          placeholder="start with searching for a location"
          class="flex-grow border-0 bg-gray-300 p-2 rounded-lg w-full placeholder:lg:text-lg placeholder:text-center placeholder:text-sm transition duration-500 outline-0 focus:ring-2 focus:ring-indigo-500 ring-inset"
          v-model="searchTerm.query"
          @input="handleSearch"
          @click="handleAnimation"
        />
      </div>
    </form>
    <!-- suggestions bar -->

    <div
      class="bg-slate-100 mx-auto mt-2 rounded-xl w-full text-center"
      v-if="showSuggestionBar"
    >
      <p v-if="searchTerm.results?.length === 0">No results found.</p>
      <div
        v-for="result in searchTerm.results"
        :key="result.name"
        class="rounded-xl w-full"
        v-motion-fade
      >
        <button
          class="my-2 px-3 w-full hover:font-semibold text-center hover:text-indigo-500"
          @click="getWeather(result.id)"
        >
          <span>{{ result.name }}</span>
          <span v-if="result.region">, {{ result.region }}</span>
          <span v-if="result.country">, {{ result.country }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
